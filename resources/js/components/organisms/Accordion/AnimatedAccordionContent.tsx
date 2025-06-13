import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedAccordionContentProps {
    isOpen: boolean;
    children: ReactNode;
    className?: string;
}

const AnimatedAccordionContent = ({ isOpen, children, className }: AnimatedAccordionContentProps) => {
    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="accordion-content"
                    initial="collapsed"
                    animate="open"
                    layout
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={cn('overflow-hidden text-sm')}
                >
                    <div className={cn('pt-0 pb-4', className)}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedAccordionContent;
