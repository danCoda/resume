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
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
