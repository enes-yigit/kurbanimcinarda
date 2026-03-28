"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { BadgeCheck, CalendarCheck, Clock, ShieldCheck, MapPin } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
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
    <main className={styles.pageContainer}>
      <div className="container">
        
        <header className={styles.header}>
          <h1 className={styles.title}>
            Kurban Kesim <span className={styles.titleAccent}>Randevusu Al</span> — 2026
          </h1>
          <p className={styles.description}>
            Kapasitemiz sınırlıdır. Hissenizi ve kesim saatinizi şimdiden ayırtın. Aşağıdaki formu
            doldurarak talebinizi WhatsApp hattımıza anında iletebilirsiniz.
          </p>
        </header>

        <section className={styles.formWrapper}>
          
          {/* Left Side: Form */}
          <div className={styles.formArea}>
            <h2 className={styles.formTitle}>Randevu Formu</h2>
            <form onSubmit={handleSubmit}>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Adınız Soyadınız *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className={styles.input} 
                  placeholder="Ahmet Yılmaz" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Telefon Numaranız *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className={styles.input} 
                  placeholder="05XX XXX XX XX" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>İlçe Seçiniz *</label>
                <select name="district" required className={styles.select} value={formData.district} onChange={handleChange}>
                  <option value="" disabled>İlçe arayın veya seçin...</option>
                  <option value="Bağcılar">Bağcılar</option>
                  <option value="Bahçelievler">Bahçelievler</option>
                  <option value="Başakşehir">Başakşehir</option>
                  <option value="Esenler">Esenler</option>
                  <option value="Güngören">Güngören</option>
                  <option value="Zeytinburnu">Zeytinburnu</option>
                  <option value="Küçükçekmece">Küçükçekmece</option>
                  <option value="Diğer (Avrupa)">Diğer (Avrupa)</option>
                  <option value="Diğer (Anadolu)">Diğer (Anadolu)</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Hisse Türü *</label>
                <select name="hisseType" required className={styles.select} value={formData.hisseType} onChange={handleChange}>
                  <option value="" disabled>Seçiniz...</option>
                  <option value="Dana (1/7 Hisse) - Ekonomik">Dana (1/7 Hisse) - Ekonomik Grup (25-30kg)</option>
                  <option value="Dana (1/7 Hisse) - Orta">Dana (1/7 Hisse) - Orta Grup (30-35kg)</option>
                  <option value="Tosun (1/7 Hisse) - Büyük">Tosun (1/7 Hisse) - Çekirdek Aile (35-40kg)</option>
                  <option value="Tosun (1/7 Hisse) - Dev">Tosun (1/7 Hisse) - Geniş Aile (40+ kg)</option>
                  <option value="Özel Seçim Tosun">Özel Seçim Tosun</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Tercih Edilen Teslimat / Kesim Günü</label>
                <select name="deliveryDay" required className={styles.select} value={formData.deliveryDay} onChange={handleChange}>
                  <option value="" disabled>Gününüzü seçin...</option>
                  <option value="1. Gün Kesimi">1. Gün Geleneksel (Sıcak Et) Kesimi</option>
                  <option value="2. Gün Kesimi">2. Gün Kesimi ve Teslimatı</option>
                  <option value="3. Gün Kesimi">3. Gün Kesimi ve Teslimatı</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Özel Notunuz (Varsa)</label>
                <textarea 
                  name="note" 
                  className={styles.textarea} 
                  placeholder="Özel talepleriniz veya teslimat notunuz..."
                  value={formData.note}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              {/* Dummy Captcha Placeholder */}
              <div className={styles.captchaBox}>
                <ShieldCheck size={20} color="#10b981" /> Güvenli Form Doğrulaması Başarılı
              </div>

              <button type="submit" className={styles.submitBtn}>
                Randevu Talebini Gönder
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>

            </form>
          </div>
          
          {/* Right Side: Info / Benefits */}
          <div className={styles.infoArea}>
            <h2 className={styles.infoTitle}>Neden Ön Kayıt?</h2>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><BadgeCheck size={18} /></div>
                <div className={styles.infoItemContent}>
                  <h4>Erken Fiyat Avantajı</h4>
                  <p>Ön kayıt yaptırarak 2026 sezonu beklenen fiyat değişimlerinden etkilenmeden avantajlı fiyattan kurbanınızı ayırırsınız.</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Clock size={18} /></div>
                <div className={styles.infoItemContent}>
                  <h4>Garantili Kontenjan</h4>
                  <p>Toplam hisse kapasitemiz kalite standartlarımız gereği sınırlıdır. Yerinizi erkenden garantiye alırsınız.</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><CalendarCheck size={18} /></div>
                <div className={styles.infoItemContent}>
                  <h4>Seçimli Teslimat</h4>
                  <p>Randevu saatinizi önceden planlayarak hem kesim aşamasında hem et teslimatında sorunsuz bir deneyim yaşarsınız.</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={18} /></div>
                <div className={styles.infoItemContent}>
                  <h4>Yüz Yüze Görüşme</h4>
                  <p>Dilerseniz Çınar Mah., 843. Sok., No: 4A, Bağcılar / İstanbul adresindeki tesisimizde çayımızı içebilir ve güvenle kaydınızı oluşturabilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
          
        </section>

      </div>
    </main>
  );
}
