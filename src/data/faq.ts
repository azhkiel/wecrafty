import { Language } from '../context/LanguageContext.tsx';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface LocalizedFAQItem {
  id: string;
  en: {
    question: string;
    answer: string;
  };
  idLang: {
    question: string;
    answer: string;
  };
}

const localizedFaqList: LocalizedFAQItem[] = [
  {
    id: "services-offered",
    en: {
      question: "What services does Wecrafty offer?",
      answer: "Wecrafty specializes in company profile website development, high-conversion landing pages, business websites, custom web development, UI/UX interface design, and ongoing website maintenance. Every project is built from scratch according to the client's specific business goals."
    },
    idLang: {
      question: "Layanan apa saja yang ditawarkan oleh Wecrafty?",
      answer: "Wecrafty berfokus pada pembuatan website profil perusahaan (company profile), landing page terfokus, website katalog bisnis, pengembangan fitur web khusus, desain antarmuka UI/UX, serta pemeliharaan website berkala. Setiap proyek dirancang dari awal sesuai dengan karakter dan tujuan bisnis klien."
    }
  },
  {
    id: "development-process",
    en: {
      question: "How does the website development process work?",
      answer: "Our workflow follows four distinct stages: Discover, Design, Develop, and Launch. First, we clarify your business objectives, target audience, and required pages. Next, we design the visual direction and layout. Once approved, we build the site using modern web technologies and conduct thorough cross-device testing before deployment and handover."
    },
    idLang: {
      question: "Bagaimana alur dan proses pembuatan website di Wecrafty?",
      answer: "Proses pengerjaan kami terbagi dalam 4 tahap: Discover (pembahasan tujuan bisnis dan konten), Design (perancangan visual dan tata letak), Develop (pengodean dengan teknologi web modern), dan Launch (pengujian menyeluruh lintas perangkat, deployment hosting, dan serah terima)."
    }
  },
  {
    id: "design-customization",
    en: {
      question: "Can the website design be customized?",
      answer: "Yes. Every website is custom-designed around your brand identity, color scheme, typography, and content structure. We do not use rigid generic templates that force your business into a predefined mold."
    },
    idLang: {
      question: "Apakah desain website dapat disesuaikan dengan brand saya?",
      answer: "Tentu saja. Setiap website dirancang secara khusus mengikuti identitas brand, warna korporat, tipografi, dan struktur konten Anda. Kami tidak menggunakan template kaku yang membuat website Anda terlihat sama dengan kompetitor."
    }
  },
  {
    id: "mobile-responsiveness",
    en: {
      question: "Will the website work on mobile devices?",
      answer: "Yes. Responsive design is a core standard for every site we deliver. Your website is planned and tested to display legibly and perform smoothly across smartphones, tablets, laptops, and wide desktop displays."
    },
    idLang: {
      question: "Apakah website akan bekerja dengan baik di smartphone dan tablet?",
      answer: "Ya. Desain responsif adalah standar mutlak di setiap proyek kami. Website dirancang dan diuji secara ketat agar tampil proporsional, cepat dimuat, dan nyaman dioperasikan di layar ponsel, tablet, laptop, hingga komputer desktop."
    }
  },
  {
    id: "project-timeline",
    en: {
      question: "How long does website development take?",
      answer: "Timelines depend on the scope of the project, the number of pages, custom features, and how quickly feedback and content are provided. A focused company profile or landing page typically takes between 1 to 3 weeks once requirements are confirmed. We provide a clear delivery schedule during our initial project discussion."
    },
    idLang: {
      question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
      answer: "Durasi pengerjaan bergantung pada kompleksitas fitur, jumlah halaman, serta ketersediaan materi dari pihak klien. Untuk website profil perusahaan atau landing page berstandar profesional, estimasi pengerjaan umumnya berkisar antara 1 hingga 3 minggu setelah rincian disepakati."
    }
  },
  {
    id: "maintenance-support",
    en: {
      question: "Can I request website maintenance after launch?",
      answer: "Yes. We offer website maintenance and support services covering text and image updates, technical checks, security adjustments, and performance monitoring to ensure your website remains functional and up to date."
    },
    idLang: {
      question: "Apakah ada layanan pemeliharaan (maintenance) setelah website selesai?",
      answer: "Ya, kami menyediakan paket pemeliharaan dan dukungan teknis berkelanjutan, mencakup pembaruan konten, optimasi aset, penyesuaian keamanan sistem, dan pengecekan uptime agar website Anda selalu stabil dan aman."
    }
  },
  {
    id: "development-cost",
    en: {
      question: "How much does it cost to build a website?",
      answer: "Pricing is calculated based on your specific requirements: the number of distinct page layouts, content volume, interactivity, and custom technical integrations. Because every business has different needs, we provide a transparent, itemized proposal after discussing your project scope, with no hidden fees."
    },
    idLang: {
      question: "Berapa biaya pembuatan website di Wecrafty?",
      answer: "Biaya dihitung secara transparan berdasarkan ruang lingkup kebutuhan Anda: jumlah halaman unik, kompleksitas visual, fitur interaktif, serta integrasi teknis. Kami memberikan rincian proposal yang jelas setelah sesi diskusi awal tanpa ada biaya tersembunyi."
    }
  }
];

export const getFaqData = (lang: Language): FAQItem[] => {
  return localizedFaqList.map((item) => {
    const content = lang === 'id' ? item.idLang : item.en;
    return {
      id: item.id,
      question: content.question,
      answer: content.answer,
    };
  });
};

export const faqData: FAQItem[] = getFaqData('id');
