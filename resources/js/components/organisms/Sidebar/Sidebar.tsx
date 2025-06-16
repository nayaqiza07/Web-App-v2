import ButtonWithBadge from '@/components/molecules/Button/ButtonWithBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`${className} sticky top-20 flex h-full flex-col gap-3`}
        >
            <Card className={`bg-background w-full gap-1 p-2`}>
                <ScrollArea className="h-[425px]">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <ButtonWithBadge key={index} title={`Category ${index + 1}`} badgeNumber={index + 1} index={index} />
                    ))}
                </ScrollArea>
            </Card>

            <Card className={`bg-background w-full gap-0 py-0 text-xs`}>
                <CardHeader className="px-2 py-4">
                    <CardTitle>Price</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="p-2">
                    <div className="flex gap-3">
                        <Input className="bg-card" />
                        <Input className="bg-card" />
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Sidebar;
