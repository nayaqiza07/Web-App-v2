import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { priceFormat } from '@/lib/utils';
import { useCartStore } from '@/stores/useCartStore';
import { motion } from 'framer-motion';

const SummaryCartCard = () => {
    const { totalPrice } = useCartStore();

    return (
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <Card className="sticky top-20 hidden h-fit p-4 text-xs md:flex">
                <CardHeader className="p-0 text-base">Summary</CardHeader>
                <CardContent className="text-muted-foreground h-full p-0">
                    <p className="flex justify-between">
                        Sub Total <span className="text-end">{priceFormat(totalPrice())}</span>
                    </p>
                    <p className="flex justify-between">
                        Shipping <span className="text-end">{priceFormat(totalPrice())}</span>
                    </p>
                    <Separator className="my-5" />
                    <p className="text-foreground flex justify-between">
                        Total <span className="text-end">{priceFormat(totalPrice())}</span>
                    </p>
                </CardContent>
                <CardFooter className="mt-auto p-0">
                    <Button effect="shine" className="w-full">
                        Checkout
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default SummaryCartCard;
