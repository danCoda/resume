import Link from "next/link";
import { ComponentProps } from "react";

type Cta = ComponentProps<typeof Link>;

export type Company = {
  name: string;
  logo: string;
  info: string;
  role: string;
  period: string;
  cta: Cta;
  description: string[];
  techStack?: string[];
  location?: string;
};

export type NavbarLinkProps = Cta & {
  title: string;
};
