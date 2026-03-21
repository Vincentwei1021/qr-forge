"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section id="faq" className="bg-muted/50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <Accordion className="w-full">
          {items.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium py-5 sm:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
