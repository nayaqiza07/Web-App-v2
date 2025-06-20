import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { motion } from 'framer-motion';

interface HoverCardInvoiceProps {
    trigger: string;
}
const HoverCardInvoice: React.FC<HoverCardInvoiceProps> = ({ trigger }) => {
    return (
        <HoverCard>
            <HoverCardTrigger onClick={(e) => e.stopPropagation()} className="w-fit underline-offset-4 hover:underline">
                <motion.h3 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                    {trigger}
                </motion.h3>
            </HoverCardTrigger>
            <HoverCardContent onClick={(e) => e.stopPropagation()} className="flex flex-col gap-2">
                <div className="flex h-60 items-center justify-center rounded border p-2">
                    <h2>Invoice</h2>
                </div>
                <div className="flex gap-2">
                    <Button variant="link" effect="hoverUnderline" className="w-full">
                        View Invoice
                    </Button>
                    <Button effect="gooeyLeft" gooeyColor="default" className="w-full">
                        Download
                    </Button>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default HoverCardInvoice;
