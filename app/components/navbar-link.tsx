import Link from "next/link";
import { NavbarLinkProps } from "@/app/types";



export const NavbarLink = ({ title, ...rest }: NavbarLinkProps) => { // NOTE: This component may not be needed.
  return <Link {...rest}>{title}</Link>;
};
