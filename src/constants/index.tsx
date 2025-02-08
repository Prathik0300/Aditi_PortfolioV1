import { downloadResume } from "@/utils/commonUtils";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaBehance } from "react-icons/fa";

export const NAVBAR_CONTENT = [
  {
    displayName: "Home",
    id: "home",
    navIndex: 0,
    isCustomHandler: false,
  },
  {
    displayName: "About",
    id: "aboutMe",
    navIndex: 1,
    isCustomHandler: false,
  },
  {
    displayName: "Resume",
    id: "resume",
    navIndex: 2,
    isCustomHandler: true,
    handler: downloadResume,
  },
  // {
  //   displayName: "Skills",
  //   id: "skills",
  //   navIndex: 3,
  //   isCustomHandler: false,
  // },
  {
    displayName: "Projects",
    id: "projects",
    navIndex: 4,
    isCustomHandler: false,
  },
  {
    displayName: "Services",
    id: "services",
    navIndex: 5,
    isCustomHandler: false,
  },
  {
    displayName: "Contact",
    id: "contactMe",
    navIndex: 6,
    isCustomHandler: false,
  },
] as const;

export const PROJECT_ITEMS = [
  {
    id: 1,
    title: "Unacademy Women’s Day: A Bold New Narrative",
    description: `I collaborated with Unacademy, the EdTech giant, to create a standout Women’s Day campaign that went beyond the ordinary. The challenge was clear—deliver something truly different, with the potential to shape a long-term partnership. Rising to the occasion, I led the ideation and scripting, crafting a unique and impactful concept that resonated with the audience and aligned with Unacademy’s vision.`,
    isLast: false,
    relatedLinks: [
      {
        linkId: 1,
        url: "https://www.youtube.com/watch?v=d76Zt7b7_Ec",
        icon: YouTubeIcon,
        backgroundColor: "#FF0000",
        contentColor: "#FFFFFF",
        content: "Youtube",
      },
    ],
    images: [
      {
        imageId: 1,
        src: "/projects/unacademy/image1.png",
        alt: "unacademy_image1",
      },
      {
        imageId: 2,
        src: "/projects/unacademy/image2.png",
        alt: "unacademy_image2",
      },
      {
        imageId: 3,
        src: "/projects/unacademy/image3.png",
        alt: "unacademy_image3",
      },
    ],
  },
  {
    id: 2,
    title: `PrepLadder Faculty Spotlight: Powering Aspirants’ Success`,
    description: `PrepLadder, one of India’s leading online learning platforms, is dedicated to empowering aspirants across various fields. To drive sales and strengthen its presence, the brand needed a high-impact newspaper advertisement that highlighted its biggest strength—its exceptional faculty. The goal was to create excitement and establish them as the ultimate mentors for success.`,
    isLast: false,
    relatedLinks: [
      {
        linkId: 1,
        url: "https://www.behance.net/gallery/138118937/Newspaper-Advertising-PrepLadder-Education",
        icon: FaBehance,
        backgroundColor: "#053EFF",
        contentColor: "#FFFFFF",
        content: "Behance",
      },
    ],
    images: [
      {
        imageId: 1,
        src: "/projects/prepladder/newspaper_ad/image1.png",
        alt: "prepladder_newspaper_ad_image1",
      },
      {
        imageId: 2,
        src: "/projects/prepladder/newspaper_ad/image2.png",
        alt: "prepladder_newspaper_ad_image2",
      },
    ],
  },
  {
    id: 3,
    title: "Padho Utna, Chahiye Jitna Campaign",
    description: `Shifting medical students from rote memorization to smart, focused learning was a challenge—one that sparked the creation of this campaign. “Padho Utna, Chahiye Jitna” encouraged students to consume only the necessary content, making their preparation more efficient and effective.`,
    isLast: false,
    relatedLinks: [
      {
        linkId: 1,
        url: "https://www.behance.net/gallery/96962493/Ad-Spot-Print-Campaign-for-Ed-tech-Client-PrepLadder",
        icon: FaBehance,
        backgroundColor: "#053EFF",
        contentColor: "#FFFFFF",
        content: "Behance",
      },
      {
        linkId: 2,
        url: "https://www.youtube.com/watch?v=570ZSkY5c4Y",
        icon: YouTubeIcon,
        backgroundColor: "#FF0000",
        contentColor: "#FFFFFF",
        content: "Youtube",
      },
    ],
    images: [
      {
        imageId: 1,
        src: "/projects/prepladder/image1.png",
        alt: "prepladder_image1",
      },
      {
        imageId: 2,
        src: "/projects/prepladder/image2.png",
        alt: "prepladder_image2",
      },
      {
        imageId: 3,
        src: "/projects/prepladder/image3.jpg",
        alt: "prepladder_image3",
      },
      {
        imageId: 4,
        src: "/projects/prepladder/image4.jpg",
        alt: "prepladder_image4",
      },
      {
        imageId: 5,
        src: "/projects/prepladder/image5.jpg",
        alt: "prepladder_image5",
      },
      {
        imageId: 6,
        src: "/projects/prepladder/image6.jpg",
        alt: "prepladder_image6",
      },
    ],
  },
  {
    id: 3,
    title: "OnePrep: Redefining CA Exam Prep",
    description: `I spearheaded the brand storytelling for OnePrep, PrepLadder’s extension for CA aspirants, backed by India’s top CA faculty and premier learning material. The challenge was to establish a strong distinction between traditional pen-drive courses from star teachers and the OnePrep app featuring the same experts. Inspired by the bold Microsoft vs. Apple dynamic, I scripted seven highly successful ad films—quirky, concise, and engaging. These films not only captured the essence of OnePrep but also positioned it as the smarter, more dynamic choice for CA aspirants.`,
    isLast: false,
    images: [
      {
        imageId: 1,
        src: "/projects/oneprep/image1.jpg",
        alt: "prepladder_image1",
      },
      {
        imageId: 2,
        src: "/projects/oneprep/image2.jpg",
        alt: "prepladder_image2",
      },
      {
        imageId: 3,
        src: "/projects/oneprep/image3.jpg",
        alt: "prepladder_image3",
      },
      {
        imageId: 4,
        src: "/projects/oneprep/image4.jpg",
        alt: "prepladder_image4",
      },
    ],
  },
  {
    id: 4,
    title: "SHOEGR: Building a Brand from the Ground Up",
    description: `As a new player in the shoe cleaning industry, SHOEGR needed more than just sales—it needed brand awareness and a loyal customer base. The focus was on crafting a strong identity and engaging storytelling to position SHOEGR as a go-to brand in the market.`,
    isLast: false,
    relatedLinks: [
      {
        linkId: 1,
        url: "https://www.instagram.com/shoegr_india/",
        icon: InstagramIcon,
        backgroundColor: "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)",
        contentColor: "#FFFFFF",
        content: "Instagram",
      },
      {
        linkId: 2,
        url: "https://www.youtube.com/channel/UCx19THawmNwG2NRFJ1rrCIQ",
        icon: YouTubeIcon,
        backgroundColor: "#FF0000",
        contentColor: "#FFFFFF",
        content: "Youtube",
      },
    ],
    images: [
      {
        imageId: 1,
        src: "/projects/shoegr/image1.jpg",
        alt: "shoegr_image1",
      },
      {
        imageId: 2,
        src: "/projects/shoegr/image2.jpg",
        alt: "shoegr_image2",
      },
      {
        imageId: 3,
        src: "/projects/shoegr/image3.jpg",
        alt: "shoegr_image3",
      },
    ],
  },
  {
    id: 5,
    title: "TVF Girliyapa: Amplifying Women-Centric Storytelling",
    description: `As an extension of TVF (The Viral Fever), Girliyapa is India’s leading women-centric entertainment channel, known for its relatable, real, and humorous narratives. I played a key role in managing social media marketing for two YouTube series and assisted with another, driving engagement and expanding the channel’s reach.`,
    isLast: true,
    relatedLinks: [
      {
        linkId: 1,
        url: "https://www.behance.net/gallery/140401711/Menstrual-Hygiene-Campaign-Social-Media-Whisper-TVF",
        icon: FaBehance,
        backgroundColor: "#053EFF",
        contentColor: "#FFFFFF",
        content: "Behance",
      },
    ],
    images: [
      { imageId: 1, src: "/projects/tvf/image1.png", alt: "tvf_image1" },
      { imageId: 2, src: "/projects/tvf/image2.png", alt: "tvf_image2" },
      { imageId: 3, src: "/projects/tvf/image3.png", alt: "tvf_image3" },
      { imageId: 4, src: "/projects/tvf/image4.png", alt: "tvf_image4" },
    ],
  },
] as const;

