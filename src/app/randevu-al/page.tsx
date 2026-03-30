"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import { BadgeCheck, CalendarCheck, Clock, ShieldCheck, MapPin, CheckCircle2, FileText } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function RandevuAlPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    hisseType: "",
    deliveryDay: "",
    note: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email gönder
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {});

    // WhatsApp'a yönlendir
    const text = `Merhaba, 2026 Kurban Kesim Ön Kayıt / Randevu talebim var:
*Ad Soyad:* ${formData.name}
*Telefon:* ${formData.phone}
*İlçe:* ${formData.district}
*Hisse Türü:* ${formData.hisseType}
*Tercih Edilen Gün:* ${formData.deliveryDay}
*Özel Not:* ${formData.note || "Yok"}`;

    const wpUrl = `https://wa.me/902129099495?text=${encodeURIComponent(text)}`;
    window.open(wpUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── 1. CINEMATIC HERO SECTION ── */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Safe Real Photography Background */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0 transform scale-105"
          style={{ backgroundImage: "url('/pazarlık.jpg')" }}
        >
          {/* Deep gradient for white navbar and central title visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a12]/90 via-[#0c1a12]/60 to-[#0c1a12]/95"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-extrabold text-[12px] uppercase tracking-widest mb-6 backdrop-blur-md"
          >
            <FileText size={16} className="text-orange-400" />
            Kontenjanımız Sınırlıdır
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`${outfit.className} text-[2.75rem] sm:text-5xl md:text-[5rem] font-extrabold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-2xl`}
          >
            Kurban Kesim <span className="text-orange-500">Randevusu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.15rem] leading-relaxed max-w-2xl mx-auto font-medium`}>
            2026 sezonu hissenizi ayırtarak erken kayıt fiyatlarından yararlanın. Aşağıdaki formu doldurduğunuz an WhatsApp destek ekibimiz sizinle iletişime geçecektir.
          </motion.p>
        </div>
      </section>

      {/* ── 2. SPLIT FORM & INFO (With Overlap "Çıkıntı" Effect) ── */}
      <section className="relative z-20 -mt-20 sm:-mt-28 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100/50 p-6 sm:p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* SOL: RANDEVU FORMU - 7 COLS */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h2 className={`${outfit.className} text-3xl font-extrabold text-gray-900`}>Randevu Formu</h2>
                <p className="text-gray-500 text-sm mt-2 font-medium">Lütfen bilgileri eksiksiz doldurunuz.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Grid 2 Cols for smaller inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Adınız Soyadınız *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all font-medium"
                      placeholder="Ahmet Yılmaz"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Telefon Numaranız *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all font-medium"
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* 1 Col Selects */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">İlçe Seçiniz *</label>
                  <select name="district" required className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all font-medium appearance-none" value={formData.district} onChange={handleChange}>
                    <option value="" disabled>İlçe seçin...</option>
                    <option value="Bağcılar">Bağcılar</option>
                    <option value="Bahçelievler">Bahçelievler</option>
                    <option value="Başakşehir">Başakşehir</option>
                    <option value="Esenler">Esenler</option>
                    <option value="Güngören">Güngören</option>
                    <option value="Zeytinburnu">Zeytinburnu</option>
                    <option value="Küçükçekmece">Küçükçekmece</option>
                    <option value="Diğer (Avrupa)">Diğer (Avrupa Yakası)</option>
                    <option value="Diğer (Anadolu)">Diğer (Anadolu Yakası)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Hisse Türü *</label>
                  <select name="hisseType" required className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all font-medium appearance-none" value={formData.hisseType} onChange={handleChange}>
                    <option value="" disabled>Seçiniz...</option>
                    <optgroup label="Hisseli Kurban (Büyükbaş)">
                      <option value="Büyükbaş 1. Grup">Büyükbaş 1. Grup</option>
                      <option value="Büyükbaş 2. Grup">Büyükbaş 2. Grup</option>
                      <option value="Büyükbaş 3. Grup">Büyükbaş 3. Grup</option>
                      <option value="Büyükbaş 4. Grup">Büyükbaş 4. Grup</option>
                    </optgroup>
                    <optgroup label="Küçükbaş Kurban">
                      <option value="Küçükbaş 1. Grup">Küçükbaş 1. Grup</option>
                      <option value="Küçükbaş 2. Grup">Küçükbaş 2. Grup</option>
                      <option value="Küçükbaş 3. Grup">Küçükbaş 3. Grup</option>
                      <option value="Küçükbaş 4. Grup">Küçükbaş 4. Grup</option>
                    </optgroup>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Teslimat / Kesim Günü</label>
                  <select name="deliveryDay" required className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all font-medium appearance-none" value={formData.deliveryDay} onChange={handleChange}>
                    <option value="" disabled>Gününüzü seçin...</option>
                    <option value="1. Gün">1. Gün Geleneksel (Sıcak Et) Kesimi</option>
                    <option value="2. Gün">2. Gün Kesimi ve Teslimatı</option>
                    <option value="3. Gün">3. Gün Kesimi ve Teslimatı</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Özel Notunuz (Varsa)</label>
                  <textarea
                    name="note"
                    className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all min-h-[120px] font-medium resize-y"
                    placeholder="Özel talepleriniz veya teslimat notunuz..."
                    value={formData.note}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-2xl mt-2">
                  <ShieldCheck size={20} className="text-green-600 shrink-0" />
                  <span className="text-sm font-bold text-green-700">SSL Korumalı Güvenli Form</span>
                </div>

                <button type="submit" className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white rounded-[1.25rem] px-8 py-5 text-[18px] font-bold tracking-wide transition-all active:scale-[0.98] shadow-xl flex justify-center items-center gap-3 shadow-orange-500/30">
                  <CheckCircle2 size={24} /> Randevu Talebini Gönder
                </button>

              </form>
            </div>

            {/* SAĞ: BİLGİ & AVANTAJLAR - 5 COLS */}
            <div className="lg:col-span-5 bg-[#0c1a12] rounded-[2rem] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

              <h2 className={`${outfit.className} text-3xl font-bold text-white mb-10`}>Neden Ön Kayıt?</h2>

              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    <BadgeCheck size={24} />
                  </div>
                  <div>
                    <h4 className={`${outfit.className} text-xl font-bold text-white mb-2`}>Erken Kayıt Fırsatı</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Ön kayıt yaptırarak 2026 sezonu olası fiyat değişimlerinden etkilenmeden kurbanınızı ayırırsınız.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className={`${outfit.className} text-xl font-bold text-white mb-2`}>Garantili Kontenjan</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Hisse kapasitemiz kısıtlıdır. Yerinizi erkenden garantiye alarak bayram telaşından kurtulun.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    <CalendarCheck size={24} />
                  </div>
                  <div>
                    <h4 className={`${outfit.className} text-xl font-bold text-white mb-2`}>Planlı Teslimat</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Saatlerinizi ve gününüzü şimdiden planlayarak et dağıtımı sürecinde yorulmadan bayram yapın.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className={`${outfit.className} text-xl font-bold text-white mb-2`}>Tesisimize Bekliyoruz</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Bağcılar'daki tesisimizde çayımızı içebilir ve doğrudan yüz yüze kaydınızı oluşturabilirsiniz.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}
