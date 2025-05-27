import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { ListFilter } from 'lucide-react';

const FilterDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild className="md:hidden">
                <Button>
                    <ListFilter /> Filter
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    {/* <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose> */}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default FilterDrawer;
