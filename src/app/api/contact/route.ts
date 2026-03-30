import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend("re_roa4wnMx_5sKis6RLdEK2t26NGV5F1xeX");

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, district, hisseType, deliveryDay, note } = body;

  try {
    await resend.emails.send({
      from: "Çınar Kurban Web <onboarding@resend.dev>",
      to: "cinarkurban@gmail.com",
      subject: `Yeni Randevu Talebi - ${name}`,
      html: `
        <h2>Yeni Randevu / Ön Kayıt Talebi</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td><strong>Ad Soyad</strong></td><td>${name}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${phone}</td></tr>
          <tr><td><strong>İlçe</strong></td><td>${district}</td></tr>
          <tr><td><strong>Hisse Türü</strong></td><td>${hisseType}</td></tr>
          <tr><td><strong>Tercih Edilen Gün</strong></td><td>${deliveryDay}</td></tr>
          <tr><td><strong>Özel Not</strong></td><td>${note || "Yok"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email gönderilemedi:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
