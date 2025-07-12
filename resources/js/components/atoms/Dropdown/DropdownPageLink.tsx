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
import { ProductList } from '@/types';
import { EllipsisIcon } from 'lucide-react';

interface DropdownPageLinkProps {
    links: ProductList['links'];
}

const DropdownPageLink: React.FC<DropdownPageLinkProps> = ({ links }) => {
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
                    {links.slice(1, -1).map((link, index) => (
                        <PaginationLink key={index} href={link.url || '#'} isActive={link.active}>
                            {link.label}
                        </PaginationLink>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownPageLink;
