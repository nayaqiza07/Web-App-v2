import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

const ProductCard = () => {
    return (
        <Card className="gap-0 overflow-hidden py-0">
            <CardContent className="h-[220px] bg-[#4F46E5] p-0"></CardContent>
            <CardFooter className="flex flex-col items-start gap-3 border-t p-5">
                <CardTitle className="text-[#666666]">Card Title</CardTitle>
                <h5 className="text-xs font-bold text-[#666666]">Rp. 1</h5>
                <Button size="sm" className="w-full text-xs font-bold">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
