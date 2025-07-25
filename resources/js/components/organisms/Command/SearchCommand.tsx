import { Calculator, Calendar, LayoutGrid, SearchIcon, SearchXIcon, Settings, Smile } from 'lucide-react';

import AppearanceToggleTab from '@/components/appearance-tabs';
import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '@/components/ui/command';
import { priceFormat } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

const SearchCommand = () => {
    const [open, setOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    return (
        <>
            <Button
                size="sm"
                effect="shine"
                onClick={() => setOpen(true)}
                className="bg-accent hover:bg-accent text-muted-foreground hidden cursor-text text-xs lg:flex"
            >
                Search ...
                <div>
                    <Badge variant="secondary" className="border-border text-muted-foreground">
                        Ctrl
                    </Badge>
                    <Badge variant="secondary" className="border-border text-muted-foreground">
                        K
                    </Badge>
                </div>
            </Button>
            <Button size="icon" variant="ghost" onClick={() => setOpen(true)} className="lg:hidden">
                <SearchIcon />
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput ref={inputRef} placeholder="Search for products, categories, or blogs..." />
                <CommandList>
                    <CommandEmpty>
                        <EmptyState
                            icon={SearchXIcon}
                            title="No result found"
                            btnText="Clear your search and try again"
                            btnProps={{
                                onClick: () => {
                                    if (inputRef.current) {
                                        inputRef.current.value = '';
                                        inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
                                        inputRef.current?.focus();
                                    }
                                },
                            }}
                        />
                    </CommandEmpty>

                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <Calculator />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />

                    {/* For Categories */}
                    <CommandGroup heading="Categories">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CommandItem key={index}>
                                <span>Categories {index + 1}</span>
                                <CommandShortcut>
                                    <Badge variant="outline">{index + 1}</Badge>
                                </CommandShortcut>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />

                    {/* For Products */}
                    <CommandGroup heading="Products">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CommandItem key={index}>
                                <div className="flex w-full gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                        alt="cart-image-product"
                                        className="h-[44px] w-[60px] rounded"
                                    />
                                    <div className="flex w-full flex-col justify-between">
                                        <div className="flex items-center gap-3">
                                            <h2>Product {index + 1}</h2>
                                            <CornerPlusBadge>New</CornerPlusBadge>
                                        </div>
                                        <div className="text-muted-foreground flex items-center justify-between gap-5 text-xs">
                                            <p>Categories {index + 1}</p>
                                            <p className="text-foreground">{priceFormat(1000000)}</p>
                                        </div>
                                    </div>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />

                    {/* For Group Footer */}
                    <CommandGroup className="bg-card sticky bottom-0 border-t">
                        <div className="flex flex-col gap-3 px-2 pt-3 pb-2 md:flex-row md:items-center md:justify-between">
                            <div className="flex gap-2 text-xs">
                                <Link href={route('dashboard')} as="button">
                                    <Badge variant="outline" className="text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer">
                                        <LayoutGrid />
                                        <span>Dashboard</span>
                                    </Badge>
                                </Link>
                                <Link href={route('profile.edit')} as="button">
                                    <Badge variant="outline" className="text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer">
                                        <Settings />
                                        <span>Settings</span>
                                    </Badge>
                                </Link>
                            </div>
                            <AppearanceToggleTab className="h-7 w-fit" />
                        </div>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
};

export default SearchCommand;
