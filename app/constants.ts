import { NavbarLinkProps } from "./components/navbar-link";
import { Company } from "./types";

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
  /*   {
    title: "About",
    href: "/about",
  },
  {
    title: "Resume",
    href: "/resume",
  }, */
  {
    title: "Experience",
    href: "/experience",
  },
  /*   {
    title: "Contact",
    href: "/contact",
  }, */
];

export const companiesCopyText: Array<Company> = [
  {
    name: "Optus",
    logo: "/companies/logos/optus.avif",
    info: "Leading Telecommunications company in Australia",
    role: "Full-stack Developer (contractor)",
    period: "Dec 2022 - Dec 2024",
    link: "https://subhub.optus.com.au/",
    description: [
      "Worked on SubHub, a subscription management web application for everyday Australians.",
      "Translated Figma wireframes into usable products using Next.js, Node.js, and AWS.",
      "Closely collaborated with QA, designer, product owner, scrum master and other developers.",
      "Big contributions include features like the Watchlist playlist, and CMS-controlled widgets (partner banners and dashboard notifications).",
      "Developed Credit Offer API endpoints and related front-end components.",
    ],
  },
  {
    name: "Wisr",
    logo: "/companies/logos/wisr.avif",
    info: "Australian non-bank lender and financial wellness platform",
    role: "Web Developer",
    period: "Aug 2021 - Aug 2022",
    link: "https://wisr.com.au/",
    description: [
      "Worked on various BAU tasks on Liger, which is an internal CRM application.",
      "Liger was developed with maintability and UX in mind, to replace the hastly developed ASP.NET MVC application.",
      "BAU tasks including translating Figma designs into web interfaces through collaboration with designer, product owner and other developers.",
      "Initiated weekly knowledge sharing sessions and organised a team hike.",
      "NOTE: Terrific team and culture, but short tenure due to role redundancy.",
    ],
  },
  {
    name: "TCS",
    logo: "/companies/logos/tcs.avif",
    info: "Global IT consulting company, part of NTT Group.",
    role: "NodeJS API Developer",
    period: "Apr 2021 - Aug 2021",
    link: "https://www.tcs.com/who-we-are/worldwide/anz",
    description: [
      "Essentially a front-end role creating forms using ReactJS for a bank.",
      "NOTE: Short tenure. I realized early on that the my working style and the company’s work culture did not align. I chose to step away and find a better suited opportunity.",
    ],
  },
  {
    name: "GES",
    logo: "/companies/logos/ges.avif",
    info: "Casino software solutions startup",
    role: "Software Developer",
    period: "Apr 2019 - Apr 2021",
    link: "https://www.gentsys.com/multibet",
    description: [
      "Developed the front-end of the MultiBet suite roulette games, and related content.",
      "Built Chrome Apps and Extensions for casino systems.",
      "Created mobile and large screen result displays.",
    ],
  },
  {
    name: "Dimension Data",
    logo: "/companies/logos/dd.avif",
    info: "Global IT services provider",
    role: "Associate Network Engineer, then Project Coordinator",
    period: "Apr 2015 - Nov 2019",
    link: "https://services.global.ntt/en-us/",
    description: [
      "Managed multiple projects for various clients.",
      "Projects included updating server software and hardware, and racking and stacking.",
      "Handled client communication and expectatiopns, team management, planning and budget forecasting.",
      "Coordinated with teams and clients to ensure smooth delivery and handoff.",
    ],
  },
  {
    name: "Ecoview",
    logo: "/companies/logos/ecoview.avif",
    info: "Building energy consumption monitoring company, part of Stowe Australia",
    role: "Graduate Web Developer",
    period: "Mar 2013 - Mar 2015",
    link: "https://eco-view.com.au/",
    description: [
      "Built various features for the Ecoview web application using AngularJS and ASP.NET MVC.",
    ],
  },
];

export const homepageCopyText = {
  title: "Hi there!",
  subtitle: "I'm Dan, and welcome to my new website (work in progress...)",
  description: {
    default: [
      `I'm a web developer in Sydney.`,
      `I'm more experienced on the front-end, and can do full-stack as well.`,
      `I can work with you and your team to make your websites and web applications.`,
      `Yes, I'm an Aussie citizen.`,
      `I've had the privilege working with amazing companies.`,
    ],
    passionate: [
      "I'm a passionate web developer based in Sydney, Australia.",
      "I have good experience building modern web applications, and can bring mockups to usable products.",
      "I've collaborated with amazing companies and bring a wealth of experience in both front-end development and full-stack solutions. But mostly front-end for now.",
      "I pride myself on writing clean, maintainable code and achieving awesome results together.",
      "Let's work together to bring your web projects to life!",
    ],
  },
};

export const danDescriptionStyleLabelCopyText = {
  showPassion: "Show some passion?",
  relax: "Whoa chill out dude!"
}