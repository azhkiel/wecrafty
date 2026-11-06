import { Language } from '../context/LanguageContext.tsx';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  isPrimary?: boolean;
  deliverables?: string[];
  iconName: 'Building2' | 'Rocket' | 'Briefcase' | 'Code' | 'ShieldCheck' | 'Layout';
}

interface LocalizedServiceData {
  id: string;
  isPrimary?: boolean;
  iconName: ServiceItem['iconName'];
  en: {
    title: string;
    description: string;
    deliverables: string[];
  };
  idLang: {
    title: string;
    description: string;
    deliverables: string[];
  };
}

const localizedServices: LocalizedServiceData[] = [
  {
    id: "company-profile",
    isPrimary: true,
    iconName: "Building2",
    en: {
      title: "Company Profile Website",
      description: "Professional websites that introduce your business, services, and brand identity.",
      deliverables: [
        "Custom brand-aligned visual design",
        "Executive summary & service catalog",
        "Interactive company story & credentials",
        "Direct contact & consultation integration"
      ],
    },
    idLang: {
      title: "Website Profil Perusahaan",
      description: "Website profesional yang memperkenalkan identitas bisnis, layanan, dan kredibilitas brand Anda.",
      deliverables: [
        "Desain visual eksklusif selaras brand",
        "Ringkasan profil & katalog layanan",
        "Pemaparan portofolio & kredensial",
        "Integrasi kontak & konsultasi langsung"
      ],
    },
  },
  {
    id: "landing-page",
    iconName: "Rocket",
    en: {
      title: "Landing Page",
      description: "Focused landing pages designed to communicate offers and encourage customer action.",
      deliverables: [
        "Direct value proposition hierarchy",
        "Clear call-to-action pathways",
        "Fast loading speed optimization"
      ],
    },
    idLang: {
      title: "Landing Page",
      description: "Halaman web terfokus untuk menyampaikan penawaran produk/jasa dan mendorong konversi pelanggan.",
      deliverables: [
        "Hierarki pesan nilai yang lugas & persuasif",
        "Arah tindakan (CTA) yang jelas",
        "Optimasi kecepatan loading tinggi"
      ],
    },
  },
  {
    id: "business-website",
    iconName: "Briefcase",
    en: {
      title: "Business Website",
      description: "Websites for showcasing products, services, portfolios, and business information.",
      deliverables: [
        "Structured service & product presentations",
        "Dynamic inquiry forms & location details",
        "Mobile-optimized customer browsing"
      ],
    },
    idLang: {
      title: "Website Bisnis & Informasi",
      description: "Website lengkap untuk menampilkan produk, layanan, portofolio, dan informasi operasional bisnis.",
      deliverables: [
        "Presentasi produk & layanan terstruktur",
        "Formulir inquiry & integrasi peta lokasi",
        "Akses ramah perangkat seluler"
      ],
    },
  },
  {
    id: "custom-development",
    iconName: "Code",
    en: {
      title: "Custom Web Development",
      description: "Tailored web solutions based on specific business requirements.",
      deliverables: [
        "Specialized interactive calculators or tools",
        "Clean TypeScript & component architecture",
        "API integrations & custom data displays"
      ],
    },
    idLang: {
      title: "Pengembangan Web Khusus",
      description: "Solusi web kustom yang dibangun sesuai dengan spesifikasi dan alur kerja bisnis tertentu.",
      deliverables: [
        "Kalkulator interaktif atau modul khusus",
        "Arsitektur kode TypeScript yang terstruktur",
        "Integrasi API & visualisasi data"
      ],
    },
  },
  {
    id: "website-maintenance",
    iconName: "ShieldCheck",
    en: {
      title: "Website Maintenance",
      description: "Updates, improvements, and technical support to keep websites running smoothly.",
      deliverables: [
        "Content updates & asset optimization",
        "Performance checks & dependency updates",
        "Technical troubleshooting & uptime monitoring"
      ],
    },
    idLang: {
      title: "Pemeliharaan & Dukungan Web",
      description: "Pembaruan rutin, peningkatan performa, dan bantuan teknis agar website selalu berjalan prima.",
      deliverables: [
        "Pembaruan konten & optimasi aset",
        "Pengecekan performa & pembaruan dependensi",
        "Troubleshooting teknis & pemantauan uptime"
      ],
    },
  },
  {
    id: "ui-ux-design",
    iconName: "Layout",
    en: {
      title: "UI/UX Design",
      description: "Clean and intuitive interfaces that prioritize usability and user experience.",
      deliverables: [
        "Wireframing & user journey mapping",
        "Design systems & component tokens",
        "Interactive high-fidelity prototypes"
      ],
    },
    idLang: {
      title: "Desain UI/UX",
      description: "Antarmuka yang bersih, intuitif, dan mengutamakan kemudahan navigasi bagi pengunjung.",
      deliverables: [
        "Wireframe & pemetaan alur pengguna",
        "Sistem desain & token komponen",
        "Prototipe interaktif fidelitas tinggi"
      ],
    },
  },
];

export const getServicesData = (lang: Language): ServiceItem[] => {
  return localizedServices.map((item) => {
    const content = lang === 'id' ? item.idLang : item.en;
    return {
      id: item.id,
      isPrimary: item.isPrimary,
      iconName: item.iconName,
      title: content.title,
      description: content.description,
      deliverables: content.deliverables,
    };
  });
};

// Default export for compatibility
export const servicesData: ServiceItem[] = getServicesData('id');
