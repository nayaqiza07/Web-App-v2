import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import SkeletonFaq from '../Skeleton/SkeletonFaq';
import AnimatedAccordionContent from './AnimatedAccordionContent';

type DataType = {
    id: string;
    title: string;
    body: string;
};

interface FaqAccordionProps {
    isLoading?: boolean;
    data?: DataType[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ data = [], isLoading = false }) => {
    const [openItems, setOpenItems] = useState(data[0]?.id ?? '');

    return (
        <div className="mx-auto my-10 w-3/4">
            {isLoading ? (
                <SkeletonFaq />
            ) : (
                <>
                    <div className="mb-10 flex flex-col items-center justify-center gap-2 text-center text-xs">
                        <AnimatedMotion as="h1" delay={0.3} duration={1} variantName="fadeIn" className="text-xl">
                            Frequently asked questions
                        </AnimatedMotion>
                        <AnimatedMotion as="p" delay={0.5} duration={1} variantName="fadeIn" className="text-muted-foreground">
                            These are the most commonly asked questions about us. Can't find what you're looking for? Chat to our friendly team!
                        </AnimatedMotion>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="bg-border/10 relative w-full p-4"
                    >
                        <span className="border-border pointer-events-none absolute inset-0 border"></span>

                        <Accordion type="single" collapsible value={openItems} onValueChange={setOpenItems}>
                            {data
                                .filter((data) => Boolean(data?.id))
                                .map((data) => (
                                    <AccordionItem key={data.id} value={data.id} className="border-b-0">
                                        <AccordionTrigger className="z-10">{data.title}</AccordionTrigger>
                                        <AnimatedAccordionContent isOpen={openItems.includes(data.id)} className="text-muted-foreground">
                                            {data.body}
                                        </AnimatedAccordionContent>
                                    </AccordionItem>
                                ))}
                        </Accordion>

                        <svg viewBox="0 0 100 100" className="fill-border absolute top-[-50px] left-[-50px] h-[100px] w-[100px]">
                            <path d="M50 0h1v50h50v1h-50v50h-1v-50H0v-1h50V0z" />
                        </svg>
                        <svg viewBox="0 0 100 100" className="fill-border absolute top-[-50px] right-[-49px] h-[100px] w-[100px]">
                            <path d="M50 0h1v50h50v1h-50v50h-1v-50H0v-1h50V0z" />
                        </svg>
                        <svg viewBox="0 0 100 100" className="fill-border absolute bottom-[-49px] left-[-50px] h-[100px] w-[100px]">
                            <path d="M50 0h1v50h50v1h-50v50h-1v-50H0v-1h50V0z" />
                        </svg>
                        <svg viewBox="0 0 100 100" className="fill-border absolute right-[-49px] bottom-[-49px] h-[100px] w-[100px]">
                            <path d="M50 0h1v50h50v1h-50v50h-1v-50H0v-1h50V0z" />
                        </svg>
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default FaqAccordion;
