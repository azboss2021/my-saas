import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const subtitle = "Not enjoying the competitors?";
const good = {
  title: "With MySaaS",
  features: [
    "Good feature 1",
    "Good feature 2",
    "Good feature 3",
    "Good feature 4",
    "Good feature 5",
  ],
};
const bad = {
  title: "Without MySaaS",
  features: [
    "Bad feature 1",
    "Bad feature 2",
    "Bad feature 3",
    "Bad feature 4",
    "Bad feature 5",
  ],
};

const HomeSideBySide = () => {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-16 p-8 py-24 lg:gap-24 lg:py-48">
      <div className="mx-auto flex flex-col gap-2">
        {/* <h3 className="title">Compare</h3> */}
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex basis-1/2 flex-col gap-3 rounded-lg border border-red-500 bg-red-50 p-6 dark:bg-red-950">
          <h3 className="text-2xl font-bold">{good.title}</h3>
          {bad.features.map((feature, index) => (
            <div
              key={`good_feature_${index}`}
              className="flex items-center gap-2 text-lg"
            >
              <FaCircleXmark className="text-red-500" /> {feature}
            </div>
          ))}
        </div>
        <div className="flex basis-1/2 flex-col gap-3 rounded-lg border border-green-500 bg-green-50 p-6 dark:bg-green-950">
          <h3 className="text-2xl font-extrabold">{good.title}</h3>
          {good.features.map((feature, index) => (
            <div
              key={`good_feature_${index}`}
              className="flex items-center gap-2 text-lg"
            >
              <FaCheckCircle className="text-green-500" /> {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomeSideBySide;
