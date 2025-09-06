import { Button, buttonVariants } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { BlogList, ProductList } from '@/types';
import { Link } from '@inertiajs/react';
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
                        <Link
                            preserveState
                            preserveScroll
                            href={data.links.prev}
                            className={buttonVariants({ variant: 'secondary', effect: 'shineHover' })}
                        >
                            <ArrowLeftIcon />
                            <span className="hidden sm:block">Previous</span>
                        </Link>
                    )}
                </PaginationItem>

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

                <PaginationItem>
                    {data.links.next === null ? (
                        <Button variant="secondary" disabled>
                            <span className="hidden sm:block">Next</span>
                            <ArrowRightIcon />
                        </Button>
                    ) : (
                        <Link
                            preserveScroll
                            preserveState
                            href={data.links.next}
                            className={buttonVariants({ variant: 'secondary', effect: 'shineHover' })}
                        >
                            <span className="hidden sm:block">Next</span>
                            <ArrowRightIcon />
                        </Link>
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};
