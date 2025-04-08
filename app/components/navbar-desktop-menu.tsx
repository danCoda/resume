import { navbarLinks } from "../constants";
import NavbarLink from "./navbar-link";

type NavbarDesktopMenuProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
>;

export const NavbarDesktopMenu = ({
  className = "",
}: NavbarDesktopMenuProps) => {
  return (
    <div className={`space-x-4 ${className}`}>
      {navbarLinks.map((link) => (
        <NavbarLink
          {...link}
          className="hover:text-gray-300"
          key={link.title}
        />
      ))}
    </div>
  );
};
