import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AccordionInformation = () => {
    return (
        // <Accordion type="single" collapsible className="bg-card w-full rounded-2xl border px-5">
        <Accordion type="single" collapsible className="flex flex-col gap-6">
            <AccordionItem value="item-1" className="bg-card w-full rounded-2xl border">
                <AccordionTrigger className="p-8">Product Information</AccordionTrigger>
                <AccordionContent className="px-8">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <div className="flex gap-3">
                <div className="w-full">
                    <AccordionItem value="item-2" className="bg-card w-full rounded-2xl border">
                        <AccordionTrigger className="p-8">Size</AccordionTrigger>
                        <AccordionContent className="px-8">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                    </AccordionItem>
                </div>
                <div className="w-full">
                    <AccordionItem value="item-3" className="bg-card w-full rounded-2xl border">
                        <AccordionTrigger className="p-8">Free Shipping & Return</AccordionTrigger>
                        <AccordionContent className="px-8">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                    </AccordionItem>
                </div>
            </div>
        </Accordion>
    );
};

export default AccordionInformation;
