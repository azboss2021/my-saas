import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

// EDIT THESE
const twitterLink = "https://twitter.com/cwilsonfun";
const mailLink = "mailto:calebjwilson14@gmail.com";

// EDIT THESE
const questions = [
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

const HomeFAQ = () => {
  return (
    <section
      id="faq"
      className={`mx-auto flex w-full max-w-7xl flex-col gap-6 px-8 py-20 lg:flex-row lg:py-48`}
    >
      <div className="flex basis-1/2 flex-col items-start gap-2">
        {/* <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2> */}
        <h3 className="title">Frequently Asked Questions</h3>
        <p className="max-w-xl text-xl font-bold">
          Have another question? Contact me on{" "}
          <Link href={twitterLink} target="_blank" className="underline">
            Twitter
          </Link>{" "}
          or by{" "}
          <Link href={mailLink} target="_blank" className="underline">
            email
          </Link>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full basis-1/2">
        {questions.map((question, index) => (
          <AccordionItem
            value={`faq_item_${index}`}
            key={`accordian_question_${index}`}
          >
            <AccordionTrigger className="text-lg font-bold">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-opacity-80">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
export default HomeFAQ;
