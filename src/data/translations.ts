import { Language } from '../context/LanguageContext.tsx';

export interface TranslationDictionary {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    faq: string;
    contactCta: string;
    langToggleAria: string;
  };
  hero: {
    kicker: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tagline: string;
    browserCode: string;
    specsClean: string;
    specsSpa: string;
  };
  services: {
    kicker: string;
    title: string;
    description: string;
    note: string;
    requestConsultation: string;
    primaryBadge: string;
    keyInclusions: string;
  };
  whyUs: {
    kicker: string;
    title: string;
    description: string;
    principles: Array<{
      number: string;
      title: string;
      text: string;
    }>;
  };
  portfolio: {
    kicker: string;
    title: string;
    description: string;
    disclaimer: string;
    badgeLabel: string;
    viewDetails: string;
    craftDetails: string;
    discussSimilar: string;
    closeModal: string;
  };
  process: {
    kicker: string;
    title: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  about: {
    kicker: string;
    title: string;
    description: string;
    coreTaglineLabel: string;
    tagline: string;
    guidingValues: string;
    values: string[];
  };
  faq: {
    kicker: string;
    title: string;
    description: string;
    notAddressed: string;
    reachOut: string;
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    primaryButton: string;
    directChannels: string;
    quickBriefTitle: string;
    quickBriefSubtitle: string;
    serviceLabel: string;
    businessNameLabel: string;
    businessNamePlaceholder: string;
    openWhatsApp: string;
    openEmail: string;
    whatsappPrefill: (service: string, business: string) => string;
    emailSubject: (service: string, business: string) => string;
    emailBody: (service: string, business: string) => string;
  };
  footer: {
    tagline: string;
    description: string;
    specializationLabel: string;
    specializationValue: string;
    navHeading: string;
    servicesHeading: string;
    contactHeading: string;
    allRightsReserved: string;
    subtitle: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      portfolio: "Portofolio",
      about: "Tentang",
      faq: "FAQ",
      contactCta: "Hubungi Kami",
      langToggleAria: "Pilih bahasa",
    },
    hero: {
      kicker: "Pengembangan Digital Kreatif",
      title: "Bisnis Anda Layak Mendapatkan Website yang Lebih Baik.",
      description: "Kami merancang dan membangun website modern, responsif, dan profesional untuk memperkuat kehadiran digital bisnis Anda dan berkembang dengan percaya diri.",
      primaryCta: "Mulai Proyek Anda",
      secondaryCta: "Lihat Karya Kami",
      tagline: "Your Website, Our Craft.",
      browserCode: "<digital-craft / profil-perusahaan>",
      specsClean: "Kode TypeScript Bersih",
      specsSpa: "Responsif & Ringan",
    },
    services: {
      kicker: "Kemampuan Kami",
      title: "Solusi Website yang Kami Bangun",
      description: "Dari membangun eksistensi online hingga solusi digital khusus, kami membantu mewujudkan ide Anda menjadi website yang fungsional dan berdaya guna.",
      note: "Setiap layanan dikerjakan dengan standar kode bersih, aksesibilitas, dan performa optimal di semua perangkat.",
      requestConsultation: "Konsultasikan kebutuhan Anda →",
      primaryBadge: "Layanan Utama",
      keyInclusions: "Termasuk Dalam Layanan",
    },
    whyUs: {
      kicker: "Prinsip Kerja",
      title: "Mengapa Memilih Wecrafty?",
      description: "Kami berfokus pada kejelasan, kualitas pengerjaan, dan eksekusi nyata. Tanpa kode berlebih, tanpa template generik, dan tanpa kompromi.",
      principles: [
        {
          number: "01",
          title: "Dirancang Khusus untuk Brand Anda",
          text: "Setiap website dibangun sesuai dengan identitas, karakter, dan tujuan bisnis unik klien.",
        },
        {
          number: "02",
          title: "Teknologi Modern & Mutakhir",
          text: "Dikembangkan menggunakan framework terkini dan praktik rekayasa perangkat lunak standar industri.",
        },
        {
          number: "03",
          title: "Responsif di Setiap Layar",
          text: "Tampilan optimal dan nyaman diakses di smartphone, tablet, laptop, hingga monitor desktop lebar.",
        },
        {
          number: "04",
          title: "Fondasi yang Siap Berkembang",
          text: "Struktur fleksibel yang mudah dikembangkan seiring dengan pertumbuhan kebutuhan bisnis Anda.",
        },
      ],
    },
    portfolio: {
      kicker: "Portofolio",
      title: "Karya Terpilih",
      description: "Sekilas gambaran tentang apa yang dapat diciptakan oleh desain dan rekayasa web yang cermat.",
      disclaimer: "Setiap karya di bawah ini merupakan konsep asli yang dirancang dan dikodekan untuk mendemonstrasikan standar arsitektur, tipografi, dan responsivitas kami.",
      badgeLabel: "Konsep Sampel",
      viewDetails: "Lihat Detail",
      craftDetails: "Detail Desain & Implementasi",
      discussSimilar: "Diskusikan Proyek Serupa",
      closeModal: "Tutup modal proyek",
    },
    process: {
      kicker: "Alur Kerja",
      title: "Dari Ide Menjadi Pengalaman Digital",
      description: "Alur kerja 4 tahap yang transparan dan terstruktur untuk memberikan kepastian dan ketenangan di setiap fase pengerjaan.",
      steps: [
        {
          number: "01",
          title: "Discover (Eksplorasi)",
          description: "Memahami model bisnis, target audiens, tujuan, dan kebutuhan fungsional klien.",
        },
        {
          number: "02",
          title: "Design (Perancangan)",
          description: "Menyusun arah visual, tata letak, dan antarmuka pengguna yang sesuai dengan karakter brand.",
        },
        {
          number: "03",
          title: "Develop (Pengembangan)",
          description: "Mengubah rancangan desain yang telah disetujui menjadi website yang responsif dan fungsional.",
        },
        {
          number: "04",
          title: "Launch (Peluncuran)",
          description: "Mendeploy website ke hosting produksi, pengujian akhir, dan serah terima teknis.",
        },
      ],
    },
    about: {
      kicker: "Tentang Wecrafty",
      title: "Membangun Pengalaman Digital yang Bermakna",
      description: "Wecrafty adalah layanan pengembangan web yang berfokus membantu bisnis membangun kehadiran digital yang lebih kuat. Kami memadukan desain yang matang, teknologi modern, dan ketelitian detail untuk menciptakan website yang fungsional, mudah diakses, dan selaras dengan kebutuhan setiap klien.",
      coreTaglineLabel: "Tagline Resmi",
      tagline: "Your Website, Our Craft.",
      guidingValues: "Nilai-Nilai Utama",
      values: [
        "Kreativitas",
        "Teknologi",
        "Fungsionalitas",
        "Ketelitian dalam detail",
        "Pengembangan berorientasi klien",
      ],
    },
    faq: {
      kicker: "Pertanyaan Umum",
      title: "Pertanyaan yang Sering Diajukan",
      description: "Informasi transparan seputar ruang lingkup layanan, proses pengerjaan, estimasi waktu, dan pemeliharaan website.",
      notAddressed: "Punya pertanyaan lain yang belum terjawab di sini?",
      reachOut: "Hubungi tim kami langsung →",
    },
    contact: {
      kicker: "Kontak & Diskusi",
      title: "Siap Membangun Website Impian Anda?",
      description: "Punya ide untuk website bisnis Anda? Mari wujudkan menjadi pengalaman digital yang berkesan.",
      primaryButton: "Konsultasikan Proyek Anda",
      directChannels: "Kanal Komunikasi Langsung:",
      quickBriefTitle: "Ringkasan Singkat Proyek",
      quickBriefSubtitle: "Pilih layanan dan ketik nama bisnis Anda untuk membuka WhatsApp atau Email dengan pesan otomatis.",
      serviceLabel: "Layanan yang Dibutuhkan",
      businessNameLabel: "Nama Bisnis atau Proyek Anda",
      businessNamePlaceholder: "Contoh: Studio Arsitektur Senja",
      openWhatsApp: "Buka via WhatsApp",
      openEmail: "Buka via Email",
      whatsappPrefill: (service, business) => {
        const namePart = business ? ` "${business}"` : "";
        return `Halo Wecrafty, saya ingin berdiskusi mengenai pembuatan ${service} untuk bisnis saya${namePart}.`;
      },
      emailSubject: (service, business) => {
        return `Konsultasi Proyek: ${service} - ${business || 'Klien Baru'}`;
      },
      emailBody: (service, business) => {
        return `Halo tim Wecrafty,\n\nSaya ingin berkonsultasi mengenai pembuatan website:\n- Nama Bisnis: ${business || '[Nama Bisnis Anda]'}\n- Jenis Layanan: ${service}\n- Target Waktu: \n- Catatan Tambahan: \n\nTerima kasih!`;
      },
    },
    footer: {
      tagline: "Your Website, Our Craft.",
      description: "Membangun website modern dan pengalaman digital fungsional untuk bisnis yang ingin terus bertumbuh.",
      specializationLabel: "Spesialisasi Utama",
      specializationValue: "Pembuatan Website Profil Perusahaan (Company Profile)",
      navHeading: "Navigasi",
      servicesHeading: "Layanan",
      contactHeading: "Kontak Langsung",
      allRightsReserved: "Hak cipta dilindungi.",
      subtitle: "Pengembangan Website & Solusi Digital",
      backToTop: "Kembali ke atas ↑",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      faq: "FAQ",
      contactCta: "Let's Talk",
      langToggleAria: "Select language",
    },
    hero: {
      kicker: "Creative Digital Development",
      title: "Your Business Deserves a Better Website.",
      description: "We craft modern, responsive, and professional websites that help businesses build their digital presence and grow with confidence.",
      primaryCta: "Start Your Project",
      secondaryCta: "Explore Our Work",
      tagline: "Your Website, Our Craft.",
      browserCode: "<digital-craft / company-profile>",
      specsClean: "Clean TypeScript Code",
      specsSpa: "Responsive SPA",
    },
    services: {
      kicker: "Capabilities",
      title: "What We Can Build for You",
      description: "From establishing your online presence to developing custom digital solutions, we help turn your ideas into functional websites.",
      note: "Every service is delivered with attention to clean code, accessibility, and responsive presentation across devices.",
      requestConsultation: "Request a consultation →",
      primaryBadge: "Primary Specialization",
      keyInclusions: "Key Inclusions",
    },
    whyUs: {
      kicker: "Our Principles",
      title: "Why Work With Wecrafty?",
      description: "We focus on clarity, craftsmanship, and practical execution. No bloated code, no generic templates, and no shortcuts.",
      principles: [
        {
          number: "01",
          title: "Crafted for Your Brand",
          text: "Every website is designed to reflect the client's identity and business needs.",
        },
        {
          number: "02",
          title: "Modern Technology",
          text: "Built using modern frameworks and development practices.",
        },
        {
          number: "03",
          title: "Responsive by Design",
          text: "Optimized for desktop, tablet, and mobile devices.",
        },
        {
          number: "04",
          title: "Built to Grow",
          text: "A flexible foundation that can be expanded as business requirements evolve.",
        },
      ],
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Selected Works",
      description: "A glimpse of what thoughtful design and development can create.",
      disclaimer: "Every project below is an original concept designed and coded to demonstrate our architecture, typography, and responsive standards.",
      badgeLabel: "Sample Concept",
      viewDetails: "View Details",
      craftDetails: "Craft & Implementation Details",
      discussSimilar: "Discuss Similar Project",
      closeModal: "Close project modal",
    },
    process: {
      kicker: "Workflow",
      title: "From Idea to Digital Experience",
      description: "A transparent and structured four-stage workflow designed to bring clarity to every phase of your website project.",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand the client's business, goals, and requirements.",
        },
        {
          number: "02",
          title: "Design",
          description: "Create the visual direction and user interface based on the client's brand.",
        },
        {
          number: "03",
          title: "Develop",
          description: "Transform the approved design into a responsive and functional website.",
        },
        {
          number: "04",
          title: "Launch",
          description: "Deploy the website and provide the necessary handover and support.",
        },
      ],
    },
    about: {
      kicker: "About Wecrafty",
      title: "Crafting Digital Experiences with Purpose",
      description: "Wecrafty is a web development service focused on helping businesses establish a stronger digital presence. We combine thoughtful design, modern technology, and attention to detail to create websites that are functional, accessible, and aligned with each client's needs.",
      coreTaglineLabel: "Core Tagline",
      tagline: "Your Website, Our Craft.",
      guidingValues: "Guiding Values",
      values: [
        "Creativity",
        "Technology",
        "Functionality",
        "Attention to detail",
        "Client-oriented development",
      ],
    },
    faq: {
      kicker: "Common Questions",
      title: "Frequently Asked Questions",
      description: "Clear answers regarding our development scope, process, timelines, and post-launch maintenance.",
      notAddressed: "Have a question not addressed here?",
      reachOut: "Reach out directly →",
    },
    contact: {
      kicker: "Get in Touch",
      title: "Ready to Build Something Great?",
      description: "Have an idea for your business website? Let's turn it into a digital experience.",
      primaryButton: "Let's Discuss Your Project",
      directChannels: "Direct Channels:",
      quickBriefTitle: "Quick Project Brief",
      quickBriefSubtitle: "Select your service and type your business name to open WhatsApp or Email with pre-filled details.",
      serviceLabel: "Interested Service",
      businessNameLabel: "Your Business or Project Name",
      businessNamePlaceholder: "e.g. Acme Studio",
      openWhatsApp: "Open via WhatsApp",
      openEmail: "Open via Email",
      whatsappPrefill: (service, business) => {
        const namePart = business ? ` "${business}"` : "";
        return `Hello Wecrafty, I would like to discuss a ${service} for my business${namePart}.`;
      },
      emailSubject: (service, business) => {
        return `Project Inquiry: ${service} - ${business || 'New Client'}`;
      },
      emailBody: (service, business) => {
        return `Hello Wecrafty team,\n\nI would like to inquire about building a website for my business:\n- Business Name: ${business || '[Your Business Name]'}\n- Service Type: ${service}\n- Estimated Timeline: \n- Additional Notes: \n\nThank you!`;
      },
    },
    footer: {
      tagline: "Your Website, Our Craft.",
      description: "Crafting modern websites and digital experiences for businesses that want to grow.",
      specializationLabel: "Primary Specialization",
      specializationValue: "Company Profile Website Development",
      navHeading: "Navigation",
      servicesHeading: "Services",
      contactHeading: "Direct Contact",
      allRightsReserved: "All rights reserved.",
      subtitle: "Website Development & Digital Solutions",
      backToTop: "Back to top ↑",
    },
  },
};
