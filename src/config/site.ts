import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "CAM",
  short_name: "CAM",
  title: "A starter template",
  description:
    "Experience the power of Next.js 13 and Typescript with our advanced starter template. Build large-scale applications easily with support for MDX, theming, and an authentication system, while ensuring 100% SEO and accessibility. Get a head start on your project today!",
  type: "site",
  url: "",
  logo: "/brand.svg",
  technologies: [
    "Nextjs",
    "Typescript",
    "Zod",
    "Sass",
    "Tailwindcss",
    "Framer motion",
  ],
  locales: ["en"],
  locale: "en-US",
  keywords: ["Starter template"],
  creator: "@jbeliomaima",
  hosting_service: "Vercel",
  publisher: "@jbeliomaima",
  authors: [{ name: "jbeliomaima", url: "https://github.com/OmaimaG" }],
  category: "cyber security",
  categories: ["cyber security", "network security"],
  themes: ["light", "dark"],
  color_scheme: "light dark",
  theme_color: [
    { color: "white", media: "(prefers-color-scheme: light)" },
    { color: "black", media: "(prefers-color-scheme: dark)" },
  ],

  links: {
    repo: {
      github: "https://github.com/OmaimaG",
    },
    author: {
     
      github: "https://github.com/OmaimaG",
    },
  },
  contact: {
    address: "Main street 123",
    phone: "54000111",
    email: "example@domin.com",
  },
}

export default siteConfig
