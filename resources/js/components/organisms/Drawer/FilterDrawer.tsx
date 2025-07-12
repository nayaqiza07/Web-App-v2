import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ListFilter } from 'lucide-react';
import Sidebar from '../Sidebar/Sidebar';

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
                    <DrawerTitle>Filter</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <ScrollArea className="h-[300px]">
                    <Sidebar className="mx-4" />
                </ScrollArea>
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
