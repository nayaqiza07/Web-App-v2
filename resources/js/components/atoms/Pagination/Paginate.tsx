import { Button, buttonVariants } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { BlogList, ProductList } from '@/types';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import DropdownPageLink from '../Dropdown/DropdownPageLink';

interface PaginateProps {
    data: ProductList | BlogList;
}

export const Paginate: React.FC<PaginateProps> = ({ data }) => {
    return (
        <Pagination>
            <PaginationContent className="flex w-full items-center justify-between">
                <PaginationItem>
                    {data.links.prev === null ? (
                        <Button variant="secondary" disabled>
                            <ArrowLeftIcon />
                            <span className="hidden sm:block">Previous</span>
                        </Button>
                    ) : (
                        <PaginationPrevious href={data.links.prev} className={buttonVariants({ variant: 'secondary', effect: 'shineHover' })} />
                    )}
                </PaginationItem>

                <div className="flex gap-1">
                    <PaginationItem className="flex gap-1">
                        {data.meta?.links?.slice(1, -1).map((link, index) => (
                            <PaginationLink key={index} href={link.url || '#'} isActive={link.active} className="size-8">
                                {link.label}
                            </PaginationLink>
                        ))}
                    </PaginationItem>

                    {data.meta?.links?.slice(1, -1).length > 5 && (
                        <PaginationItem>
                            <DropdownPageLink otherLink={data.meta.links} />
                        </PaginationItem>
                    )}
                </div>

                <PaginationItem>
                    {data.links.next === null ? (
                        <Button variant="secondary" disabled>
                            <span className="hidden sm:block">Next</span>
                            <ArrowRightIcon />
                        </Button>
                    ) : (
                        <PaginationNext href={data.links.next} className={buttonVariants({ variant: 'secondary', effect: 'shineHover' })} />
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};
