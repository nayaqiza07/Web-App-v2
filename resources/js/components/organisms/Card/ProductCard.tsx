import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import CustomBadge from '@/components/atoms/Badge/CustomBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { cn, priceFormat, truncateText } from '@/lib/utils';
import { ProductData } from '@/types';
import { Link } from '@inertiajs/react';
import { ShoppingCart, TicketPercentIcon } from 'lucide-react';

interface ProductCardProps {
    isCarousel?: boolean;
    data: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ isCarousel, data }) => {
    const badges = [
        data.discount_percentage && { variant: 'discount', label: '- ' + data.discount_percentage + '%' },
        data.is_new && { variant: 'new', label: 'NEW' },
    ].filter(Boolean) as Array<{ variant: 'discount' | 'new'; label: string }>;

    const styleDicsountPrice =
        'before:animate-shine relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat background-position_0s_ease';

    return (
        <AnimatedMotion
            as="div"
            duration={1}
            variantName="slideLeft"
            initial={!isCarousel ? 'hidden' : false}
            whileInView="visible"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            animate={{
                scale: 1,
                transition: {
                    duration: 0.2,
                },
            }}
            className="h-fit"
            viewport={{ once: true }}
        >
            <Link href={route('products.show', { slug: data.slug })}>
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
                                src={data.thumbnail}
                                alt={`Foto Produk ${data.name}`}
                                // loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                            />

                            {/* overlay button */}
                            <Button
                                size="icon"
                                onClick={(e) => {
                                    e.stopPropagation(); // cegah bubbling ke parent
                                    e.preventDefault(); // cegah default behavior (jika dalam <a>)
                                    console.log('Button clicked');
                                }}
                                className="absolute right-3 bottom-3 rounded-full bg-black/60 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/80"
                            >
                                <ShoppingCart color="white" />
                            </Button>
                        </CardContent>

                        <CardFooter className="flex min-h-25 flex-col items-start justify-between border-t p-3 text-xs">
                            <AnimatedMotion
                                as="h1"
                                initial={!isCarousel ? 'hidden' : false}
                                delay={0.3}
                                duration={1}
                                variantName="fadeIn"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="w-full"
                            >
                                <CardTitle className="text-card-foreground text-sm">{truncateText(data.name, 17)}</CardTitle>
                                <p className="text-muted-foreground">{data?.category?.name}</p>
                            </AnimatedMotion>
                            <AnimatedMotion
                                as="div"
                                initial={!isCarousel ? 'hidden' : false}
                                delay={0.4}
                                duration={1}
                                whileInView="visible"
                                viewport={{ once: true }}
                                variantName="fadeIn"
                                className="flex w-full items-end justify-between text-xs font-semibold"
                            >
                                {/* {data.discount_percentage ? (
                                    <Badge variant="destructiveTransparent" className="border-destructive/10">
                                        <TicketPercentIcon /> {priceFormat(data.price)}
                                    </Badge>
                                ) : (
                                    <span>{priceFormat(data.price)}</span>
                                    )} */}
                                {!data.discount_percentage && <span>{priceFormat(data.price)}</span>}
                                {/* <span className="text-muted-foreground text-[9px] line-through">
                                    {data.old_price && data.old_price > 0 && priceFormat(data.old_price)}
                                </span> */}
                            </AnimatedMotion>
                        </CardFooter>
                    </Card>
                </div>
            </Link>
        </AnimatedMotion>
    );
};

export default ProductCard;
