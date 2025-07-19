import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { useAddressActions } from '@/hooks/useAddressActions';
import { cn } from '@/lib/utils';
import { AddressType } from '@/types';
import { Trash2Icon } from 'lucide-react';

export function DeleteButton({ data }: { data: AddressType }) {
    const { handleDeleteAddress } = useAddressActions({ data });

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full">
                <span className="text-destructive hover:bg-destructive hover:text-destructive-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                    <Trash2Icon className="size-4" />
                    Delete
                </span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteAddress} className={cn(buttonVariants({ variant: 'destructive' }))}>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
