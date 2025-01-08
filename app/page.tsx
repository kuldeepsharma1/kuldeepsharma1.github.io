import Image from "next/image";
import { RocketIcon } from "@radix-ui/react-icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
// jsx.d.ts
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-center">Welcome to Kuldeepsharma Homes</h1>
      </div>


      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>


      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
      <Image
        src="/assets/images/kuldeep.jpg"
        alt="Description of the image"
        width={500}
        height={300}
        className="rounded-full "
      />
      </div>
    </main>


  );
}
