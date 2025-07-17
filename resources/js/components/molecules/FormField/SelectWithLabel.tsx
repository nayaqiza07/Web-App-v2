import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectWithLabelProps } from '@/types';

const SelectWithLabel = ({ label, labelFor, id, options, value, onValueChange, placeholder }: SelectWithLabelProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={labelFor} className="text-xs">
                {label}
            </Label>

            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger id={id} className="border-border border">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={placeholder} className="text-muted-foreground">
                        {placeholder}
                    </SelectItem>
                    {options.length > 0 &&
                        options.map((_option) => {
                            return (
                                <SelectItem key={_option.id} value={String(_option.id)}>
                                    {_option.name}
                                </SelectItem>
                            );
                        })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectWithLabel;
