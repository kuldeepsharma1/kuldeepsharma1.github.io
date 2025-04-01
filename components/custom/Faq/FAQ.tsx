import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/core/accordion';
import { Badge } from "@/components/ui/badge";
import { Plus } from 'lucide-react';


export interface FaqItem {
    question: string;
    answer: string;
}

interface FaqProps {
    faqs: FaqItem[];
    title: string;
    description: string;
}



const Faq: React.FC<FaqProps> = ({ faqs, title, description }) => {
    return (
        <section className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div
                    className="flex flex-col gap-10"

                >
                    <div
                        className="flex text-center justify-center items-center gap-4 flex-col"

                    >
                        <Badge variant="outline">FAQ</Badge>
                        <div className="flex gap-2 flex-col">
                            <h4
                                className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-semibold text-zinc-800 dark:text-zinc-100"

                            >
                                {title}
                            </h4>
                            <p
                                className="text-lg leading-relaxed tracking-tight text-zinc-600 dark:text-zinc-400 max-w-xl text-center"

                            >
                                {description}
                            </p>
                        </div>
                    </div>
                    <div
                        className="max-w-3xl w-full mx-auto"
                    >
                        <Accordion
                            className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700 '
                            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                            variants={{
                                expanded: {
                                    opacity: 1,
                                    scale: 1,
                                },
                                collapsed: {
                                    opacity: 0,
                                    scale: 0.7,
                                },
                            }}
                        >
                            {faqs.map((faq, index) => (
                                <AccordionItem key={`faq-${index}`} value={`item-${index + 1}`} className='py-2'>
                                    <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 group'>
                                        <div className='flex items-center justify-between'>
                                            <div>{faq.question}</div>
                                            <Plus className='h-4 w-4 text-zinc-950 transition-transform duration-200  dark:text-zinc-50' />
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent >
                                        <p className=' text-zinc-500 dark:text-zinc-400'> {faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;