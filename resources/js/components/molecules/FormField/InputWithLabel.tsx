import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputWithLabelProps } from '@/types';

const InputWithLabel = ({ label, labelFor, id, name, type, placeholder, autoComplete, className }: InputWithLabelProps) => {
    return (
        <div>
            <Label htmlFor={labelFor}>{label}</Label>
            <Input id={id} name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} className={`${className} border-border`} />
        </div>
    );
};

export default InputWithLabel;
