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
    title: "Kurban Eti Nasıl Saklanır? 2026 Saklama ve Dinlendirme Rehberi",
    excerpt: "Kurban etinin lezzetini kaybetmemesi ve bozulmaması için kesim sonrası ilk 24 saat kritik öneme sahiptir. İşte profesyonel kasapların sırları...",
    category: "Bilgi Rehberi",
    author: "Çınar Kurban",
    date: "27 Mart 2026",
    readTime: "6 Dakika",
    tags: ["Et Saklama", "Kurban 2026", "Beslenme"],
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Kurban bayramının en önemli aşamalarından biri, ibadet sonrası elde edilen etlerin doğru şekilde muhafaza edilmesidir. Yanlış saklama koşulları hem lezzet kaybına hem de hızlı bozulmalara yol açabilir.</p>
      
      <h3>1. Ölüm Sertliğine Dikkat (Rigor Mortis)</h3>
      <p>Hayvan kesildikten hemen sonra etler 'rigor mortis' denilen bir sertlik evresine girer. Bu aşamada etlerin hemen parçalanıp buzluğa atılması, etin sertleşmesine ve lezzetini kaybetmesine neden olur. Etin en az 5-6 saat, ideal olarak 24 saat serin bir ortamda (güneş görmeyen, hava akımı olan) dinlendirilmesi gerekir.</p>
      
      <h3>2. Asla Sıcak Eti Poşete Koymayın!</h3>
      <p>Etlerin bozulmasının en yaygın sebebi, sıcaklığın içeride hapsolmasıdır. Kurban etlerini geniş tepsilere yayarak soğumasını beklemelisiniz. Sıcakken üst üste yığılan veya doğrudan naylon poşete konulan etlerde 'yeşerme' dediğimiz mikrobiyal bozulma çok hızlı başlar.</p>
      
      <h3>3. Buzdolabı ve Dondurucu Koşulları</h3>
      <ul>
        <li>Buzdolabının normal kısmında etler en fazla 3-4 gün dayanır.</li>
        <li>Kıyma şeklinde çekilen etler daha hızlı bozulur, 1-2 gün içinde tüketilmelidir.</li>
        <li>Dondurucuda ise -18 derecede 6-12 ay güvenle saklanabilir.</li>
      </ul>
    `
  },
  {
    id: "2",
    slug: "kurbanlik-hayvan-secerken-dikkat-edilmesi-gerekenler",
    title: "Kurbanlık Hayvan Seçerken Nelere Dikkat Edilmelidir?",
    excerpt: "Dinen kurban vasfı taşıyan bir hayvan nasıl anlaşılır? Kapak atma, kilo tayini ve sağlık göstergeleri hakkında detaylı rehber.",
    category: "Seçim Rehberi",
    author: "Uzman Veteriner",
    date: "25 Mart 2026",
    readTime: "5 Dakika",
    tags: ["Kurban Seçimi", "Hisse", "Vekalet"],
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Kurbanlık hayvan seçimi sadece bir alışveriş değil, bir ibadetin başlangıcıdır. Bu nedenle seçilen hayvanın hem İslami usullere hem de sağlık şartlarına uygun olması gerekir.</p>

      <h3>Kapak Atma (Yaş Tayini)</h3>
      <p>Büyükbaş hayvanlarda kurbanlık olabilme şartı 2 yaşını (24 ay) doldurmuş olmasıdır. Bunun en net göstergesi 'kapak atma' denilen ön dişlerin değişmesidir. Çınar Kurban bünyesindeki tüm tosunlar, yaş tayini yapılmış ve bu şartı sağlayan kurban vasıflı canlılardır.</p>

      <h3>Genel Sağlık Göstergeleri</h3>
      <p>Sağlıklı bir kurbanlık hayvanın tüyleri parlak, bakışları canlı ve tepkileri yerinde olmalıdır. Burun akıntısı, aşırı halsizlik veya uzuv kaybı gibi durumlar hem sağlık açısından risklidir hem de kurbanın geçerliliğini etkileyebilir.</p>

      <h3>Hisse Ortaklığı ve Vekalet</h3>
      <p>7 kişiye kadar ortak olunabilen büyükbaş kurbanlarda, tüm ortakların niyetinin ibadet olması esastır. Vekalet süreci ise dijital dünyada artık telefon veya mesaj yoluyla 'Kurbanımı kesmeye ve kestirmeye seni vekil tayin ettim' sözüyle güvenle tamamlanabilmektedir.</p>
    `
  },
  {
    id: "3",
    slug: "hisseli-kurban-kesimi-avantajlari",
    title: "Hisseli Kurban Kesiminin Avantajları ve İstanbul Şehir Hayatı",
    excerpt: "İstanbul gibi metropollerde kurban ibadetini yerine getirmenin en kolay yolu hisseli kurban organizasyonlarıdır. Neden mi?",
    category: "Şehir & Yaşam",
    author: "Çınar Kurban",
    date: "22 Mart 2026",
    readTime: "4 Dakika",
    tags: ["Hisse", "İstanbul", "Kolaylık"],
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1954&auto=format&fit=crop",
    content: `
      <p>Geleneksel kesim yöntemlerinin şehir hayatında yarattığı zorluklar hepimizin malumu. Park yerleri, kesim sırası, parçalama zahmeti ve atık yönetimi...</p>

      <h3>Modern Tesislerin Konforu</h3>
      <p>Çınar Kurban gibi profesyonel tesisler, kurban ibadetini bir 'telaş' olmaktan çıkarıp huzurlu bir bekleyişe dönüştürür. Siz sadece vekaletinizi verirsiniz, geri kalan tüm süreç (veteriner kontrolü, İslami kesim, eşit pay etme ve paketleme) uzman ekip tarafından yönetilir.</p>

      <h3>Hijyen ve Soğuk Zincir</h3>
      <p>Şehir içinde yapılan kontrolsüz kesimler etin kalitesini düşürürken, profesyonel tesislerdeki raylı sistemler ve soğuk hava depoları etin en sağlıklı şekilde size ulaşmasını sağlar. Özellikle frigofrik araçlarla kapıya teslimat seçeneği, bayramın geri kalanını sevdiklerinizle geçirmenize olanak tanır.</p>
    `
  }
];
