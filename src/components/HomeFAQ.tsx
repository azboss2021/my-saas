"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsVisible } from "@/hooks/hooks";
import Link from "next/link";
import { useRef } from "react";

// EDIT THESE
const twitterLink = "https://twitter.com/cwilsondev";
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
];

const HomeFAQ = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible({ ref: ref });

  return (
    <section
      id="faq"
      className={`mx-auto max-w-7xl w-full py-20 px-8 lg:py-24 flex flex-col lg:flex-row gap-6 transition-all duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <div className="flex flex-col gap-2 basis-1/2">
        <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2>
        <p className="text-primary/80">
          Have another question? Contact me on{" "}
          <Link
            href={twitterLink}
            target="_blank"
            className="underline text-primary"
          >
            Twitter
          </Link>{" "}
          or by{" "}
          <Link
            href={mailLink}
            target="_blank"
            className="underline text-primary"
          >
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
            <AccordionTrigger className="font-bold text-lg">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="text-primary/80 font-semibold">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
export default HomeFAQ;
