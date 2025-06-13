import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

const SummaryCartCard = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
            <Card className="sticky top-20 hidden h-fit p-4 text-xs md:flex">
                <CardHeader className="p-0 text-base">Summary</CardHeader>
                <CardContent className="text-muted-foreground h-full p-0">
                    <p className="flex justify-between">
                        Sub Total <span className="text-end">90</span>
                    </p>
                    <p className="flex justify-between">
                        Shipping <span className="text-end">10</span>
                    </p>
                    <Separator className="my-5" />
                    <p className="text-foreground flex justify-between">
                        Total <span className="text-end">100</span>
                    </p>
                </CardContent>
                <CardFooter className="mt-auto p-0">
                    <Button className="w-full">Checkout</Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default SummaryCartCard;
