import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import ReviewContent from '@/components/molecules/TextContent/ReviewContent';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Product } from '@/types';
import { FileTextIcon } from 'lucide-react';
import SkeletonTabsInformation from '../Skeleton/SkeletonTabsInformation';

interface TabsInformationProps {
    isLoading?: boolean;
    PRODUCT: Product | null;
}

const TabsInformation: React.FC<TabsInformationProps> = ({ isLoading = false, PRODUCT }) => {
    const styleTabTrigger =
        'data-[state=active]:border-border dark:data-[state=active]:bg-card data-[state=active]:bg-card data-[state=active]:text-foreground text-xs text-muted-foreground font-bold data-[state=active]:shadow-none';

    return isLoading ? (
        <SkeletonTabsInformation />
    ) : (
        <AnimatedMotion as="div" delay={0.3} duration={1} variantName="slideLeft" whileInView="visible" viewport={{ once: true }}>
            <Tabs defaultValue="information" className="w-full text-xs font-bold">
                <TabsList className="bg-transparent">
                    <TabsTrigger value="information" className={`${styleTabTrigger}`}>
                        Product Information
                    </TabsTrigger>
                    <TabsTrigger value="materials" className={`${styleTabTrigger}`}>
                        Materials
                    </TabsTrigger>
                    <TabsTrigger value="shipping" className={`${styleTabTrigger}`}>
                        Shipping
                    </TabsTrigger>
                    <TabsTrigger value="reviews" className={`${styleTabTrigger}`}>
                        Reviews
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="information" className="flex flex-col gap-3 text-xs font-bold lg:flex-row">
                    <Card className="text-muted-foreground w-full bg-transparent px-1 py-4">
                        <ScrollArea className="h-50 px-3">
                            <h1 className="text-foreground mb-5 text-sm">Information</h1>
                            <p>{PRODUCT?.information}</p>
                        </ScrollArea>
                    </Card>

                    <Card className="text-muted-foreground w-full px-1 py-4">
                        <ScrollArea className="h-50 px-3">
                            <h1 className="text-foreground mb-5 text-sm">Dimension</h1>

                            {PRODUCT && PRODUCT.dimensions ? (
                                <div className="grid gap-2 md:grid-cols-2">
                                    <ul className="flex flex-col gap-2">
                                        {Object.entries(PRODUCT?.dimensions).map(([key, value]) => (
                                            <li key={key} className="list-disc">
                                                {key}: {value} cm
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <EmptyState title="No dimensions data available" icon={<FileTextIcon />} />
                            )}
                        </ScrollArea>
                    </Card>
                </TabsContent>

                <TabsContent value="materials">
                    <Card className="text-muted-foreground px-1 py-4">
                        <ScrollArea className="h-50 px-3">
                            <h1 className="text-foreground mb-5 text-sm">Materials</h1>

                            {PRODUCT && PRODUCT.materials ? (
                                <div className="grid gap-2 md:grid-cols-2">
                                    <ul className="flex flex-col gap-2">
                                        {Object.entries(PRODUCT?.materials).map(([key, value]) => (
                                            <li key={key} className="list-disc">
                                                {key}: {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <EmptyState title="No materials data available" icon={<FileTextIcon />} />
                            )}
                        </ScrollArea>
                    </Card>
                </TabsContent>

                <TabsContent value="shipping">
                    <Card className="text-muted-foreground px-1 py-4">
                        <ScrollArea className="h-50 px-3">
                            <h1 className="text-foreground mb-5 text-sm">Shipping</h1>
                            <p>{PRODUCT?.shipping}</p>
                        </ScrollArea>
                    </Card>
                </TabsContent>

                <TabsContent value="reviews">
                    <Card className="text-muted-foreground px-1 py-4">
                        <ScrollArea className="h-50 px-3">
                            <h1 className="text-foreground mb-5 text-sm">Reviews</h1>
                            {Array.from({ length: 15 }).map((_, index) => (
                                <ReviewContent key={index} />
                            ))}
                        </ScrollArea>
                    </Card>
                </TabsContent>
            </Tabs>
        </AnimatedMotion>
    );
};

export default TabsInformation;
