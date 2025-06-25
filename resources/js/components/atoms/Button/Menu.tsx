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
import { EllipsisVerticalIcon, PackageCheckIcon, SquarePenIcon } from 'lucide-react';
import { DeleteBUtton } from './DeleteButton';

export function Menu({ onSetDefault, isDefault }: { onSetDefault: () => void; isDefault: boolean }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-7">
                    <EllipsisVerticalIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuLabel>Action</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={onSetDefault} disabled={isDefault}>
                        <PackageCheckIcon />
                        Set as Default
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <SquarePenIcon />
                        Edit
                    </DropdownMenuItem>

                    <DeleteBUtton />

                    {/* <DropdownMenuItem variant="destructive" onSelect={(e) => e.preventDefault()}>
                        <DeleteBUtton />
                    </DropdownMenuItem> */}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
