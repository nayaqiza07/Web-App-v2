import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import QuantityButton from '../Button/QuantityButton';

const CartItem = () => {
    return (
        <Card className="gap-0 rounded-md p-0 text-xs shadow-none">
            <CardHeader className="flex flex-row items-center justify-between gap-5 px-3 py-2">
                <div className="flex items-center gap-5">
                    <img
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="cart-image-product"
                        className="h-[44px] w-[60px] rounded"
                    />
                    <h2>Armchair</h2>
                </div>
                <div className="hidden items-center gap-5 md:flex">
                    <span>90</span>
                    <QuantityButton />
                    <span>90</span>
                </div>
            </CardHeader>
            <Separator className="md:hidden" />
            <CardFooter className="flex items-center justify-between px-3 py-2 md:hidden">
                <span>90</span>
                <QuantityButton />
                <span>90</span>
            </CardFooter>
        </Card>
    );
};

export default CartItem;
