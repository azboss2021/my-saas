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
  const ref = useRef(null);
  const isVisible = useIsVisible({ ref: ref });

  return (
    <section
      id="faq"
      className={`mx-auto flex w-full max-w-7xl flex-col gap-6 px-8 py-20 transition-all duration-700 ease-in-out lg:flex-row lg:py-48 ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <div className="flex basis-1/2 flex-col gap-2">
        <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2>
        <p className="text-primary/80">
          Have another question? Contact me on{" "}
          <Link
            href={twitterLink}
            target="_blank"
            className="text-primary underline"
          >
            Twitter
          </Link>{" "}
          or by{" "}
          <Link
            href={mailLink}
            target="_blank"
            className="text-primary underline"
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
            <AccordionTrigger className="text-lg font-bold">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-primary/80">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
export default HomeFAQ;
