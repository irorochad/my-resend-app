import { Resend } from "resend";
import {NextRequest, NextResponse } from "next/server";
import WelcomeEmail from "../components/welcomeEmail";

const resend = new Resend("re_bnsZ8Hxt_ASJRxQRtqnaCwoNcGnQqLq4u");

interface APIType {
  username: string;
  email: string;
}

export async function POST(req: NextRequest) {
  const { username, email, } = await req.json();
  try {
   
    const data = await resend.emails.send({
      from: "Iroro Chadere <contact@brightsidecodes.com>",
      to: `${email}`, // the email address you want to send a message
      subject: "Hello world Email Test",
      react: WelcomeEmail({ username, email }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

