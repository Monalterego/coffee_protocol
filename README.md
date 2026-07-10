# Coffee Protocol ☕

*A tiny interactive story.*

Etkileşimli bir dijital mektup. Boot → Analiz → Mektup → Seçim → Son.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` aç.

## Yayına almadan önce (önemli)

1. **`lib/config.ts` dosyasını aç** — bütün metinler ve linkler orada.
   - `contactUrl` içindeki `KULLANICI_ADIN` kısmını kendi Instagram kullanıcı adınla değiştir.
   - İstediğin cümleyi oradan düzenleyebilirsin, başka dosyaya dokunmana gerek yok.
2. Baştan sona **iki kez kendin oyna** — bir kez "Evet", bir kez "Hayır" ucunu gör.
3. Telefonda da test et (deneyimi büyük ihtimalle telefondan açacak).

## Vercel'e deploy

```bash
npx vercel
```

veya GitHub'a push'layıp Vercel'den import et.

**Proje adını tahmin edilemez yap:** Vercel proje ayarlarından domain'i
`coffee-protocol-x7k2.vercel.app` gibi rastgele ekli bir isim yap ki
linki sadece gönderdiğin kişi bulabilsin.

## Gizlilik

- Sayfa **hiçbir veri kaydetmez** — analytics yok, tracking yok, cookie yok.
- "Hayır" cevabı sana hiçbir şekilde iletilmez. Bu bilinçli bir tasarım kararı;
  lütfen sonradan analytics ekleme. 🙂
- `robots: noindex` ayarlı — arama motorlarında görünmez.

## Yapı

```
app/
  layout.tsx      → fontlar, metadata, noindex
  page.tsx        → ekran akışı (state machine)
  globals.css     → tema token'ları
components/
  motion.tsx      → ortak animasyon parçaları
  BootScreen.tsx
  AnalysisCard.tsx
  Invitation.tsx
  EndingYes.tsx
  EndingNo.tsx
lib/
  config.ts       → BÜTÜN metinler ve linkler (tek düzenleme noktası)
```
