import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { TextareaWithLabelProps } from '@/types';

const TextareaWithLabel = ({ label, labelFor, id, name, placeholder, autoComplete, rows = 5, className }: TextareaWithLabelProps) => {
    return (
        <div>
            <Label htmlFor={labelFor}>{label}</Label>
            <Textarea
                id={id}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                rows={rows}
                className={`${className} border-border resize-none`}
            />
        </div>
    );
};

export default TextareaWithLabel;
