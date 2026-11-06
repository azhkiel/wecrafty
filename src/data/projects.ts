import { Language } from '../context/LanguageContext.tsx';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  badgeLabel: string;
  description: string;
  techTags: string[];
  isFeatured?: boolean;
  demoUrl?: string;
  designHighlights: string[];
  previewLayout: {
    heroTitle: string;
    heroSubtitle: string;
    palette: string[];
    accentColor: string;
  };
}

interface LocalizedProjectData {
  id: string;
  name: string;
  techTags: string[];
  isFeatured?: boolean;
  previewLayout: {
    heroTitle: string;
    heroSubtitle: string;
    palette: string[];
    accentColor: string;
  };
  en: {
    category: string;
    badgeLabel: string;
    description: string;
    designHighlights: string[];
  };
  idLang: {
    category: string;
    badgeLabel: string;
    description: string;
    designHighlights: string[];
  };
}

const localizedProjects: LocalizedProjectData[] = [
  {
    id: "kalyana-studio",
    name: "Kalyana Studio & Atelier",
    techTags: ["React", "TypeScript", "Tailwind CSS", "Semantic HTML"],
    isFeatured: true,
    previewLayout: {
      heroTitle: "Quiet Spatial Craft for Modern Living",
      heroSubtitle: "Monograph Archive 2024–2026",
      palette: ["#17165E", "#FFFFFF", "#E2E8F0"],
      accentColor: "#1685F7"
    },
    en: {
      category: "Company Profile Website",
      badgeLabel: "Sample Concept",
      description: "A minimalist company profile crafted for a boutique architecture studio, presenting architectural monographs, spatial philosophy, materials archive, and client consultation pathways.",
      designHighlights: [
        "Editorial monograph layout with zero unnecessary ornamentation",
        "Disciplined typographic hierarchy pairing serif display with sans body",
        "Optimized high-density image layout with responsive viewport math"
      ],
    },
    idLang: {
      category: "Website Profil Perusahaan",
      badgeLabel: "Konsep Sampel",
      description: "Profil perusahaan minimalis yang dirancang untuk studio arsitektur, menampilkan monograf karya spasial, filosofi material, arsip proyek, dan jalur konsultasi klien.",
      designHighlights: [
        "Tata letak monograf editorial tanpa ornamen berlebih",
        "Hierarki tipografi disiplin dengan kontras visual seimbang",
        "Optimasi tata letak gambar responsif di berbagai ukuran layar"
      ],
    },
  },
  {
    id: "norum-botanicals",
    name: "Norum Botanicals",
    techTags: ["TypeScript", "Tailwind CSS", "Accessible Forms"],
    isFeatured: false,
    previewLayout: {
      heroTitle: "Pure Botanical Science & Sourcing",
      heroSubtitle: "Sustainable Formulation",
      palette: ["#1B332A", "#F4F7F5", "#36C99A"],
      accentColor: "#36C99A"
    },
    en: {
      category: "Business Website",
      badgeLabel: "Sample Concept",
      description: "An informational brand showcase presenting organic ingredient transparency, extraction methodologies, and stockist locations.",
      designHighlights: [
        "Structured ingredient disclosure with tabular formatting",
        "Direct stockist directory and contact routing"
      ],
    },
    idLang: {
      category: "Website Bisnis & Showcase",
      badgeLabel: "Konsep Sampel",
      description: "Website etalase brand yang menyajikan transparansi bahan baku organik, metode ekstraksi laboratorium, dan direktori gerai mitra.",
      designHighlights: [
        "Penyajian data komposisi bahan dengan format tabular yang rapi",
        "Direktori lokasi gerai dan rute kontak langsung"
      ],
    },
  },
  {
    id: "axiom-advisory",
    name: "Axiom Advisory Partners",
    techTags: ["React", "TypeScript", "Responsive Layout"],
    isFeatured: false,
    previewLayout: {
      heroTitle: "Strategic Counsel for Complex Transactions",
      heroSubtitle: "Practice Focus & Advisory",
      palette: ["#0F172A", "#F8FAFC", "#0F6FD9"],
      accentColor: "#0F6FD9"
    },
    en: {
      category: "Corporate Profile",
      badgeLabel: "Sample Concept",
      description: "A structured executive profile establishing credibility, practice area breakdowns, partner profiles, and secure client communication channels.",
      designHighlights: [
        "Clutter-free corporate practice matrix",
        "Direct contact routing with phone and encrypted email"
      ],
    },
    idLang: {
      category: "Profil Korporat & Konsultasi",
      badgeLabel: "Konsep Sampel",
      description: "Profil eksekutif terstruktur untuk memperkuat kredibilitas, pembagian bidang keahlian hukum/bisnis, profil konsultan, dan kanal komunikasi terpercaya.",
      designHighlights: [
        "Matriks bidang praktik korporat yang jelas dan ringkas",
        "Integrasi jalur kontak langsung dengan telepon dan email resmi"
      ],
    },
  }
];

export const getProjectsData = (lang: Language): ProjectItem[] => {
  return localizedProjects.map((p) => {
    const content = lang === 'id' ? p.idLang : p.en;
    return {
      id: p.id,
      name: p.name,
      techTags: p.techTags,
      isFeatured: p.isFeatured,
      previewLayout: p.previewLayout,
      category: content.category,
      badgeLabel: content.badgeLabel,
      description: content.description,
      designHighlights: content.designHighlights,
    };
  });
};

export const projectsData: ProjectItem[] = getProjectsData('id');
