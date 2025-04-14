import Link from "next/link";
import { ComponentProps } from "react";

export type Company = {
  name: string;
  logo: string;
  info: string;
  role: string;
  period: string;
  cta: ComponentProps<typeof Link>;
  description: string[];
  techStack?: string[];
  location?: string
};
