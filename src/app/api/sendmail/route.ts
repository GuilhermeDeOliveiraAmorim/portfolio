import { NextRequest, NextResponse } from "next/server";
var postmark = require("postmark");

export interface Email {
  firstName: string;
  lastName: string;
  email: string;
  job: string;
  message: string;
}

function isValidEmail(data: any): data is Email {
  return (
    typeof data === "object" &&
    typeof data.firstName === "string" &&
    typeof data.lastName === "string" &&
    typeof data.email === "string" &&
    typeof data.job === "string" &&
    typeof data.message === "string"
  );
}

export async function POST(request: NextRequest) {
  const myRequest: Email = await request.json();

  if (!myRequest || !isValidEmail(myRequest)) {
    return NextResponse.json(
      { error: "Dados inválidos no corpo da requisição" },
      { status: 400 }
    );
  }

  var client = new postmark.ServerClient(process.env.POSTMARK_SERVER_API_TOKEN);

  try {
    client.sendEmail({
      From: process.env.POSTMARK_EMAIL_FROM,
      To: process.env.POSTMARK_EMAIL_TO,
      Subject: "Mensagem do Portfólio",
      TextBody:
        "Mensagem: " +
        myRequest.message +
        "\n" +
        "Nome: " +
        myRequest.firstName +
        " " +
        myRequest.lastName +
        "\n" +
        "E-mail: " +
        myRequest.email +
        "\n" +
        "Job: " +
        myRequest.job,
    });

    return NextResponse.json("Enviado com sucesso!");
  } catch (error) {
    return NextResponse.json(error);
  }
}
