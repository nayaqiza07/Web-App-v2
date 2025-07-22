import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EachUtils } from '@/lib/EachUtils';
import { SelectWithLabelProps } from '@/types';
import { NotepadTextIcon } from 'lucide-react';

const SelectWithLabel = ({ label, labelFor, id, options, value, onValueChange, placeholder, disabled }: SelectWithLabelProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={labelFor} className="text-xs">
                {label}
            </Label>

            <Select value={value} onValueChange={onValueChange} disabled={disabled}>
                <SelectTrigger id={id} className="border-border border">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {options.length > 0 && <SelectLabel className="text-muted-foreground text-xs">{label}</SelectLabel>}
                        <EachUtils
                            emptyIcon={NotepadTextIcon}
                            emptyTitle={`There is no list of ${label} yet`}
                            emptyDesc="Select the input above first"
                            of={options}
                            render={(_option) => (
                                <SelectItem key={_option.id} value={String(_option.id)}>
                                    {_option.name}
                                </SelectItem>
                            )}
                        />
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectWithLabel;
