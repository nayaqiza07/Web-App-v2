import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface HoverCardInvoiceProps {
    trigger: string;
}
const HoverCardInvoice: React.FC<HoverCardInvoiceProps> = ({ trigger }) => {
    return (
        <HoverCard>
            <HoverCardTrigger className="w-1/4 underline-offset-4 hover:underline">{trigger}</HoverCardTrigger>
            <HoverCardContent className="flex flex-col gap-2">
                <div className="rounded border p-2">
                    <h2>This is for show Invoice</h2>
                </div>
                <Button effect="gooeyLeft" gooeyColor="default" className="w-full">
                    View Invoice
                </Button>
            </HoverCardContent>
        </HoverCard>
    );
};

export default HoverCardInvoice;
