import CustomBadge from '@/components/atoms/Badge/CustomBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useCartActions } from '@/hooks/useCartActions';
import { cn, priceFormat, truncateText } from '@/lib/utils';
import { useQuantityButtonStore } from '@/stores/useQuantityButtonStore';
import { ProductData } from '@/types';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ShoppingCart, TicketPercentIcon } from 'lucide-react';

interface ProductCardProps {
    isCarousel?: boolean;
    data: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ isCarousel, data }) => {
    const { quantity } = useQuantityButtonStore();

    const { handleAddToCart } = useCartActions();

    const badges = [
        data.discount_percentage && { variant: 'discount', label: '- ' + data.discount_percentage + '%' },
        data.is_new && { variant: 'new', label: 'NEW' },
    ].filter(Boolean) as Array<{ variant: 'discount' | 'new'; label: string }>;

    const styleDicsountPrice =
        'before:animate-shine relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat background-position_0s_ease';

    return (
        <motion.article
            layout
            initial={isCarousel ? false : { x: 100, opacity: 0 }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            transition={{ duration: 1 }}
            className="h-fit"
            viewport={{ once: true }}
        >
            <Link href={route('products.show', { slug: data.slug })} prefetch>
                <div className="relative">
                    <div className="absolute top-3 -left-[5px] z-10">
                        {badges.map((badge, index) => (
                            <CustomBadge key={index} variant={badge.variant} label={badge.label} />
                        ))}
                    </div>

                    {data.discount_percentage && (
                        <div className="absolute bottom-3 -left-[5px] z-10">
                            <div className="flex h-fit w-fit flex-col text-xs font-bold text-white">
                                <span className="size-[5px] rounded-tl-full bg-[#8e1a29]"></span>
                                <span
                                    className={cn(
                                        `bg-destructive flex items-center gap-1 rounded-tr-4xl rounded-br-4xl rounded-bl-3xl px-4.5 py-[2px]`,
                                        styleDicsountPrice,
                                    )}
                                >
                                    <TicketPercentIcon size={16} /> {priceFormat(data.price)}
                                </span>
                            </div>
                        </div>
                    )}

                    <Card className="gap-0 overflow-hidden py-0">
                        <CardContent className="group relative h-[150px] overflow-hidden p-0">
                            {/* image */}

                            <img
                                src={`/storage/${data.thumbnail}`}
                                alt={data.name}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                            />

                            {/* overlay button */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        size="icon"
                                        onClick={(e) => handleAddToCart(e, data, quantity)}
                                        className="absolute right-3 bottom-3 rounded-full bg-black/60 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/80"
                                    >
                                        <ShoppingCart color="white" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Add to cart</TooltipContent>
                            </Tooltip>
                        </CardContent>

                        <CardFooter className="flex min-h-25 flex-col items-start justify-between border-t p-3 text-xs">
                            <motion.h1
                                layout
                                initial={isCarousel ? false : { opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="w-full"
                                viewport={{ once: true }}
                            >
                                <CardTitle className="text-card-foreground text-sm">{truncateText(data.name, 17)}</CardTitle>
                                <p className="text-muted-foreground">{data?.category?.name}</p>
                            </motion.h1>
                            <motion.h1
                                layout
                                initial={isCarousel ? false : { opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="flex w-full items-end justify-between text-xs font-semibold"
                                viewport={{ once: true }}
                            >
                                {!data.discount_percentage && <span>{priceFormat(data.price)}</span>}
                            </motion.h1>
                        </CardFooter>
                    </Card>
                </div>
            </Link>
        </motion.article>
    );
};

export default ProductCard;

export const SkeletonProductCard = () => {
    return (
        <Skeleton className="flex h-fit flex-col rounded-xl">
            <Skeleton className="relative h-[150px] w-full rounded-t-xl rounded-b-none">
                <Skeleton className="absolute right-3 bottom-3 size-8 rounded-full" />
            </Skeleton>

            <div className="flex flex-col gap-3 p-5">
                <Skeleton className="h-4 w-full rounded-xl" />
                <div className="flex justify-between">
                    <Skeleton className="h-4 w-1/3 rounded-xl" />
                </div>
            </div>
        </Skeleton>
    );
};
