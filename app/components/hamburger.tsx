type HamburgerProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
> & {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const Hamburger = ({
  isMenuOpen,
  toggleMenu,
  className = "",
}: HamburgerProps) => {
  return (
    <button
      onClick={toggleMenu}
      className={`text-gray-300 hover:text-white focus:outline-none ${className}`}
    >
      <svg
        className={`h-6 w-6 transform transition-transform duration-300 ${
          isMenuOpen ? "rotate-90" : "rotate-0"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  );
};
