import CornerPlusBox from '@/components/atoms/Box/CornerPlusBox';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Faq } from '@/types';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import SkeletonFaq from '../Skeleton/SkeletonFaq';
import AnimatedAccordionContent from './AnimatedAccordionContent';

interface FaqAccordionProps {
    isLoading?: boolean;
    data?: Faq[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ data = [], isLoading = false }) => {
    const [openItems, setOpenItems] = useState<string>(String(data[0]?.id ?? ''));

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
                                        <AccordionItem value={String(data.id)} className="border-b-0">
                                            <AccordionTrigger className="hover:bg-accent z-10 px-2 hover:no-underline">
                                                {data.question}
                                            </AccordionTrigger>
                                            <AnimatedAccordionContent isOpen={openItems === String(data.id)} className="px-2">
                                                <p
                                                    className="prose dark:prose-invert text-muted-foreground max-w-none text-sm"
                                                    dangerouslySetInnerHTML={{ __html: data.answer ?? '' }}
                                                />
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
