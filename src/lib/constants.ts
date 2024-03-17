export const SAAS_NAME = "MySaaS";

export const SAAS_SLOGAN = "Build your SaaS with speed never seen before";

export const SAAS_DESCRIPTION =
  "Give the customers the most concise accurate description of your saas here. Keep it short as well, people have short attention spans nowadays.";

export const SAAS_URL = "mysaas.com";

export const SAAS_AUTHOR = "Caleb Wilson";

export const SUPPORT_EMAIL = "cwilsonfun@gmail.com";

export const LOGIN_CALLBACK = "/dashboard";

export const DISCORD_LINK = "";

export const LOGO_LINK = "/dashboard";

export const NAVBAR_BADGE_LINK = "/plan";

export const UPDATE_SUBSCRIPTION_REVALIDATE_PATH = "/plan";

export const MAIL_SUBSCRIBE_DELAY_MS = 120000;

export const SIDE_BY_SIDE_GOOD = {
  title: `With ${SAAS_NAME}`,
  features: [
    "Good feature 1",
    "Good feature 2",
    "Good feature 3",
    "Good feature 4",
    "Good feature 5",
  ],
};

export const SIDE_BY_SIDE_BAD = {
  title: `Without ${SAAS_NAME}`,
  features: [
    "Bad feature 1",
    "Bad feature 2",
    "Bad feature 3",
    "Bad feature 4",
    "Bad feature 5",
  ],
};

export const DEMO = {
  videoLink: "https://www.youtube.com/embed/GyJPzwM__v4?si=1FbXhbPuA8qh5mzh",
  title: "Demo",
  subtitle: "Covers Everything You Need To Know.",
};

export const MAILING_LIST = {
  title: "Join the mailing list",
  description:
    "Receive the latest news about the best things happeneing every Saturday.",
};

export const ANNUAL_DISCOUNT = 0;
export const DISCOUNT = 0.1;

export const PRICE_HIERARCHY = ["Free", "Basic", "Pro"];

type ProductType =
  | "subscription"
  | "credits"
  | "one_time"
  | "physical_product"
  | "digital_product";
export const PRODUCT_TYPE: ProductType = "subscription";

export const ONE_TIME_PLAN = {
  _id: 1,
  name: "Pro",
  description: "All you need to get started.",
  price: 1999,
  bestChoice: false,
  useBadge: true,
  inclusions: [
    {
      label: "Feature 1",
      isIncluded: true,
    },
    {
      label: "Feature 2",
      isIncluded: true,
    },
    {
      label: "Feature 3",
      isIncluded: true,
    },
    {
      label: "Feature 4",
      isIncluded: true,
    },
  ],
};

export const CREDIT_PLANS = [
  {
    _id: 1,
    name: "Some Credits",
    description: "All you need to get started.",
    price: 1500,
    credits: 1000,
    bestChoice: false,
    useBadge: false,
    inclusions: [
      {
        label: "Feature 1",
        isIncluded: true,
      },
      {
        label: "Feature 2",
        isIncluded: true,
      },
      {
        label: "Feature 3",
        isIncluded: true,
      },
      {
        label: "Feature 4",
        isIncluded: true,
      },
    ],
    buttonExtra: "Do this now!",
  },
  {
    _id: 1,
    name: "More Credits",
    description: "For the people who want more",
    price: 3000,
    credits: 5000,
    bestChoice: false,
    useBadge: false,
    inclusions: [
      {
        label: "Feature 1",
        isIncluded: true,
      },
      {
        label: "Feature 2",
        isIncluded: true,
      },
      {
        label: "Feature 3",
        isIncluded: true,
      },
      {
        label: "Feature 4",
        isIncluded: true,
      },
    ],
    buttonExtra: "Do this now!",
  },
];

export const SUBSCRIPTION_PLANS = [
  {
    _id: 1,
    name: "Basic",
    description: "Essential features you need to get started",
    price: 800,
    bestChoice: false,
    useBadge: false,
    inclusions: [
      {
        label: "Feature 1",
        isIncluded: true,
      },
      {
        label: "Feature 2",
        isIncluded: true,
      },
      {
        label: "Feature 3",
        isIncluded: false,
      },
      {
        label: "Feature 4",
        isIncluded: false,
      },
    ],
    buttonExtra: "Do this now!",
  },
  {
    _id: 2,
    name: "Pro",
    description: "Essential features you need to get started",
    price: 2000,
    bestChoice: true,
    useBadge: false,
    inclusions: [
      {
        label: "Feature 1",
        isIncluded: true,
      },
      {
        label: "Feature 2",
        isIncluded: true,
      },
      {
        label: "Feature 3",
        isIncluded: true,
      },
      {
        label: "Feature 4",
        isIncluded: true,
      },
    ],
    buttonExtra: "Do this now!",
  },
];

export const BACK_BUTTON_GOTO = "/dashboard";

export const PRICING_SUBTITLE =
  "Affordable Pricing For The Best SaaS You Can Get";

export const INFO_BANNER_SUBSCRIPTION = {
  show: true,
  content: "More features on Pro",
  buttonContent: "Go Pro",
  link: "/plan",
};

export const INFO_BANNER_CREDITS = {
  show: true,
  content: "Out of credits?",
  buttonContent: "Get More",
  link: "/plan",
};

export const FAQ_LINKS = {
  twitter: "",
  mailLink: "mailto:cwilsonfun@gmail.com",
};

export const FAQ_QUESTIONS = [
  {
    question: "What is the question?",
    answer: "This is the answer to your question 1!",
  },
  {
    question: "What is the question?",
    answer: "This is the answer to your question 2!",
  },
  {
    question: "What is the question?",
    answer: "This is the answer to your question 3!",
  },
  {
    question: "What is the question?",
    answer: "This is the answer to your question 4!",
  },
  {
    question: "What is the question?",
    answer: "This is the answer to your question 5!",
  },
  {
    question: "What is the question?",
    answer: "This is the answer to your question 6!",
  },
  {
    question: "What is the question?",
    answer: "This is the answer to your question 7!",
  },
  {
    question: "What is the question?",
    answer: "This is the answer to your question 8!",
  },
];
