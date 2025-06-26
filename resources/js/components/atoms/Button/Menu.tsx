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

export function Menu({ onSetDefault, isDefault, onDelete }: { onSetDefault: () => void; isDefault: boolean; onDelete: () => void }) {
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
                    <DropdownMenuItem onClick={onSetDefault} disabled={isDefault}>
                        <PackageCheckIcon />
                        Set as Default
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <SquarePenIcon />
                        Edit
                    </DropdownMenuItem>

                    <DeleteBUtton onDelete={onDelete} />

                    {/* <DropdownMenuItem variant="destructive">
                        <DeleteBUtton onDelete={onDelete} />
                    </DropdownMenuItem> */}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
