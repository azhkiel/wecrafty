/**
 * Wecrafty Official Website Configuration
 * 
 * Replace placeholders below with your actual business contact channels.
 * Empty values ('') will be hidden automatically from the UI.
 */

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  isPrimary?: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  category: string;
  primaryService: string;
  description: string;
  logoPath: string;
  contacts: {
    whatsapp: {
      number: string; // Placeholder: Replace with your actual WhatsApp phone number (e.g. 6281234567890)
      display: string;
      prefillMessage: string;
      getHref: () => string;
    };
    email: {
      address: string; // Placeholder: Replace with your actual email address
      getHref: () => string;
    };
    instagram?: {
      handle: string; // Placeholder: Replace with your actual Instagram handle or set to empty string ''
      url: string;
    };
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Wecrafty",
  tagline: "Your Website, Our Craft.",
  category: "Website Development & Digital Solutions",
  primaryService: "Company Profile Website Development",
  description: "Wecrafty helps businesses build professional digital experiences through modern, responsive, and customized website development.",
  logoPath: "/images/wecrafty-logo.png",
  contacts: {
    whatsapp: {
      // NOTE: Replace this placeholder number with your actual WhatsApp business number
      number: "6281334873155",
      display: "+62 813-3487-3155",
      prefillMessage: "Hello Wecrafty, I would like to discuss a website development project for my business.",
      getHref() {
        const text = encodeURIComponent(this.prefillMessage);
        return `https://wa.me/${this.number}?text=${text}`;
      },
    },
    email: {
      // NOTE: Replace this placeholder email with your actual official business email
      address: "naikkelasdigitalcompany@gmail.com",
      getHref() {
        const subject = encodeURIComponent("Website Project Inquiry — Wecrafty");
        const body = encodeURIComponent("Hello Wecrafty team,\n\nI would like to inquire about building a website for my business:\n- Business Name:\n- Website Type (Company Profile / Landing Page / Other):\n- Target Timeline:\n\nThank you!");
        return `mailto:${this.address}?subject=${subject}&body=${body}`;
      },
    },
    instagram: {
      // NOTE: Replace or clear if not applicable
      handle: "@wecrafty.digital",
      url: "https://instagram.com",
    },
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
};
