import CornerPlusBox from '@/components/atoms/Box/CornerPlusBox';
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
        <div className="mx-auto my-10 w-4/5 md:w-3/4">
            {isLoading ? (
                <SkeletonFaq />
            ) : (
                <>
                    <div className="mb-10 flex flex-col items-center justify-center gap-2 text-center text-xs">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="text-xl"
                        >
                            Frequently asked questions
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="text-muted-foreground"
                        >
                            These are the most commonly asked questions about us. Can't find what you're looking for? Chat to our friendly team!
                        </motion.div>
                    </div>

                    <CornerPlusBox>
                        <Accordion type="single" collapsible value={openItems} onValueChange={setOpenItems}>
                            {data
                                .filter((data) => Boolean(data?.id))
                                .map((data) => (
                                    <motion.div
                                        key={data.id}
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                                    >
                                        <AccordionItem value={data.id} className="border-b-0">
                                            <AccordionTrigger className="hover:bg-accent z-10 px-2 hover:no-underline">{data.title}</AccordionTrigger>
                                            <AnimatedAccordionContent isOpen={openItems.includes(data.id)} className="text-muted-foreground px-2">
                                                {data.body}
                                            </AnimatedAccordionContent>
                                        </AccordionItem>
                                    </motion.div>
                                ))}
                        </Accordion>
                    </CornerPlusBox>
                </>
            )}
        </div>
    );
};

export default FaqAccordion;
