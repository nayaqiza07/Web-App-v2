import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    className?: string;
}

const ProductCard = ({ className }: ProductCardProps) => {
    return (
        <Card className={`${className} gap-0 overflow-hidden py-0`}>
            <CardContent className="group relative h-[220px] bg-[#4F46E5] p-0">
                <Button
                    size="icon"
                    className="absolute right-3 bottom-3 rounded-full bg-black/30 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/50"
                >
                    <ShoppingCart color="white" />
                </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-3 border-t p-5">
                <CardTitle>Card Title</CardTitle>
                <h5 className="text-xs font-bold">Rp. 1</h5>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
