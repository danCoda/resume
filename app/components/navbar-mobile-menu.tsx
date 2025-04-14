import { navbarLinks } from "@/app/constants";
import { NavbarLink } from "@/app/components/navbar-link";

type NavbarMobileMenuProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
> & {
  isMenuOpen: boolean;
};

export const NavbarMobileMenu = ({
  isMenuOpen,
  className = "",
}: NavbarMobileMenuProps) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } ${className}`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navbarLinks.map((link) => (
          <NavbarLink
            {...link}
            className="block hover:bg-gray-700 px-3 py-2 rounded"
            key={link.title}
          />
        ))}
      </div>
    </div>
  );
};
