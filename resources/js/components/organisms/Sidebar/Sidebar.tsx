import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import ButtonWithBadge from '@/components/molecules/Button/ButtonWithBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { EachUtils } from '@/lib/EachUtils';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { Link } from '@inertiajs/react';
import { TagsIcon } from 'lucide-react';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
    const { categories } = useCategoryStore();
    const { products } = useProductStore();

    return (
        <div className={`${className} sticky top-20 flex h-full flex-col gap-3`}>
            <AnimatedMotion as="div" duration={1} variantName="slideRight" animate="visible">
                <Card className={`bg-background w-full gap-0 py-0 text-xs shadow-none`}>
                    <CardHeader className="flex px-3 py-4">
                        <CardTitle className="flex items-center justify-between">
                            Category
                            <Link href={route('products.index')}>
                                <CornerPlusBadge>{products.total} Products</CornerPlusBadge>
                            </Link>
                        </CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardContent className="p-1.5">
                        <ScrollArea className="h-[200px] p-0 md:h-[375px]">
                            <EachUtils
                                emptyIcon={TagsIcon}
                                emptyTitle="No category yet"
                                emptyDesc=""
                                of={categories}
                                render={(_category, index) => (
                                    <ButtonWithBadge
                                        key={_category.id}
                                        linkTo={route('products.showByCategory', { slug: _category.slug })}
                                        title={_category.name}
                                        badgeNumber={_category.products_count}
                                        index={index}
                                        active={route().current('products.showByCategory', { slug: _category.slug })}
                                        className="mb-0.5"
                                    />
                                )}
                            />
                        </ScrollArea>
                    </CardContent>
                </Card>
            </AnimatedMotion>

            <AnimatedMotion as="div" delay={0.3} duration={1} variantName="slideRight" animate="visible" viewport={{ once: true }}>
                <Card className={`bg-background w-full gap-0 py-0 text-xs shadow-none`}>
                    <CardHeader className="px-3 py-4">
                        <CardTitle>Price</CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardContent className="p-2">
                        <div className="flex gap-3">
                            <Input placeholder="Min" id="min" className="bg-input border-border shadow" />
                            <Input placeholder="Max" id="max" className="bg-input border-border shadow" />
                        </div>
                    </CardContent>
                </Card>
            </AnimatedMotion>
        </div>
    );
};

export default Sidebar;
