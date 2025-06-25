import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectWithLabelProps } from '@/types';

const SelectWithLabel = ({ label, labelFor, id, value, onValueChange, placeholder }: SelectWithLabelProps) => {
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
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectWithLabel;
