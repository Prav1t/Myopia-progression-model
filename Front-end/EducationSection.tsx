import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, HelpCircle } from "lucide-react";

export const EducationSection = () => {
  const faqs = [
    {
      question: "What is myopia and why does it progress?",
      answer:
        "Myopia (nearsightedness) occurs when the eye grows too long, causing distant objects to appear blurry. In children, myopia typically progresses as the eye continues to grow. Factors like genetics, limited outdoor time, and excessive near work can accelerate this progression.",
    },
    {
      question: "What factors influence myopia progression?",
      answer:
        "Key factors include: age of onset (younger onset = faster progression), parental myopia history, time spent outdoors, amount of near work (reading, screens), and ethnicity. Environmental factors can be modified to help slow progression.",
    },
    {
      question: "How accurate are these predictions?",
      answer:
        "This model is based on published research and population studies. While it provides useful estimates, individual progression can vary. Predictions should be used as a guide for discussion with eye care professionals, not as definitive outcomes.",
    },
    {
      question: "What interventions can slow myopia progression?",
      answer:
        "Evidence-based interventions include: low-dose atropine eye drops, orthokeratology (overnight contact lenses), specialized multifocal contact lenses or spectacles, and increased outdoor time (2+ hours daily). Your eye care provider can recommend the best approach.",
    },
    {
      question: "Why is preventing high myopia important?",
      answer:
        "High myopia (> -6.00 D) significantly increases the risk of sight-threatening conditions including retinal detachment, myopic maculopathy, glaucoma, and cataracts. Slowing progression can substantially reduce these lifetime risks.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground mb-4 shadow-soft">
            <BookOpen className="h-4 w-4 text-accent" />
            <span>Understanding Myopia</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about myopia progression and how to interpret your results
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-accent" />
                Common Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-accent transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
