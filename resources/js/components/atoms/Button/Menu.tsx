import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AddressType } from '@/types';
import { router } from '@inertiajs/react';
import { EllipsisVerticalIcon, PackageCheckIcon, SquarePenIcon } from 'lucide-react';
import { DeleteButton } from './DeleteButton';

export function Menu({ data: Item }: { data: AddressType }) {
    const handleSetDefault = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        router.put(route('address.setDefault', { id: Item.id }), {
            id: Item.id,
            is_active: true,
            preserveScroll: true,
        });
    };

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-7">
                    <EllipsisVerticalIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuLabel>Action</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleSetDefault} disabled={Item.is_active}>
                        <PackageCheckIcon />
                        Set as Default
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <SquarePenIcon />
                        Edit
                    </DropdownMenuItem>

                    <DeleteButton data={Item} />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
