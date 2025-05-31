import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TabsInformation = () => {
    return (
        <Tabs defaultValue="information" className="w-full text-xs font-bold">
            <TabsList className="bg-transparent">
                <TabsTrigger value="information" className="text-xs font-bold">
                    Product Information
                </TabsTrigger>
                <TabsTrigger value="materials" className="text-xs font-bold">
                    Materials
                </TabsTrigger>
                <TabsTrigger value="shipping" className="text-xs font-bold">
                    Shipping
                </TabsTrigger>
            </TabsList>

            <TabsContent value="information" className="flex flex-col gap-3 text-xs font-bold lg:flex-row">
                <Card className="w-full bg-transparent px-4 py-4">
                    <h1 className="text-sm">Information</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos eveniet, incidunt officiis accusantium molestias
                        ipsam amet. Explicabo quam necessitatibus commodi delectus, sapiente voluptates incidunt tenetur modi at, aperiam saepe!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos eveniet, incidunt officiis accusantium molestias
                        ipsam amet. Explicabo quam necessitatibus commodi delectus, sapiente voluptates incidunt tenetur modi at, aperiam saepe!
                    </p>
                </Card>

                <Card className="w-full px-4 py-4">
                    <h1 className="text-sm">Dimension</h1>
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
                <Card className="px-4 py-4">
                    <h1 className="text-sm">Materials</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis eum reprehenderit repudiandae rerum quas quo
                        aspernatur voluptates assumenda deserunt, sit unde exercitationem quidem in, temporibus eaque numquam necessitatibus quae?
                    </p>
                </Card>
            </TabsContent>

            <TabsContent value="shipping">
                <Card className="px-4 py-4">
                    <h1 className="text-sm">Shipping</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis eum reprehenderit repudiandae rerum quas quo
                        aspernatur voluptates assumenda deserunt, sit unde exercitationem quidem in, temporibus eaque numquam necessitatibus quae?
                    </p>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export default TabsInformation;
