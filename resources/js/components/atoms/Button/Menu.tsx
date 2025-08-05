import AddressForm from '@/components/organisms/Form/AddressForm';
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
import { useAddressActions } from '@/hooks/useAddressActions';
import { AddressType } from '@/types';
import { EllipsisVerticalIcon, PackageCheckIcon } from 'lucide-react';
import { DeleteButton } from './DeleteButton';

export function Menu({ data }: { data: AddressType }) {
    const { handleSetDefaultAddress } = useAddressActions({ data });

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
                    <DropdownMenuItem onClick={handleSetDefaultAddress} disabled={data.is_default}>
                        <PackageCheckIcon />
                        Set as Default
                    </DropdownMenuItem>

                    <AddressForm isFor="edit" data={data} />

                    <DeleteButton data={data} />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
