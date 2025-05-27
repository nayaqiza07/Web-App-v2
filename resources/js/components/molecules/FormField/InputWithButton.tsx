import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ReactNode } from 'react';

interface InputWithButtonProps {
    placeholder?: string;
    btnText?: ReactNode;
}

const InputWithButton = ({ placeholder, btnText }: InputWithButtonProps) => {
    return (
        <div className="relative w-full max-w-sm">
            <Input type="email" placeholder={placeholder} className="h-10 rounded-full placeholder:pl-3 placeholder:font-bold" />
            <Button variant="outline" className="absolute top-1/2 right-2 h-6 -translate-y-1/2 rounded-full text-xs font-bold text-[#4D4D4D]">
                {btnText}
            </Button>
        </div>
    );
};

export default InputWithButton;
