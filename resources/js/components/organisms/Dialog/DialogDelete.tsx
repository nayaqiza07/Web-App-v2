import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Trash2Icon } from 'lucide-react';

const DialogDelete = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    effect="gooeyRight"
                    className="bg-destructive border-border hover:bg-destructive/80 absolute inset-0 z-0 flex h-full cursor-pointer items-center justify-end rounded-md border pr-4"
                >
                    <Trash2Icon size={20} className="text-destructive-foreground" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant="ghost">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive">Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogDelete;
