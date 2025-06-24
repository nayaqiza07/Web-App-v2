import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputWithLabelProps } from '@/types';
import React from 'react';

const InputWithLabel: React.FC<InputWithLabelProps> = ({
    label,
    labelFor,
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    disabled,
    autoComplete,
    className,
}) => {
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={labelFor} className="text-xs">
                {label}
            </Label>
            <Input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                disabled={disabled}
                className={`${className} border-border`}
            />
        </div>
    );
};

export default InputWithLabel;
