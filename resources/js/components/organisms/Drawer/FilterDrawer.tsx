import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
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
                <Sidebar className="mx-4" />
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
