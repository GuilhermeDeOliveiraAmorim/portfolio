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
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
      error = error + "preciso do seu primeiro nome; ";
    }

    if (lastName === "") {
      error = error + "preciso do seu último nome; ";
    }

    if (email === "") {
      error = error + "preciso do seu melhor e-mail; ";
    }

    if (job === "") {
      error = error + "preciso que você informe o motivo do contato; ";
    }

    if (message === "") {
      error = error + "poderia me contar um pouco mais?";
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
    } catch (err) {
      setSuccess("");
      setError(
        "Não consegui enviar sua mensagem agora. Tente novamente ou me escreva em contato@guilhermeamorim.com."
      );
    }
  };

  return (
    <section className="px-8 py-16" id="contact">
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
          Aberto a oportunidades e a conversas sobre projetos. Me escreva pelo
          formulário ou pelos canais ao lado.
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
                Respondo o quanto antes. Se preferir, fale comigo direto pelo
                e-mail ou pelo LinkedIn.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  placeholder={""}
                >
                  +55 (82) 9 9976 7761
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography color="white" className="mb-2" placeholder={""}>
                  contato@guilhermeamorim.com
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/GuilhermeDeOliveiraAmorim"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <IconButton variant="text" color="white" placeholder={""}>
                    <FaGithub className="h-5 w-5" />
                  </IconButton>
                </a>
                <a
                  href="https://www.linkedin.com/in/guideoliveiraamorim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconButton variant="text" color="white" placeholder={""}>
                    <FaLinkedin className="h-5 w-5" />
                  </IconButton>
                </a>
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
                  Qual o motivo do contato? <b>{job}</b>
                </Typography>
                <div className="-ml-3 mb-14 ">
                  <ButtonGroup>
                    <Button onClick={() => setJob("Vaga")}>Vaga</Button>
                    <Button onClick={() => setJob("Projeto")}>Projeto</Button>
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
