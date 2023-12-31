import { EmailTemplate } from "@/components/email-template";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Trust-Capital Investment <trust@trustcapitals.ltd>",
      to: ["joshuabamidele219@gmail.com"],
      subject: "Deposit Request",
      //   react: EmailTemplate({ firstName: "John" }) as ReactElement,
      html: "<h1>Hey</h1>",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
