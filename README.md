# ABC Hastahanesi — Web Sitesi

Üsküdar / Zeynep Kamil'de kurgulanan ABC Hastahanesi için hazırlanmış statik
tanıtım sitesi. Saç, Diş ve Estetik branşlarını; her biri için tedavi listesi
ve hekim bilgileriyle birlikte gösterir.

## Klasör yapısı

```
abc-hastahanesi/
├── index.html      Sayfa içeriği (tüm branşlar HTML'de görünür haldedir)
├── css/
│   └── styles.css  Tüm görsel stiller
├── js/
│   └── script.js   Sekme geçişi ve mobil menü (progressive enhancement)
└── README.md
```

## Neden tüm branşlar HTML'de görünür?

Sayfa varsayılan olarak Saç, Diş ve Estetik içeriğinin **tamamını** aynı anda
render eder. JavaScript çalıştığında `body`'e `js-tabs` sınıfı eklenir ve
sekmeli görünüme geçilir. Böylece:

- JS çalıştırmayan bir tarayıcı, arama motoru botu veya içeriği ham HTML
  üzerinden okuyan bir yapay zeka, hiçbir branşı kaçırmadan tüm tedavi ve
  hekim bilgilerine erişebilir.
- Gerçek kullanıcılar için görünüm yine sekmeli ve derli topludur.

## Yerelde önizleme

Herhangi bir kurulum gerekmez, `index.html` dosyasını tarayıcıda açmak
yeterlidir. İsterseniz basit bir sunucu ile de çalıştırabilirsiniz:

```bash
python3 -m http.server 8000
```

sonra `http://localhost:8000` adresini açın.

## GitHub Pages ile yayınlama

1. Bu klasörün içeriğini yeni bir GitHub reposunun köküne yükleyin
   (`index.html`, `css/`, `js/` aynı seviyede olmalı).
2. Repo ayarlarında **Settings → Pages** bölümüne gidin.
3. **Branch** olarak `main` (veya kullandığınız dal) ve klasör olarak
   `/ (root)` seçin, kaydedin.
4. Birkaç dakika içinde `https://<kullanici-adi>.github.io/<repo-adi>/`
   adresinden siteye erişebilirsiniz.

## Düzenlenebilecek yerler

- **Adres / saatler**: `index.html` içinde üst bar, "trust strip" ve
  iletişim bölümünde tekrar eder — hepsini güncel tutmayı unutmayın.
- **Branş içerikleri**: `index.html` içinde `#sac`, `#dis`, `#estetik`
  bölümleri; tedavi kartları `.treat-item`, hekim kartları `.doctor-card`
  olarak işaretlenmiştir.
- **Harita**: iletişim bölümündeki `<iframe>` adres sorgusuna göre otomatik
  konumlanır; gerçek adres/koordinatlarla değiştirilebilir.
