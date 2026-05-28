"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export async function submitContact(data: ContactData) {
  try {
    await resend.emails.send({
      from: "Flora ONG <noreply@flora.ar>",
      to: process.env.CONTACT_EMAIL || "hola@flora.ar",
      replyTo: data.email,
      subject: `Nueva consulta de ${data.nombre} — Flora ONG`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <div style="background: #2D4239; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: #71CE6A; font-size: 24px; margin: 0 0 4px;">Flora ONG</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 14px;">Nueva consulta desde el sitio web</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e6d9; font-size: 14px; color: #6b7f74; font-weight: 600; width: 120px;">Nombre</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e6d9; font-size: 14px; color: #1a2b23;">${data.nombre}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e6d9; font-size: 14px; color: #6b7f74; font-weight: 600;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e6d9; font-size: 14px; color: #1a2b23;">${data.email}</td>
            </tr>
            ${data.telefono ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e6d9; font-size: 14px; color: #6b7f74; font-weight: 600;">Teléfono</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e6d9; font-size: 14px; color: #1a2b23;">${data.telefono}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 12px 16px 0 0; font-size: 14px; color: #6b7f74; font-weight: 600; vertical-align: top;">Mensaje</td>
              <td style="padding: 12px 0 0; font-size: 14px; color: #1a2b23; line-height: 1.6;">${data.mensaje.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding: 16px; background: #F7F6EB; border-radius: 8px; font-size: 12px; color: #8a9e95;">
            Esta consulta fue enviada desde el formulario de contacto de flora.ar
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
