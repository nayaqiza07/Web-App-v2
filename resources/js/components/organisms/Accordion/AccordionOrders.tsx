import CartItem from '@/components/molecules/Cart/CartItem';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { CornerUpLeft, CreditCard, MapPin, ReceiptText, RotateCcw, ShoppingBag, SquareUserRound, TriangleAlert } from 'lucide-react';

interface OrderData {
    id: string;
    amount: number;
    products: number;
    status: string;
}

interface AccordionOrdersProps {
    data: OrderData[];
}

const AccordionOrders = ({ data }: AccordionOrdersProps) => {
    return data.length === 0 ? (
        <div className="flex h-full border">
            <EmptyState icon={<ShoppingBag size={50} />} title="You don't have any orders" btnText="Continue Shopping" />
        </div>
    ) : (
        <Accordion type="single" collapsible className="h-full w-full rounded-lg" defaultValue={data[0].id}>
            {data
                .filter((data) => Boolean(data?.id))
                .map((dataOrder) => (
                    <AccordionItem key={dataOrder.id} value={dataOrder.id} className="bg-background my-2 rounded-lg border-0 first:mt-0 last:mb-0">
                        <AccordionTrigger className="flex cursor-pointer flex-col items-center p-4 hover:no-underline md:flex-row">
                            <h3 className="w-full">Order #{dataOrder.id}</h3>
                            <div className="text-muted-foreground flex w-full flex-col justify-end gap-1 text-xs md:flex-row md:gap-6">
                                <h5>
                                    Amount: <span className="text-foreground">{dataOrder.amount}</span>
                                </h5>
                                <h5>
                                    Products: <span className="text-foreground">{dataOrder.products}</span>
                                </h5>
                                <h5>
                                    Status: <span className="text-[#16A34A]">{dataOrder.status}</span>
                                </h5>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="flex flex-col gap-4 px-4 text-balance">
                            <Card className="text-muted-foreground grid rounded-md p-4 text-xs md:grid-cols-3">
                                <div className="flex flex-col gap-5">
                                    {/* Delivery Information */}
                                    <div className="flex gap-5">
                                        <MapPin size={15} />
                                        <div>
                                            <h5 className="text-muted-foreground">Delivery</h5>
                                            <p className="text-foreground">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>

                                    {/* Recipient Information */}
                                    <div className="flex gap-5">
                                        <SquareUserRound size={15} />
                                        <div className="text-foreground flex flex-col gap-2">
                                            <h5 className="text-muted-foreground">Recipient of the order</h5>
                                            <p>Name</p>
                                            <p>E-mail</p>
                                            <p>Phone</p>
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
                                            <p>90</p>
                                            <p>10</p>
                                            <p>100</p>
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

                            <div className="grid gap-4 lg:grid-cols-2">
                                <CartItem />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
    );
};

export default AccordionOrders;
