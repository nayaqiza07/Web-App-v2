import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { priceFormat, truncateText } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import SkeletonProductCard from '../Skeleton/SkeletonProductCard';

interface ProductCardProps {
    isLoading?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ isLoading = false }) => {
    return isLoading ? (
        <SkeletonProductCard />
    ) : (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
            <Card className="gap-0 overflow-hidden py-0">
                <CardContent className="group relative overflow-hidden p-0">
                    {/* image */}
                    <img
                        src={`/images/image-15.jpg`}
                        alt={`Foto Produk ${`1`}`}
                        // loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                    />

                    {/* overlay button */}
                    <Button
                        size="icon"
                        className="absolute right-3 bottom-3 rounded-full bg-black/60 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/80"
                    >
                        <ShoppingCart color="white" />
                    </Button>
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-3 border-t p-4">
                    <CardTitle className="w-full">{truncateText('Title title title title title title title title', 25)}</CardTitle>
                    <div className="text-muted-foreground flex w-full items-center justify-between text-xs font-bold">
                        <h5>Category</h5>
                        <h5>{priceFormat(1000000)}</h5>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default ProductCard;
