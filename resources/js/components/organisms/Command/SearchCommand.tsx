import { Calculator, Calendar, LayoutGrid, SearchIcon, SearchXIcon, Settings, Smile } from 'lucide-react';

import AppearanceToggleTab from '@/components/appearance-tabs';
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
                className="bg-accent hover:bg-accent text-muted-foreground hidden text-xs lg:flex"
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
                            icon={<SearchXIcon size={50} />}
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
                        <CommandItem>
                            <span>Categories 1</span>
                            <CommandShortcut>
                                <Badge variant="outline">1</Badge>
                            </CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <span>Categories 2</span>
                            <CommandShortcut>
                                <Badge variant="outline">2</Badge>
                            </CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <span>Categories 3</span>
                            <CommandShortcut>
                                <Badge variant="outline">3</Badge>
                            </CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />

                    {/* For Products */}
                    <CommandGroup heading="Products">
                        <CommandItem>
                            <div className="flex items-start gap-3">
                                <img
                                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                    alt="cart-image-product"
                                    className="h-[44px] w-[60px] rounded"
                                />
                                <div className="flex flex-col justify-between">
                                    <h2>Armchair</h2>
                                    <div className="flex gap-5">
                                        <p className="flex items-center gap-2">
                                            <Badge className="rounded px-1">Rp</Badge>
                                            <span>1000</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Badge variant="outline" className="rounded px-1">
                                                SKU
                                            </Badge>
                                            <span>123456</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CommandItem>
                        <CommandItem>
                            <div className="flex items-start gap-3">
                                <img
                                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                    alt="cart-image-product"
                                    className="h-[44px] w-[60px] rounded"
                                />
                                <div className="flex flex-col justify-between">
                                    <h2>Coffe Table</h2>
                                    <div className="flex gap-5">
                                        <p className="flex items-center gap-2">
                                            <Badge className="rounded px-1">Rp</Badge>
                                            <span>2000</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Badge variant="outline" className="rounded px-1">
                                                SKU
                                            </Badge>
                                            <span>789798</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CommandItem>
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
