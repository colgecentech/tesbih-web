# Sade Zikir

**Huzur, parmaklarınızın ucunda.**

Sade Zikir; günlük zikir, Kur'an okuma, dua ve namaz rehberini tek yerde
toplayan, **reklamsız**, **hesapsız** ve **internetsiz** çalışan bir mobil
uygulamadır. Zikir sayınız, okuma konumunuz ve tercihleriniz yalnızca kendi
cihazınızda kalır; hiçbir kişisel veri toplanmaz, satılmaz veya üçüncü
kişilerle paylaşılmaz.

Bu depo, uygulamanın **tanıtım sitesini ve yasal belgelerini** barındırır.
Uygulamanın kaynak kodu bu depoda değildir.

> Site: <https://colgecentech.github.io/tesbih-web/>

---

## Bu depoda ne var?

| Sayfa | İçerik |
| --- | --- |
| [`index.html`](https://colgecentech.github.io/tesbih-web/) | Tanıtım: özellikler, ekran görüntüleri, indirme |
| [`gizlilik.html`](https://colgecentech.github.io/tesbih-web/gizlilik.html) | Gizlilik Politikası (Türkçe + English) |
| [`kvkk.html`](https://colgecentech.github.io/tesbih-web/kvkk.html) | KVKK Aydınlatma Metni |
| [`kosullar.html`](https://colgecentech.github.io/tesbih-web/kosullar.html) | Kullanım Koşulları |
| `assets/` | Tasarım sistemi, yerel yazı tipleri, ekran görüntüleri |

Site saf HTML/CSS/JS ile yazılmıştır: derleme adımı, harici CDN, çerez ve
izleme kodu yoktur. Tüm yazı tipleri ve görseller deponun içindedir; site
çevrimdışı da açılır.

## Uygulamada neler var?

### Zikir sayacı
- 33'lük klasik tesbih döngüsü: **Sübhanallah → Elhamdülillah → Allahu Ekber**
- Gerçek boncuk fiziği: çekince sallanan, yayla yerine oturan cam boncuklar
- Çekme, dokunma ve çoklu çekme modları; sağ/sol el ergonomisi
- Oniks, kaplan gözü, yeşim gibi taş temaları
- Tur tamamlanınca sakin bir tebrik bildirimi

### Hayır duası daveti
- Zikir türü başına ömür boyu eşikler (1.000 → 1.000.000) ve uygulamada ön
  planda geçirilen süre eşikleri (100 → 10.000 saat)
- Eşiğe ulaşınca, seçili dilde bir hayır duası isteyen sade bir kart açılır
- Yalnızca **"Okudum"** ile kapanır; veri toplanmaz, gönderilmez

### Kur'an ve dualar
- Kur'an-ı Kerim, sayfa çevirme hareketiyle okunur
- 43 dilde meal; Arapça metin ile meal yan yana
- Kur'an'dan ve günlük hayattan dualar, Türkçe anlamlarıyla
- Esmâü'l-Hüsnâ listesi

### Namaz rehberi
- Adım adım görsel anlatım: abdest, niyet, kıyam, rükû, secde, oturuş, selâm
- **Hanefî**, **Şâfiî** ve **Alevî-Bektâşî** mezhep/yol seçenekleri
- Kadın-erkek uygulama farkları ayrı bölümde
- Kaza, seferîlik, tilavet secdesi gibi özel durumlar

### Önemli tarihler
- Kandil, bayram ve mübarek günler otomatik listelenir
- Her özel günden 3 gün önce yerel bildirim (ayarlardan kapatılabilir)
- Bildirimler cihazda planlanır; sunucuya hiçbir şey gönderilmez

### Dil
- **43 arayüz dili**:
  Türkçe, Deutsch, Shqip, Azərbaycan Türkçəsi, বাংলা, Tamazight, Bosanski,
  Basa Jawa, 中文 (Mandarin), Bahasa Indonesia, فارسی, Français, Pulaar,
  Hausa, Nederlands, English, Español, Italiano, Қазақша, Кыргызча,
  Kurdî (Kurmanccî / Soranî), മലയാളം, Bahasa Melayu, Norsk, Oʻzbekcha,
  ਪੰਜਾਬੀ, پښتو, Русский, سنڌي, Soomaali, Basa Sunda, Kiswahili, Svenska,
  Tagalog, Тоҷикӣ, தமிழ், తెలుగు, Türkmençe, ئۇيغۇرچە, اردو, Wolof,
  Akan / Twi, Dansk

## Gizlilik özeti

- Hesap, giriş, e-posta veya telefon numarası **istenmez**
- Zikir sayısı, dil ve tema tercihleri yalnızca cihazda saklanır
- Reklam ağı, analitik ve izleme pikseli **yoktur**
- Uygulama internet olmadan tümüyle çalışır
- Tek istisna: yeni sürüm olup olmadığını denetlemek için Expo güncelleme
  sunucusuna yapılan istek; bu istek kişisel veri içermez. Mağaza
  güncellemeleri (Google Play / App Store) işletim sistemi tarafından yürütülür

Ayrıntı: [Gizlilik Politikası](https://colgecentech.github.io/tesbih-web/gizlilik.html)

## İndirme

Uygulama Google Play'de yayına hazırlanıyor. Yayınlandığında bağlantı burada
ve sitede yer alacak.

- Paket adı: `com.colgecen.tesbihsayaci`
- Geliştirici: ÇÖLGEÇEN TEKNOLOJİ

## İletişim

- E-posta: <colgecentech@gmail.com>
- Hata bildirimi ve öneri: aynı adres

---

## Lisans

**Lisans türü: Proprietary — All Rights Reserved / Tüm Hakları Saklıdır.**

Bu, **açık kaynak olmayan, tescilli (proprietary) bir lisans**tır. OSI onaylı
hiçbir lisans (MIT, Apache-2.0, BSD, GPL, LGPL, AGPL, MPL, Unlicense, CC0)
uygulanmaz. GitHub bunu "Other" olarak etiketler; bu doğrudur, standart bir
açık lisans yoktur.

Açık kaynak copyleft lisansları (AGPL-3.0 dahil) kullanma, inceleme,
değiştirme ve dağıtma hakkı **verir**. Bu lisans bunların hiçbirini vermez;
bu yüzden mevcut en katı seçenektir. Depoyu herkese açık görmek kullanım
izni anlamına gelmez.

İzin alınmadan kopyalama, çoğaltma, dağıtma, değiştirme, türev eser üretme,
ticari kullanım, otomatik toplama (scraping) ve yapay zekâ eğitiminde
kullanma yasaktır. İzin yalnızca yazılı olarak verilir. Tam metin (İngilizce):
[`LICENSE`](LICENSE).

Üçüncü taraf unsurlar kendi lisanslarına tabidir: **Newsreader** ve
**Plus Jakarta Sans** yazı tipleri SIL Open Font License 1.1 ile
lisanslanmıştır.
