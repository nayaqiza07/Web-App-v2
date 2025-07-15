import CartItem from '@/components/molecules/Cart/CartItem';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { priceFormat } from '@/lib/utils';
import { useCartStore } from '@/stores/useCartStore';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBagIcon } from 'lucide-react';
import { useState } from 'react';
import DeliveryAddressForm from '../Form/DeliveryAddressForm';
import ProfileCustomerForm from '../Form/ProfileCustomerForm';
import AnimatedAccordionContent from './AnimatedAccordionContent';

const AccordionCart = () => {
    const [openItems, setOpenItems] = useState<string[]>(['bag', 'profile', 'delivery']);

    const { items, totalItems, totalPrice, removeItem } = useCartStore();

    return (
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
            <Accordion type="multiple" className="h-full w-full rounded-xl" value={openItems} onValueChange={setOpenItems}>
                <AccordionItem value="bag" className="bg-card border-border rounded-xl border">
                    <AccordionTrigger className="flex cursor-pointer items-center p-4 hover:no-underline">
                        <motion.h3
                            className="w-full"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            Your Bag
                        </motion.h3>
                        <motion.div
                            className="text-muted-foreground flex w-full justify-end gap-5 text-xs"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                        >
                            <h5>
                                Products: <span className="text-foreground">{totalItems() ?? 0}</span>
                            </h5>
                            <h5>
                                Amount: <span className="text-foreground">{priceFormat(totalPrice())}</span>
                            </h5>
                        </motion.div>
                    </AccordionTrigger>

                    <AnimatedAccordionContent isOpen={openItems.includes('bag')} className="flex flex-col gap-4 px-4 text-balance">
                        {items.length === 0 ? (
                            <EmptyState
                                icon={<ShoppingBagIcon size={50} />}
                                title="Your Cart Is Empty"
                                btnText="Continue Shopping"
                                btnLink={route('products.index')}
                            />
                        ) : (
                            <AnimatePresence mode="popLayout">
                                {items.map((data) => (
                                    <CartItem key={data.id} data={data} onDelete={removeItem} />
                                ))}
                            </AnimatePresence>
                        )}
                    </AnimatedAccordionContent>
                </AccordionItem>

                <AccordionItem value="profile" className="bg-card border-border my-5 rounded-xl border">
                    <AccordionTrigger className="cursor-pointer p-4 hover:no-underline md:flex-row">
                        <motion.h3
                            className="w-full"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            Profile Customer
                        </motion.h3>
                    </AccordionTrigger>

                    <AnimatedAccordionContent isOpen={openItems.includes('profile')} className="flex flex-col gap-4 px-4 text-balance">
                        <ProfileCustomerForm />
                    </AnimatedAccordionContent>
                </AccordionItem>

                <AccordionItem value="delivery" className="bg-card border-border rounded-xl border last:border-b-1">
                    <AccordionTrigger className="cursor-pointer p-4 hover:no-underline md:flex-row">
                        <motion.h3
                            className="w-full"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            Delivery Address
                        </motion.h3>
                    </AccordionTrigger>

                    <AnimatedAccordionContent isOpen={openItems.includes('delivery')} className="flex flex-col gap-4 px-4 text-balance">
                        <DeliveryAddressForm />
                    </AnimatedAccordionContent>
                </AccordionItem>
            </Accordion>
        </motion.div>
    );
};

export default AccordionCart;
