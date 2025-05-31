import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

const ProductCard = () => {
    return (
        <Card className="gap-0 overflow-hidden py-0">
            <CardContent className="group relative h-[220px] bg-[#4F46E5] p-0">
                {/* image */}
                <div
                    className={`h-full w-full bg-[url(/images/image-15.jpg)] bg-cover bg-center transition-transform duration-200 hover:scale-125`}
                ></div>

                {/* overlay button */}
                <Button
                    size="icon"
                    className="absolute right-3 bottom-3 rounded-full bg-black/60 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/80"
                >
                    <ShoppingCart color="white" />
                </Button>
            </CardContent>

            <CardFooter className="bg-card z-10 flex flex-col items-start gap-3 border-t p-5 text-xs">
                <CardTitle>Title</CardTitle>
                <div className="flex w-full items-center justify-between text-xs font-bold">
                    <h5>Category</h5>
                    <h5>Rp. 1</h5>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
