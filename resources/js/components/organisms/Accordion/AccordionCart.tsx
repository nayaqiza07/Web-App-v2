import CartItem from '@/components/molecules/Cart/CartItem';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import DeliveryAddressForm from '../Form/DeliveryAddressForm';
import ProfileCustomerForm from '../Form/ProfileCustomerForm';

const AccordionCart = () => {
    return (
        <>
            <Accordion type="multiple" className="h-full w-full rounded-xl" defaultValue={['bag', 'profile', 'delivery']}>
                <AccordionItem value="bag" className="bg-card border-border rounded-xl border">
                    <AccordionTrigger className="flex cursor-pointer items-center p-4 hover:no-underline">
                        <h3 className="w-full">Your Bag</h3>
                        <div className={`text-muted-foreground flex w-full justify-end gap-5 text-xs transition-opacity duration-500`}>
                            <h5>
                                Products: <span className="text-foreground">3</span>
                            </h5>
                            <h5>
                                Amount: <span className="text-foreground">180</span>
                            </h5>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col gap-4 px-4 text-balance">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="profile" className="bg-card border-border my-5 rounded-xl border">
                    <AccordionTrigger className="cursor-pointer p-4 hover:no-underline md:flex-row">
                        <h3>Profile Customer</h3>
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col gap-4 px-4 text-balance">
                        <ProfileCustomerForm />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delivery" className="bg-card border-border rounded-xl border last:border-b-1">
                    <AccordionTrigger className="cursor-pointer p-4 hover:no-underline md:flex-row">
                        <h3>Delivery Address</h3>
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col gap-4 px-4 text-balance">
                        <DeliveryAddressForm />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default AccordionCart;
