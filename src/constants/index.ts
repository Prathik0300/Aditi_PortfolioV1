import { downloadResume } from "@/utils/commonUtils";

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
  {
    displayName: "Skills",
    id: "skills",
    navIndex: 3,
    isCustomHandler: false,
  },
  {
    displayName: "Services",
    id: "services",
    navIndex: 4,
    isCustomHandler: false,
  },
  {
    displayName: "Projects",
    id: "projects",
    navIndex: 5,
    isCustomHandler: false,
  },
  {
    displayName: "Contact",
    id: "contact",
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
    isLast: false,
    images: [
      { imageId: 1, src: "/projects/tvf/image1.png", alt: "tvf_image1" },
      { imageId: 2, src: "/projects/tvf/image2.png", alt: "tvf_image2" },
      { imageId: 3, src: "/projects/tvf/image3.png", alt: "tvf_image3" },
      { imageId: 4, src: "/projects/tvf/image4.png", alt: "tvf_image4" },
    ],
  },
] as const;
