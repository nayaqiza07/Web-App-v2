import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { priceFormat } from '@/lib/utils';
import { OrderDataType } from '@/types';
import { motion } from 'framer-motion';
import { CornerUpLeft, CreditCard, MapPin, ReceiptText, RotateCcw, ShoppingBag, SquareUserRound, TriangleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import InvoiceDrawer from '../Drawer/InvoiceDrawer';
import HoverCardInvoice from '../HoverCard/HoverCardInvoice';
import AnimatedAccordionContent from './AnimatedAccordionContent';

interface AccordionOrdersProps {
    data?: OrderDataType[];
}

const AccordionOrders: React.FC<AccordionOrdersProps> = ({ data = [] }) => {
    const [openItems, setOpenItems] = useState<string>('');

    useEffect(() => {
        if (data.length > 0) {
            setOpenItems(String(data[0].id));
        }
    }, [data]);

    const isMobile = useIsMobile();

    if (data.length === 0) {
        return (
            <div className="flex h-full border">
                <EmptyState icon={ShoppingBag} title="You don't have any orders" btnText="Continue Shopping" />
            </div>
        );
    }

    return (
        <Accordion
            type="single"
            collapsible
            className="h-full w-full rounded-lg"
            // defaultValue={data[0].id}
            value={openItems}
            onValueChange={(val) => setOpenItems(val ?? '')}
        >
            {data
                .filter((data) => Boolean(data?.id))
                .map((dataOrder) => (
                    <AccordionItem
                        key={dataOrder.id}
                        value={String(dataOrder.id)}
                        className="bg-background my-2 rounded-lg border-0 first:mt-0 last:mb-0"
                    >
                        <AccordionTrigger className="w-full p-4 hover:no-underline">
                            <div className="flex w-full cursor-pointer flex-col gap-3 md:items-center lg:flex-row">
                                {isMobile ? (
                                    <InvoiceDrawer trigger={`Order ${dataOrder.code}`} />
                                ) : (
                                    <HoverCardInvoice trigger={`Order ${dataOrder.code}`} />
                                )}

                                <motion.div
                                    className="text-muted-foreground flex flex-1 flex-col justify-end gap-1 text-xs md:flex-row md:gap-5"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                                >
                                    <h5>
                                        Amount: <span className="text-foreground">{priceFormat(dataOrder.total)}</span>
                                    </h5>
                                    <h5>
                                        Products: <span className="text-foreground">{dataOrder.order_items.length}</span>
                                    </h5>
                                    <h5>
                                        Status: <span className="text-[#16A34A]">{dataOrder.order_status}</span>
                                    </h5>
                                </motion.div>
                            </div>
                        </AccordionTrigger>

                        <AnimatedAccordionContent
                            // isOpen={openItems.includes(String(dataOrder.id))}
                            isOpen={openItems === String(dataOrder.id)}
                            className="flex flex-col gap-4 px-4 text-balance"
                        >
                            <Card className="text-muted-foreground grid rounded-md p-4 text-xs md:grid-cols-3">
                                <div className="flex flex-col gap-5">
                                    {/* Delivery Information */}
                                    <div className="flex gap-5">
                                        <MapPin size={15} />
                                        <div>
                                            <h5 className="text-muted-foreground">Delivery</h5>
                                            <p className="text-foreground">
                                                {dataOrder.address.street}, {dataOrder.address.city}, {dataOrder.address.state},{' '}
                                                {dataOrder.address.country}, {dataOrder.address.postal_code}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Recipient Information */}
                                    <div className="flex gap-5">
                                        <SquareUserRound size={15} />
                                        <div className="text-foreground flex flex-col gap-2">
                                            <h5 className="text-muted-foreground">Recipient of the order</h5>
                                            <p>{dataOrder.user.name}</p>
                                            <p>{dataOrder.user.email}</p>
                                            <p>{dataOrder.user.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Information */}
                                <div className="flex gap-5">
                                    <CreditCard size={15} />
                                    <div className="grid w-full grid-cols-2">
                                        <div className="text-muted-foreground flex flex-col gap-2">
                                            <h5>Payment</h5>
                                            <h5>Delivery</h5>
                                            <h5>Total</h5>
                                        </div>
                                        <div className="text-foreground flex flex-col gap-2 text-end">
                                            <p>{priceFormat(dataOrder.subtotal)}</p>
                                            <p>{priceFormat(dataOrder.shipping_cost)}</p>
                                            <p>{priceFormat(dataOrder.total)}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pasca Order Information */}
                                <div className="flex flex-col gap-2">
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
                                </div>
                            </Card>

                            {/* <div className="grid gap-4 lg:grid-cols-2">
                                {dataOrder.order_items.map((_item, index) => (
                                    <Card key={index} className="rounded-md"></Card>
                                ))}
                            </div> */}
                        </AnimatedAccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
    );
};

export default AccordionOrders;