export const ABOUT_ME = `With 4.5 years of experience in <b>content marketing, branding,
presentation design, and visual storytelling</b>, I have curated
impactful content for brands like <b>PrepLadder, TVF, and
Unacademy</b>.<br/><br/>
I specialize in <b>corporate presentations, social media content, ad
creatives, video editing, and brand storytelling</b>—transforming
complex ideas into engaging visual narratives that drive results.`;

export const SERVICES = [
  {
    id: 1,
    serviceName: "Product GTM 🚀",
    serviceDescription: `Launching a product is more than just an idea—it’s about executing the right strategy to ensure success. I help businesses craft and implement effective Go-To-Market (GTM) strategies, covering everything from market research and positioning to competitive analysis and launch planning. Whether it’s a new product or an expansion into a new market, I ensure a seamless execution that drives traction, engagement, and revenue growth.`,
  },
  {
    id: 2,
    serviceName: "Marketing Strategies 📊",
    serviceDescription: `I create data-driven marketing strategies that enhance brand visibility, attract the right audience, and drive business growth through targeted campaigns and positioning.`,
  },
  {
    id: 3,
    serviceName: "Growth Marketing 📈",
    serviceDescription: `I leverage data, experimentation, and creative tactics to drive user acquisition, retention, and revenue growth—ensuring scalable and sustainable business success.`,
  },
  {
    id: 4,
    serviceName: "Design Sense 🎨",
    serviceDescription: `I craft visually appealing and user-friendly designs that enhance brand identity, improve user experience, and create a lasting impact.`,
  },
];
