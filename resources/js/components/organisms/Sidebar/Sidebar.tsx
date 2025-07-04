import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import ButtonWithBadge from '@/components/molecules/Button/ButtonWithBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useCategoryStore } from '@/stores/useCategoryStore';
import SkeletonSidebar from '../Skeleton/SkeletonSidebar';

interface SidebarProps {
    isLoading?: boolean;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isLoading = false, className = '' }) => {
    const { categories } = useCategoryStore();

    console.log(categories);

    return isLoading ? (
        <SkeletonSidebar />
    ) : (
        <div className={`${className} sticky top-20 flex h-full flex-col gap-3`}>
            <AnimatedMotion as="div" duration={1} variantName="slideRight" animate="visible">
                <Card className={`bg-background w-full gap-0 py-0 text-xs`}>
                    <CardHeader className="px-3 py-4">
                        <CardTitle>Category</CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardContent className="p-1">
                        <ScrollArea className="h-[200px] p-2 md:h-[375px]">
                            {categories.length > 0 &&
                                categories.map((category, index) => (
                                    <ButtonWithBadge
                                        key={index}
                                        linkTo={route('products.showByCategory', { slug: category.slug })}
                                        title={category.name}
                                        badgeNumber={index + 1}
                                        index={index}
                                    />
                                ))}
                        </ScrollArea>
                    </CardContent>
                </Card>
            </AnimatedMotion>

            <AnimatedMotion as="div" delay={0.3} duration={1} variantName="slideRight" whileInView="visible" viewport={{ once: true }}>
                <Card className={`bg-background w-full gap-0 py-0 text-xs`}>
                    <CardHeader className="px-3 py-4">
                        <CardTitle>Price</CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardContent className="p-2">
                        <div className="flex gap-3">
                            <Input placeholder="Min" id="min" className="bg-accent border-border" />
                            <Input placeholder="Max" id="max" className="bg-accent border-border" />
                        </div>
                    </CardContent>
                </Card>
            </AnimatedMotion>
        </div>
    );
};

export default Sidebar;
