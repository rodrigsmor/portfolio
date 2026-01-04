import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ContactFormData } from '@/types/contact';
import { ServiceEmail } from '@/utils/templates/service-email';

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, projectDescription } = body as ContactFormData;

  const emailHtml = await render(ServiceEmail({ firstName, description: projectDescription }));

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.NODEMAILER_EMAIL_SERVICE,
      auth: {
        user: process.env.NODEMAILER_EMAIL_USER,
        pass: process.env.NODEMAILER_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${firstName}" <${process.env.NODEMAILER_EMAIL_USER}>`,
      to: process.env.NODEMAILER_EMAIL_RECIPIENT,
      subject: "🚀 Novo Projeto - Portfólio",
      html: emailHtml,
    });

    return Response.json({ message: 'Sent' });
  } catch (error) {
    return Response.json(
      {
        message: 'Erro ao enviar e-mail',
        error
      },
      {
        status: 500
      }
    );
  }
}