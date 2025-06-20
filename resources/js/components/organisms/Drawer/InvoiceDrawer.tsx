import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { motion } from 'framer-motion';
import React from 'react';

interface InvoiceDrawerProps {
    trigger: string;
}

const InvoiceDrawer: React.FC<InvoiceDrawerProps> = ({ trigger }) => {
    return (
        <Drawer>
            <DrawerTrigger asChild className="w-fit">
                <motion.span
                    tabIndex={0}
                    onClick={(e) => {
                        e.stopPropagation();
                        e.currentTarget.blur(); // 🟢 Pindahkan fokus dari accordion trigger
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {trigger}
                </motion.span>
            </DrawerTrigger>
            <DrawerContent onClick={(e) => e.stopPropagation()} className="flex flex-col gap-2 px-4">
                <DrawerHeader className="p-0 text-center">
                    <DrawerTitle>Invoice</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>

                <div className="flex h-60 items-center justify-center rounded border p-2">
                    <h2>Invoice</h2>
                </div>

                <DrawerFooter className="flex flex-row gap-2 px-0">
                    <Button variant="link" effect="hoverUnderline" className="w-full">
                        View Invoice
                    </Button>
                    <Button effect="gooeyLeft" gooeyColor="default" className="w-full">
                        Download
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default InvoiceDrawer;
