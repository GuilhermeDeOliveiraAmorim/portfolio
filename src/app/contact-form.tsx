"use client";

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
  ButtonGroup,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FormEvent } from "react";
import { Email } from "./api/sendmail/route";
import axios from "axios";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    var error = "";

    if (firstName === "") {
      error = error + "preciso do seu primeito nome; ";
    }

    if (lastName === "") {
      error = error + "preciso do seu último nome; ";
    }

    if (email === "") {
      error = error + "preciso do seu melhor e-mail; ";
    }

    if (job === "") {
      error = error + "preciso que você informe um serviço; ";
    }

    if (message === "") {
      error = error + "poderia nos contar um pouco mais sobre o projeto?";
    }

    if (error !== "") {
      error = "Algumas ações são necessárias: " + error;
      setError(error);
      return;
    }

    const url = "/api/sendmail";
    const sendEmail: Email = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      job: job,
      message: message,
    };

    try {
      await axios.post(url, sendEmail);

      setError("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setJob("");
      setMessage("");
      setSuccess("Enviado com sucesso!");

      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      alert("NOK");
    }
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder={""}
        >
          Entre em contato
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
          placeholder={""}
        >
          Pronto para começar? Sinta-se à vontade para entrar em contato através
          do formulário.
        </Typography>
      </div>
      <div>
        <Card
          shadow={true}
          className="container mx-auto border border-gray/50"
          placeholder={""}
        >
          <CardBody
            className="grid grid-cols-1 lg:grid-cols-7 md:gap-10"
            placeholder={""}
          >
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography
                variant="h4"
                color="white"
                className="mb-2"
                placeholder={""}
              >
                Informações de Contato
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
                placeholder={""}
              >
                Preencha o formulário e entrarei em contato com você em até 24
                horas.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  placeholder={""}
                >
                  +55 (79) 9 9114 5680
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  placeholder={""}
                >
                  contato@guilhermeamorim.com
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white" placeholder={""}>
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" placeholder={""}>
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" placeholder={""}>
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nome"
                    name="firstName"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="ex. Guilherme"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Sobrenome"
                    name="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="ex. Amorim"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="E-mail"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="ex. contato@guilhermeamorim.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                  placeholder={""}
                >
                  No que você está interessado? <b>{job}</b>
                </Typography>
                <div className="-ml-3 mb-14 ">
                  <ButtonGroup>
                    <Button onClick={() => setJob("Web Site")}>Web Site</Button>
                    <Button onClick={() => setJob("Landing Page")}>
                      Landing Page
                    </Button>
                    <Button onClick={() => setJob("Outro")}>Outro</Button>
                  </ButtonGroup>
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Sua Mensagem"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {error ? (
                  <div className="text-red-300 mb-4">{error}</div>
                ) : (
                  <div className="text-green-300 mb-4">{success}</div>
                )}
                <div className="w-full flex justify-end">
                  <Button
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                    placeholder={""}
                    type="submit"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
