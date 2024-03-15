// Frontend
import HTMLLogo from "./assets/images/html.png";
import CSSLogo from "./assets/images/css.png";
import JSLogo from "./assets/images/javascript.png";
import ReactLogo from "./assets/images/react.png";
import ReduxLogo from "./assets/images/redux.png";
import SassLogo from "./assets/images/sass.png";
import SwiperLogo from "./assets/images/swiper-logo.svg";
// import MUILogo from "./assets/images/mu5.png"
import BootstrapLogo from "./assets/images/Bootstrap-logo.png";
import jQueryLogo from "./assets/images/jquery.svg";
import ReactNativeLogo from "./assets/images/react-native.png";

// Backend
import NodeLogo from "./assets/images/node.png";
import ExpressLogo from "./assets/images/express.png";
import MongoLogo from "./assets/images/MongoDB.jpeg";
import FirebaseLogo from "./assets/images/firebase.png";

//Tools
import ShopifyLogo from "./assets/images/Shopify-Logo.jpg";
import FigmaLogo from "./assets/images/figma.png";
import JIRALogo from "./assets/images/jira.png";
import GitLogo from "./assets/images/git.png";

// Projects Images
import FFPrev from "./assets/images/fashion-fusion-prev.png";
import PortfolioBuilderPrev from "./assets/images/portfolio-builder-prev.png";
import XChatPrev from "./assets/images/x-chat-prev.png";

export const ProfileHeaderWordss = [
  "Hello, I'm Suraj Gupta",
  "<AndILoveToCode />",
];

export const AboutSectionData = {
  experience: {
    time: "3 Years",
    in: "Web Development",
  },
  education: {
    time: "2017 - 2021",
    in: "B.Tech in CSE",
  },
  aboutText:
    "Experienced Web Developer with 3 years in JavaScript, React, HTML, CSS, and Redux. Passionate about high-quality code development and eager to contribute to innovative projects.",
};

export const frontEndSkills = [
  {
    name: "HTML",
    logo: HTMLLogo,
  },
  {
    name: "CSS",
    logo: CSSLogo,
  },
  {
    name: "React",
    logo: ReactLogo,
  },
  {
    name: "JavaScript",
    logo: JSLogo,
  },
  {
    name: "SCSS",
    logo: SassLogo,
  },
  {
    name: "Redux",
    logo: ReduxLogo,
  },
  {
    name: "Swiper JS",
    logo: SwiperLogo,
  },
  {
    name: "Bootstrap",
    logo: BootstrapLogo,
  },
  {
    name: "jQuery",
    logo: jQueryLogo,
  },
  {
    name: "React Native",
    logo: ReactNativeLogo,
  },
];

export const backEndSkills = [
  {
    name: "Node JS",
    logo: NodeLogo,
  },
  {
    name: "Express JS",
    logo: ExpressLogo,
  },
  {
    name: "Mongo DB",
    logo: MongoLogo,
  },
  {
    name: "Firebase",
    logo: FirebaseLogo,
  },
];

export const tools = [
  {
    name: "Shopify",
    logo: ShopifyLogo,
  },
  {
    name: "Figma",
    logo: FigmaLogo,
  },
  {
    name: "Jira",
    logo: JIRALogo,
  },
  {
    name: "GIT",
    logo: GitLogo,
  },
];

export const SkillsData = [
  {
    title: "Frontend",
    skillArr: frontEndSkills,
  },
  {
    title: "Backend & Database",
    skillArr: backEndSkills,
  },

  {
    title: "Platform & Tools",
    skillArr: tools,
  },
];

export const ExperienceData = [
  {
    companyName: "Praella",
    jobTitle: "Frontend Developer",
    timePeriod: "Sep 2023 - Current",
    location: "Remote",
    role: [
      `Projects - <a class="text-white" target="_blank" href="https://rauantiques.com/">Rau Antiques</a>, 
      <a class="text-white" target="_blank" href="https://www.platecrate.com/">Platecrate</a>,
      <a class="text-white" target="_blank" href="https://www.oransi.com/">Oransi</a>
      `,
    ],
  },
  {
    companyName: "Magic Edtech",
    jobTitle: "Senior Associate Engineer",
    timePeriod: "Apr 2023 - Sep 2023",
    location: "Noida",
  },
  {
    companyName: "Magic Edtech",
    jobTitle: "Associate Software Engineer",
    timePeriod: "Apr 2021 - Apr 2023",
    location: "Noida",
  },
];

export const ProjectData = [
  {
    img: FFPrev,
    title: "Fashion Fusion",
    desc: "An online apparel store offering sorting and filtering products, wishlist, cart, checkout, contact support and account management functionalities for a seamless shopping experience.",
    techStack: ["React", "Firebase", "Bootstrap", "EmailJS"],
    actions: [
      { label: "DEMO", URL: "https://fashion-ff-fusion.netlify.app" },
      { label: "CODE", URL: "https://github.com/surajseth90/Fashion-Fusion" },
    ],
  },
  {
    img: XChatPrev,
    title: "X-Chat",
    desc: `"This is a an amazing real time chatting app where you can search for people and talk to them privately.(Please click on <strong>Back to our site</strong> button if you see <strong>Page Not Found</strong> error.)`,
    techStack: ["React", "Firebase"],
    actions: [
      { label: "DEMO", URL: "https://x-chat-react.netlify.app/" },
      { label: "CODE", URL: "https://github.com/surajseth90/X-Chat" },
    ],
  },
  {
    img: PortfolioBuilderPrev,
    title: "Portfolio Builder",
    desc: "This is a beautiful portfolio builder app, where you can create your own portfolio website by just updating your data in JSON.",
    techStack: ["React", "Swiper JS", "SCSS"],
    actions: [
      { label: "DEMO", URL: "https://portfolio-app-suraj.netlify.app/" },
      {
        label: "CODE",
        URL: "https://github.com/surajseth90/Portfolio",
      },
    ],
  },
  {
    title: "Saavan Music",
    desc: "This project is an exciting web player designed for seamlessly playing and downloading music. Enjoy a smooth and uninterrupted music experience with easy access to your favorite tracks.",
    techStack: ["React", "Context API", "Saavan APIs", "Swiper JS"],
    actions: [
      { label: "CODE", URL: "https://github.com/surajseth90/Saavan-Music" },
    ],
  },
];

export const ContactInfo = {
  email: "surajseth90@gmail.com",
  linkedIn: "suraj-gupta-2767a3183",
  mobile: "8962921962",
  gitLink: "https://github.com/surajseth90",
};
