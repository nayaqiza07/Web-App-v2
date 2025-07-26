import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { EachUtils } from '@/lib/EachUtils';
import { ListFilterIcon } from 'lucide-react';

function PopoverFilter({ className }: { className?: string }) {
    // const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

    const checkboxItems = [
        { id: 'newest', label: 'Newest' },
        { id: 'sales', label: 'Sales' },
    ];

    // const handleChecked = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     setCheckedItems((prev) => ({
    //         ...prev,
    //         [e.target.value]: e.target.checked,
    //     }));
    //     console.log(checkedItems);
    // };

    return (
        <Popover>
            <PopoverTrigger asChild className={className}>
                <Button aria-label="Filters">
                    <ListFilterIcon size={16} aria-hidden="true" />
                    <span>Filters</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-40 p-3">
                <div className="space-y-3">
                    <div className="text-muted-foreground text-xs font-medium">Filters</div>
                    <EachUtils
                        of={checkboxItems!}
                        render={(_checkbox) => (
                            <div key={_checkbox.id} className="flex items-center gap-2">
                                <Checkbox
                                    id={_checkbox.id}
                                    // value={_checkbox.label}
                                    // checked={!!checkedItems[_checkbox.id]}
                                    // onCheckedChange={handleChecked}
                                    className="border-border"
                                />
                                <Label htmlFor={_checkbox.id} className="font-normal">
                                    {_checkbox.label}
                                </Label>
                            </div>
                        )}
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default PopoverFilter;
