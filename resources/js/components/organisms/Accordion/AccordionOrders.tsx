import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { CornerUpLeft, CreditCard, MapPin, ReceiptText, RotateCcw, ShoppingBag, SquareUserRound, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import InvoiceDrawer from '../Drawer/InvoiceDrawer';
import HoverCardInvoice from '../HoverCard/HoverCardInvoice';
import AnimatedAccordionContent from './AnimatedAccordionContent';

interface OrderData {
    id: string;
    amount: number | string;
    products: number;
    status: string;
}

interface AccordionOrdersProps {
    data?: OrderData[];
}

const AccordionOrders: React.FC<AccordionOrdersProps> = ({ data = [] }) => {
    const [openItems, setOpenItems] = useState(data[0]?.id ?? '');

    const isMobile = useIsMobile();

    return data.length === 0 ? (
        <div className="flex h-full border">
            <EmptyState icon={ShoppingBag} title="You don't have any orders" btnText="Continue Shopping" />
        </div>
    ) : (
        <Accordion
            type="single"
            collapsible
            className="h-full w-full rounded-lg"
            // defaultValue={data[0].id}
            value={openItems}
            onValueChange={setOpenItems}
        >
            {data
                .filter((data) => Boolean(data?.id))
                .map((dataOrder) => (
                    <AccordionItem key={dataOrder.id} value={dataOrder.id} className="bg-background my-2 rounded-lg border-0 first:mt-0 last:mb-0">
                        <AccordionTrigger className="w-full p-4 hover:no-underline">
                            <div className="flex w-full cursor-pointer flex-col gap-3 md:items-center lg:flex-row">
                                {isMobile ? (
                                    <InvoiceDrawer trigger={`Order #${dataOrder.id}`} />
                                ) : (
                                    <HoverCardInvoice trigger={`Order #${dataOrder.id}`} />
                                )}

                                <motion.div
                                    className="text-muted-foreground flex flex-1 flex-col justify-end gap-1 text-xs md:flex-row md:gap-5"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                                >
                                    <h5>
                                        Amount: <span className="text-foreground">{dataOrder.amount}</span>
                                    </h5>
                                    <h5>
                                        Products: <span className="text-foreground">{dataOrder.products}</span>
                                    </h5>
                                    <h5>
                                        Status: <span className="text-[#16A34A]">{dataOrder.status}</span>
                                    </h5>
                                </motion.div>
                            </div>
                        </AccordionTrigger>

                        <AnimatedAccordionContent isOpen={openItems.includes(dataOrder.id)} className="flex flex-col gap-4 px-4 text-balance">
                            <Card className="text-muted-foreground grid rounded-md p-4 text-xs md:grid-cols-3">
                                <div className="flex flex-col gap-5">
                                    {/* Delivery Information */}
                                    <AnimatedMotion as="div" delay={0.3} duration={1} variantName="fadeIn" className="flex gap-5" animate="visible">
                                        <MapPin size={15} />
                                        <div>
                                            <h5 className="text-muted-foreground">Delivery</h5>
                                            <p className="text-foreground">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </AnimatedMotion>

                                    {/* Recipient Information */}
                                    <AnimatedMotion as="div" delay={0.4} duration={1} variantName="fadeIn" className="flex gap-5" animate="visible">
                                        <SquareUserRound size={15} />
                                        <div className="text-foreground flex flex-col gap-2">
                                            <h5 className="text-muted-foreground">Recipient of the order</h5>
                                            <p>Name</p>
                                            <p>E-mail</p>
                                            <p>Phone</p>
                                        </div>
                                    </AnimatedMotion>
                                </div>

                                {/* Payment Information */}
                                <AnimatedMotion as="div" delay={0.5} duration={1} variantName="fadeIn" className="flex gap-5" animate="visible">
                                    <CreditCard size={15} />
                                    <div className="grid w-full grid-cols-2">
                                        <div className="text-muted-foreground flex flex-col gap-2">
                                            <h5>Payment</h5>
                                            <h5>Delivery</h5>
                                            <h5>Total</h5>
                                        </div>
                                        <div className="text-foreground flex flex-col gap-2 text-end">
                                            <p>90</p>
                                            <p>10</p>
                                            <p>100</p>
                                        </div>
                                    </div>
                                </AnimatedMotion>

                                {/* Pasca Order Information */}
                                <AnimatedMotion
                                    as="div"
                                    delay={0.6}
                                    duration={1}
                                    variantName="fadeIn"
                                    className="flex flex-col gap-2"
                                    animate="visible"
                                >
                                    <div className="flex gap-5">
                                        <ReceiptText size={15} />
                                        <h5>Electronic Check</h5>
                                    </div>
                                    <div className="flex gap-5">
                                        <RotateCcw size={15} />
                                        <h5>Repeat Order</h5>
                                    </div>
                                    <div className="flex gap-5">
                                        <TriangleAlert size={15} />
                                        <h5>There were Problems</h5>
                                    </div>
                                    <div className="flex gap-5">
                                        <CornerUpLeft size={15} />
                                        <h5>Return Products</h5>
                                    </div>
                                </AnimatedMotion>
                            </Card>

                            <div className="grid gap-4 lg:grid-cols-2">Test</div>
                        </AnimatedAccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
    );
};

export default AccordionOrders;
