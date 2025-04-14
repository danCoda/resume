import Link, { LinkProps } from "next/link";

export type NavbarLinkProps = LinkProps &
  React.HTMLAttributes<HTMLAnchorElement> & {
    title: string;
  };

export const NavbarLink = ({ title, ...rest }: NavbarLinkProps) => {
  return <Link {...rest}>{title}</Link>;
};
