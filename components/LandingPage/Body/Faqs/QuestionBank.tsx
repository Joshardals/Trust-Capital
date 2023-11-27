import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { QuestionProps } from "@/typings";

const QuestionBank = ({ item, question, answer }: QuestionProps) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value={`item-${item}`}>
          <AccordionTrigger className="font-bold">
            {question}
          </AccordionTrigger>
          <AccordionContent>
            {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QuestionBank;
