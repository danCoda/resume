import { Company, NavbarLinkProps } from "@/app/types";
import { Metadata } from "next";

const SITE_NAME = "Web Devo Dan";

export const navTitle = `${SITE_NAME} 🤠`;

export const metadataCopyText = {
  rootLayout: {
    title: {
      template: `%s | ${SITE_NAME}`,
      default: SITE_NAME,
    },
    url: process.env.SITE_URL,
    description: "Australian Web Developer",
    siteName: SITE_NAME,
  } as Metadata,
};

const LINKEDIN_LINK = "https://www.linkedin.com/in/danielsurfy/";

export const navbarLinks: Array<NavbarLinkProps> = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "LinkedIn",
    href: LINKEDIN_LINK,
    target: "_blank",
  },
];

export const companiesCopyText: Array<Company> = [
  {
    name: "Optus",
    logo: "/companies/logos/optus.avif",
    info: "Leading Telecommunications company in Australia",
    role: "Full-stack Developer (contractor)",
    period: "Dec 2022 - Dec 2024",
    cta: {
      href: "https://subhub.optus.com.au/",
      target: "_blank",
    },
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
    cta: {
      href: "https://wisr.com.au/",
      target: "_blank",
    },
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
    info: "Global IT consulting company, part of NTT Group",
    role: "NodeJS API Developer",
    period: "Apr 2021 - Aug 2021",
    cta: {
      href: "https://www.tcs.com/who-we-are/worldwide/anz",
      target: "_blank",
    },
    description: [
      "Essentially a front-end role creating forms using ReactJS for a bank.",
      "NOTE: Short tenure. I realized early on that the my working style and the company’s work culture did not align. I chose to step away and find a better suited opportunity.",
    ],
  },
  {
    name: "GES",
    logo: "/companies/logos/ges.avif",
    info: "Casino software solutions",
    role: "Software Developer",
    period: "Apr 2019 - Apr 2021",
    cta: {
      href: "https://www.gentsys.com/multibet",
      target: "_blank",
    },
    description: [
      "Developed the front-end of the MultiBet suite of roulette games with jQuery.",
      "Worked closely within a small start-up environment.",
      "Created mobile and large screen web applcation for game result displays.",
      "Also build Chrome Apps and Extensions for casino systems.",
    ],
  },
  {
    name: "Dimension Data",
    logo: "/companies/logos/dd.avif",
    info: "Global IT services provider",
    role: "CCNA Associate Network Engineer, then Project Coordinator",
    period: "Apr 2015 - Nov 2019",
    cta: {
      href: "https://services.global.ntt/en-us/",
      target: "_blank",
    },
    description: [
      "Managed multiple projects for various clients.",
      "Projects included updating server software and hardware, racking and stacking and more.",
      "Handled client communication and expectatiopns, team management, and admin work including forecasting and project budget.",
      "Coordinated with teams and clients to ensure smooth delivery and handoff.",
    ],
  },
  {
    name: "Ecoview",
    logo: "/companies/logos/ecoview.avif",
    info: "Building energy consumption monitoring company, part of Stowe Australia",
    role: "Graduate Web Developer",
    period: "Mar 2013 - Mar 2015",
    cta: {
      href: "https://eco-view.com.au/",
      target: "_blank",
    },
    description: [
      "The Ecoview platform was a web application used for tracking energy consumption used by building managers.",
      "Built various features using AngularJS and ASP.NET MVC.",
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
      `Why yes, I am an Aussie citizen.`,
      `I've had the privilege working with amazing companies.`,
    ],
    passionate: [
      "I'm a passionate web developer based in Sydney, Australia.",
      "I have exceptional experience building modern web applications, and can bring mockups to usable products.",
      "I've collaborated with amazing companies and bring a wealth of experience in both front-end development and full-stack solutions. But mostly front-end for now.",
      "I pride myself on writing clean, maintainable code and achieving awesome results together.",
      "Let's work together to bring your web projects to life!",
    ],
  },
  experienceTitle: "Companies I've worked with",
  callToDeveloper: {
    title: "Looking for a developer?",
    link: {
      title: "Contact me",
      cta: {
        href: LINKEDIN_LINK,
        target: "_blank",
      },
    },
  },
};

export const danDescriptionStyleLabelCopyText = {
  showPassion: "A bit more passion?",
  relax: "Whoa chill out dude!",
};

export const experienceCopyText = {
  title: "Professional Experience",
};
