export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "kurban-eti-saklama-rehberi-2026",
    title: "Kurban Eti Nasıl Saklanır? Profesyonel Saklama ve Dinlendirme Rehberi",
    excerpt: "Kurban etinin lezzetini kaybetmemesi ve bozulmaması için kesim sonrası ilk 24 saat kritik öneme sahiptir. İşte profesyonel kasapların sırları...",
    category: "Bilgi Rehberi",
    author: "Çınar Yurdu",
    date: "27 Mart 2026",
    readTime: "8 Dakika",
    tags: ["Et Saklama", "Kurban 2026", "Beslenme"],
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Kurban bayramının en önemli aşamalarından biri, ibadet sonrası elde edilen etlerin doğru şekilde muhafaza edilmesidir. Yanlış saklama koşulları hem lezzet kaybına hem de hızlı bozulmalara yol açabilir.</p>
      
      <h2>1. Ölüm Sertliğine Dikkat (Rigor Mortis)</h2>
      <p>Hayvan kesildikten hemen sonra etler 'rigor mortis' denilen bir sertlik evresine girer. Bu aşamada etlerin hemen parçalanıp buzluğa atılması, etin sertleşmesine ve lezzetini kaybetmesine neden olur. Etin en az 5-6 saat, ideal olarak 24 saat boyunca oda sıcaklığında değil, 4-6 derece arasındaki serin bir ortamda (güneş görmeyen, hava akımı olan) dinlendirilmesi gerekir.</p>
      
      <blockquote>"Sıcak et asla buzluğa veya poşete girmemeli; aksi halde etin merkezi soğuyamaz ve 'yeşerme' dediğimiz bozulma başlar."</blockquote>

      <h2>2. Et Pişirmede Altın Kurallar</h2>
      <p>Kurban eti kesildiği gün yenmemelidir. Eğer mutlaka tüketilecekse, etin içindeki sinir and dokuların yumuşaması için düdüklü tencere veya uzun süreli kısık ateşli pişirme yöntemleri tercih edilmelidir. Dinlenmiş et ise hem daha çabuk pişer hem de vücut tarafından daha kolay sindirilir.</p>
      
      <h2>3. Paketleme ve Dondurma Teknikleri</h2>
      <ul>
        <li><strong>Porsiyonlama:</strong> Etleri bir kez çözüldüğünde bitirilecek şekilde (yaklaşık 500gr - 1kg) porsiyonlara ayırın. Çözülen eti tekrar dondurmak sağlığa zararlıdır.</li>
        <li><strong>Hava ile Temas:</strong> Etleri saklama poşetlerine koyarken havasını olabildiğince alın. Mümkünse vakumlu paketleme cihazları kullanın; bu yöntem etin tazeliğini 3 kat daha uzun korur.</li>
        <li><strong>Kıyma vs Kuşbaşı:</strong> Kıyma haline getirilen etlerin yüzey alanı arttığı için bakteri üremesi çok daha hızlıdır. Bu yüzden kıymaları kuşbaşı etlere göre daha öncelikli tüketin.</li>
      </ul>
      
      <p>Profesyonel tesisimizde biz etlerinizi kesim sonrası frigofrik araçlara yüklemeden önce karkas formunda tam bir gece boyunca endüstriyel soğutucularımızda dinlendiriyoruz. Bu sayede kapınıza gelen etler işlem görmeye hazır ve güvenilir kondisyonda oluyor.</p>
    `
  },
  {
    id: "4",
    slug: "tosun-kurbanlikta-yuksek-et-verimi",
    title: "Neden Tosun? Kurbanlıkta Maksimum Et Verimi ve Kalite Standartları",
    excerpt: "Kurban ibadetinde neden erkek büyükbaş (tosun) tercih edilmelidir? Et verimi, kemik yapısı ve karkas randımanı hakkında merak edilenler.",
    category: "Seçim Rehberi",
    author: "Çınar Yurdu",
    date: "26 Mart 2026",
    readTime: "7 Dakika",
    tags: ["Hayvan Seçimi", "Et Verimi", "Tosun"],
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Kurban bayramı yaklaşırken hissedarlar için en kârlı ve dini hassasiyetlere uygun seçim <strong>Erkek Tosun</strong> tercihidir. Çınar Kurban olarak sadece rüştünü ispatlamış erkek tosunları bünyemizde barındırmamızın haklı sebepleri var.</p>

      <h2>1. Maksimum Kırmızı Et Verimi</h2>
      <p>Erkek büyükbaş hayvanlar (tosun), dişilere göre çok daha gelişmiş bir kas yapısına sahiptir. Karkas et verimi açısından tosun her zaman rakipsizdir. Kemik yapısı güçlü olsa da, net 'kırmızı et' miktarı hissedar başına düşen payda çok daha tatmin edici sonuçlar verir.</p>

      <h2>2. Düşük Yağ Oranı ve Sağlıklı Protein</h2>
      <p>Tosun etleri, mermerleşme (yağ dağılımı) açısından daha dengelidir ve dişilere oranla daha az iç yağ bulundurur. Bu da daha sağlıklı ve kolesterol açısından daha dengeli bir kurban payı almanızı sağlar. Özellikle protein değerinin yüksekliği, tosun etini sporcular ve sağlıklı beslenenler için bir numara yapar.</p>

      <h2>3. Verim Karşılaştırması (Karkas Randımanı)</h2>
      <p>Ortalama bir canlı kiloya sahip kaliteli bir tosun %58-62 arası karkas randımanı verir. Bu yüksek randıman, verdiğiniz ücretin karşılığını tam olarak 'et' şeklinde almanız demektir. Biz tesisimizde, sadece belirli bir kilonun üzerindeki 'kapak atmış' elit tosunları kesime alarak bu verimi garanti altına alıyoruz.</p>

      <p>Kurban Bayramı'nda hüsrana uğramamak ve net et miktarında sürpriz yaşamamak için <strong>Erkek Büyükbaş (Tosun)</strong> her zaman en güvenli limandır.</p>
    `
  },
  {
    id: "2",
    slug: "kurbanlik-tosun-secerken-dikkat-edilmesi-gerekenler",
    title: "Kurbanlık Tosun Seçerken Nelere Dikkat Edilmelidir? (Kapak Atma Rehberi)",
    excerpt: "Dinen kurban vasfı taşıyan bir tosun nasıl anlaşılır? Kapak atma, kilo tayini ve sağlık göstergeleri hakkında detaylı rehber.",
    category: "Seçim Rehberi",
    author: "Çınar Yurdu",
    date: "25 Mart 2026",
    readTime: "6 Dakika",
    tags: ["Kurban Seçimi", "Tosun Rehberi", "Vekalet"],
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p>Kurbanlık seçimi sadece bir alışveriş değil, bir ibadetin başlangıcıdır. Bu nedenle seçilen tosunun hem İslami usullere hem de sağlık şartlarına uygun olması gerekir.</p>

      <h2>Kapak Atma (Dini Yaş Tayini)</h2>
      <p>Büyükbaş tosunlarda kurbanlık olabilme şartı 2 kameri yılı (24 ay) doldurmuş olmasıdır. Bunun en sağlam kanıtı 'kapak atma' denilen ön süt dişlerinin düşüp yerine kalıcı büyük dişlerin çıkmasıdır. Alt çenede iki büyük ön dişin görülmesi, tosunun rüştünü ispat ettiğinin ve kurbana uygun olduğunun kanıtıdır.</p>

      <h2>Sağlık Kontrolü (A'dan Z'ye)</h2>
      <ul>
        <li><strong>Bakışlar:</strong> Hayvan canlı ve diri bakmalı, tepkisel olmalıdır.</li>
        <li><strong>Burun:</strong> Burunu nemli olmalı ancak sürekli akan veya köpüren bir salya bulunmamalıdır.</li>
        <li><strong>Yürüme:</strong> Topallık, yara veya belirgin bir fiziksel sakatlık kurban ibadetine engel olabilir.</li>
      </ul>

      <p>Çınar Kurban olarak biz, Anadolu'nun yaylalarından özenle seçtiğimiz sadece erkek tosunları veteriner hekimimizce tek tek kontrol ediyor ve hissedarlarımıza tam şeffaflık sağlıyoruz.</p>
    `
  },
  {
    id: "3",
    slug: "hisseli-kurban-kesimi-avantajlari",
    title: "Neden Hisseli Kurban? İstanbul Şehir Hayatında Devrim Yaratan Kolaylık",
    excerpt: "İstanbul gibi metropollerde kurban ibadetini yerine getirmenin en kolay yolu hisseli kurban organizasyonlarıdır. Neden mi?",
    category: "Şehir & Yaşam",
    author: "Çınar Yurdu",
    date: "22 Mart 2026",
    readTime: "6 Dakika",
    tags: ["Hisse", "İstanbul", "Kolaylık"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>İstanbul'da kurban denince eski bayramlardaki o keşmekeş akla gelir: Boş arsalarda yapılan kontrolsüz kesimler, kaçan boğalar ve temizlik sorunları. Artık tüm bunlar mazide kaldı.</p>

      <h2>1. Profesyonel Organizasyon ve Güven</h2>
      <p>Hisseli kurbanın en büyük avantajı, tüm sürecin tek elden yönetilmesidir. 7 hissedar bir araya gelir (veya biz sizi birleştiririz), büyükbaş tosun vekaleten kesilir ve her şey dijital terazilerde milimetrik bölünür. Sizin ne tartmayla ne de pay etmeyle uğraşmanıza gerek kalmaz.</p>

      <h2>2. Hijyenik Tesis ve Soğuk Hava Deposu</h2>
      <p>Etlerin bozulmaması için kesim sonrası 'soğuk zincir' bozulmamalıdır. Tesisimizdeki endüstriyel soğutma sistemleri, etlerinizi size teslim edene kadar en ideal sıcaklıkta tutar. Bu, evde balkonlarda veya bahçelerde yapılan kesimlerde sağlanması imkansız bir hijyen standardıdır.</p>

      <h2>3. Zaman Tasarrufu</h2>
      <p>Bayram bayramdır; sevdiklerinizle vakit geçirme zamanıdır. Kesimhanelerde saatlerce sıra beklemek yerine, randevu saatinizde gelip sadece çayınızı içerek veya vekaletinizi dijital yolla verip kurbanınızın işlenmiş halde kapınıza gelmesini bekleyerek bayramı bayram tadında yaşarsınız.</p>
    `
  }
];
