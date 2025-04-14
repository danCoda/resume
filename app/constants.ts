import { NavbarLinkProps } from "./components/navbar-link";

export const metadataCopyText = {
  rootLayout: {
    title: {
      template: "%s | DS Sydney Developer",
      default: "DS Sydney Developer",
    },
    description: "Full-stack web developer in Sydney",
  },
};

export const navbarLinks: Array<NavbarLinkProps> = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const companiesCopyText = [
  {
    name: "Optus",
    logo: "/companies/logos/optus.avif",
    info: "Leading telecommunications company in Australia",
    role: "Full-stack developer",
    period: "Dec 2022 - Dec 2024",
    description: [
      "SubHub is a public-facing web application for managing your various subscriptions such as Netflix, Paramount+ and Amazon Prime. Instead of having numerous bills from everywhere and suffering subscription fatigue, you get a simple monthly bill from Optus (with bonuses).",
      "This was a front-end focused full-stack role, using NextJS, NodeJS and AWS. I made various contributions including the Watchlist playlist feature, headless CMS-controlled partner banners and Dashboard notifications",
    ],
  },
  {
    name: "Wisr",
    logo: "/companies/logos/wisr.avif",
    info: "Australian non-bank lender and financial wellness platform",
    role: "Web developer",
    period: "Aug 2021 - Aug 2022",
    description: [
      "Led development of key financial products using React, Node.js, and AWS",
      "Implemented secure payment processing and loan application systems",
    ],
  },
  {
    name: "TCS",
    logo: "/companies/logos/tcs.avif",
    info: "Global IT services and consultancy",
    role: "Web developer",
    period: "Apr 2021 - Aug 2021",
    description: [
      "Developed enterprise solutions for major banking clients",
      "Worked with Java, Spring Boot, and Angular frameworks",
    ],
  },
  {
    name: "Dimension Data",
    logo: "/companies/logos/dd.avif",
    info: "Global IT services and consultancy",
    role: "Web developer",
    period: "Apr 2021 - Aug 2021",
    description: [
      "Developed enterprise solutions for major banking clients",
      "Worked with Java, Spring Boot, and Angular frameworks",
    ],
  },
];
