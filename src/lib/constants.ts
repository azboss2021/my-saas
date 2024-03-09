export const SAAS_NAME = "MySaaS";

export const SAAS_SLOGAN = "Build your SaaS with speed never seen before";

export const SAAS_DESCRIPTION =
  "Give the customers the most concise accurate description of your saas here. Keep it short as well, people have short attention spans nowadays.";

export const SAAS_URL = "mysaas.com";

export const SUPPORT_EMAIL = "calebjwilson14@gmail.com";

export const LOGIN_CALLBACK = "/dashboard";

export const DISCORD_LINK = "";

export const LOGO_LINK = "/dashboard";

export const UPDATE_SUBSCRIPTION_REVALIDATE_PATH = "/plan";

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

export const ANNUAL_DISCOUNT = 0.2;
export const DISCOUNT = 0.5;

type ProductType =
  | "subscription"
  | "credits"
  | "one_time"
  | "physical_product"
  | "digital_product";
export const PRODUCT_TYPE: ProductType = "subscription";

export const SUBSCRIPTION_PLANS = [
  {
    _id: 1,
    name: "Basic",
    description: "Essential features you need to get started",
    price: 8,
    credits: null,
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
    price: 20,
    credits: null,
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

export const INFO_BANNER = {
  show: true,
  content: "🚀 More features on Pro",
  buttonContent: "Go Pro",
  link: "/plan",
};
