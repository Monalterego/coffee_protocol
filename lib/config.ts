/**
 * ─────────────────────────────────────────────────────────────
 *  COFFEE PROTOCOL — Tek dosyadan her şeyi düzenle.
 *  Kod bilmene gerek yok: sadece tırnak içindeki metinleri değiştir.
 * ─────────────────────────────────────────────────────────────
 */

export const config = {
  /** İmzada görünecek isim */
  name: "Hasan",

  /**
   * "Kahve içelim" derse görünecek buton linki.
   * Instagram profilin — kullanıcı adını değiştir.
   * (Link zaten DM'inden gideceği için asıl yönlendirme "DM'e dön" olacak,
   *  bu buton sadece kolaylık.)
   */
  contactUrl: "https://instagram.com/monalteregoo",
  contactLabel: "Instagram'dan yaz",

  boot: {
    title: "Coffee Protocol",
    lines: [
      "Başlatılıyor...",
      "Cesaret yükleniyor...",
      "Özgüven kalibre ediliyor...",
      "Hazır.",
    ],
  },

  analysis: {
    title: "Durum Analizi",
    subtitle: "coffee-protocol v1.0",
    items: [
      { label: "Aynı şirket", value: "✓", tone: "ok" },
      { label: "Birkaç kez selamlaştık", value: "✓", tone: "ok" },
      { label: "Doğal tanışma fırsatı", value: "Düşük", tone: "warn" },
      { label: "İş yeri sınırlarına saygı", value: "Maksimum", tone: "ok" },
    ] as { label: string; value: string; tone: "ok" | "warn" }[],
    courageLabel: "Cesaret seviyesi",
    courageSteps: ["%12", "%31", "%58", "%81", "%98,4"],
    disclaimer: "* Bu analiz tamamen taraflıdır :).",
    recommendationLabel: "Öneri",
    recommendation: "Kahve daveti",
    continueLabel: "Devam et",
  },

  letter: {
    lines: [
      "Merhaba İrem. 🙂",
      "Birkaç kez selamlaştık ama tanışma fırsatımız olmadı.",
      "Şirket içinde seni beklenmedik bir anda rahatsız etmek istemedim. Bu yüzden biraz farklı bir yol seçtim.",
      "Eğer senin için de uygunsa, müsait olduğun bir zamanda birlikte bir kahve içmek isterim.",
      "Eğer istemezsen de bunu tamamen anlayışla karşılarım.",
      "Umarım bu küçük proje, gününe küçük de olsa bir tebessüm katmıştır.",
    ],
    ps: "P.S. Bu sayfayı hazırlamak, sana bu daveti iletmekten daha kolaydı. 🙂",
    yesLabel: "☕ Kahve içelim",
    noLabel: "Teşekkür ederim",
    privacyNote: "Bu sayfa hiçbir şey kaydetmiyor. Cevabın sadece sende kalır.",
  },

  endingYes: {
    title: "Görev tamamlandı.",
    lines: [
      "Çok sevindim. 🙂",
      "DM'e kısa bir “kahve ☕” yazman yeterli — gerisini ben hallederim.",
    ],
    closing: "Görüşmek üzere.",
  },

  endingNo: {
    lines: [
      "Teşekkür ederim.",
      "Cevabına tamamen saygı duyuyorum.",
      "Umarım günün harika geçer. 🌿",
    ],
  },
} as const;
