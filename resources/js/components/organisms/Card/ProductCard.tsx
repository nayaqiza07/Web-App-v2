import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import CustomBadge from '@/components/atoms/Badge/CustomBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { priceFormat, truncateText } from '@/lib/utils';
import { ProductData } from '@/types';
import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    isCarousel?: boolean;
    data: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ isCarousel, data }) => {
    const hasDiscount = () => {
        if (!data.old_price || data.old_price <= data.price) return null;

        return Math.round(((data.old_price - data.price) / data.old_price) * 100);
    };

    const discount = hasDiscount();

    const badges = [discount !== null && { variant: 'discount', label: hasDiscount() + '%' }, { variant: 'new', label: 'NEW' }].filter(
        Boolean,
    ) as Array<{ variant: 'discount' | 'new'; label: string }>;

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
                    duration: 0.2, // juga atur durasi kembali ke normal saat hover keluar
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

                    {/* <CustomBadge variant="new" label={`New`} /> */}

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

                        <CardFooter className="flex flex-col items-start gap-3 border-t p-3 text-xs">
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
                                <CardTitle className="text-card-foreground text-sm">{truncateText(data.name, 18)}</CardTitle>
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
                                className="flex w-full items-end justify-between text-xs font-bold"
                            >
                                <span>{priceFormat(data.price)}</span>
                                <span className="text-muted-foreground text-[9px] line-through">
                                    {data.old_price && data.old_price > 0 && priceFormat(data.old_price)}
                                </span>
                            </AnimatedMotion>
                        </CardFooter>
                    </Card>
                </div>
            </Link>
        </AnimatedMotion>
    );
};

export default ProductCard;
