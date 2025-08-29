import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PaginationLink } from '@/components/ui/pagination';
import { BlogList, ProductList } from '@/types';
import { EllipsisIcon } from 'lucide-react';

interface DropdownPageLinkProps {
    otherLink: ProductList['meta']['links'] | BlogList['meta']['links'];
}

const DropdownPageLink: React.FC<DropdownPageLinkProps> = ({ otherLink }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                    <EllipsisIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-10">
                <DropdownMenuLabel>Pages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="grid grid-cols-3 gap-1">
                    {otherLink.slice(1, -1).map((_link, index) => (
                        <PaginationLink key={index} href={_link.url || '#'} isActive={_link.active}>
                            {_link.label}
                        </PaginationLink>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownPageLink;
