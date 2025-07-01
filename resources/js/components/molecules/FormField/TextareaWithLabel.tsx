import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { TextareaWithLabelProps } from '@/types';

const TextareaWithLabel = ({
    label,
    labelFor,
    id,
    name,
    placeholder,
    autoComplete,
    rows = 5,
    className,
    value,
    onChange,
}: TextareaWithLabelProps) => {
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={labelFor} className="text-xs">
                {label}
            </Label>
            <Textarea
                id={id}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                rows={rows}
                value={value}
                onChange={onChange}
                className={`${className} border-border resize-none`}
            />
        </div>
    );
};

export default TextareaWithLabel;
