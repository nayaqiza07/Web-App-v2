import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import SkeletonTabsInformation from '../Skeleton/SkeletonTabsInformation';

interface TabsInformationProps {
    isLoading?: boolean;
}

const TabsInformation: React.FC<TabsInformationProps> = ({ isLoading = false }) => {
    const styleTabTrigger =
        'data-[state=active]:border-border dark:data-[state=active]:bg-card data-[state=active]:bg-card data-[state=active]:text-foreground text-xs text-muted-foreground font-bold data-[state=active]:shadow-none';

    return isLoading ? (
        <SkeletonTabsInformation />
    ) : (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}>
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
                </TabsList>

                <TabsContent value="information" className="flex flex-col gap-3 text-xs font-bold lg:flex-row">
                    <Card className="text-muted-foreground w-full bg-transparent px-4 py-4">
                        <h1 className="text-foreground text-sm">Information</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos eveniet, incidunt officiis accusantium
                            molestias ipsam amet. Explicabo quam necessitatibus commodi delectus, sapiente voluptates incidunt tenetur modi at,
                            aperiam saepe!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos eveniet, incidunt officiis accusantium
                            molestias ipsam amet. Explicabo quam necessitatibus commodi delectus, sapiente voluptates incidunt tenetur modi at,
                            aperiam saepe!
                        </p>
                    </Card>

                    <Card className="text-muted-foreground w-full px-4 py-4">
                        <h1 className="text-foreground text-sm">Dimension</h1>
                        <div className="grid gap-2 md:grid-cols-2">
                            <ul className="flex flex-col gap-2">
                                <li>Height including back cushions: 40 1/8</li>
                                <li>Width: 74 3/8</li>
                                <li>Height under furniture: 2 2/3</li>
                                <li>Depth: 98 cm</li>
                                <li>Seat Width: 141 cm</li>
                            </ul>

                            <ul className="flex flex-col gap-2">
                                <li>Backrest Height: 29 7/8</li>
                                <li>Depth: 38 5/8</li>
                                <li>Width: 189 cm</li>
                                <li>Height under furniture: 7 cm</li>
                                <li>Backrest Height: 76 cm</li>
                            </ul>
                        </div>
                    </Card>
                </TabsContent>

                <TabsContent value="materials">
                    <Card className="text-muted-foreground px-4 py-4">
                        <h1 className="text-foreground text-sm">Materials</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis eum reprehenderit repudiandae rerum quas
                            quo aspernatur voluptates assumenda deserunt, sit unde exercitationem quidem in, temporibus eaque numquam necessitatibus
                            quae?
                        </p>
                    </Card>
                </TabsContent>

                <TabsContent value="shipping">
                    <Card className="text-muted-foreground px-4 py-4">
                        <h1 className="text-foreground text-sm">Shipping</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis eum reprehenderit repudiandae rerum quas
                            quo aspernatur voluptates assumenda deserunt, sit unde exercitationem quidem in, temporibus eaque numquam necessitatibus
                            quae?
                        </p>
                    </Card>
                </TabsContent>
            </Tabs>
        </motion.div>
    );
};

export default TabsInformation;
