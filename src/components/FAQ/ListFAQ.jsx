import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

//Import data
import { listFAQ } from "../../data/infoSGM";

export default function ListFAQ() {
  return (
    <Accordion variant="bordered">
      {listFAQ.map((FAQ, index) => {
        return (
          <AccordionItem
            key={index}
            aria-label={FAQ.question}
            title={FAQ.question}
          >
            {FAQ.answer}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
