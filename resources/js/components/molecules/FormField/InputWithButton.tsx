import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type InputWithButtonProps } from '@/types';

const InputWithButton = ({ placeholder, btnText }: InputWithButtonProps) => {
    return (
        <div className="relative w-full max-w-sm">
            <Input
                type="email"
                placeholder={placeholder}
                className="bg-input border-border h-10 rounded-full pl-5 transition-all duration-200 placeholder:font-bold focus:pl-5"
            />
            <Button variant="outline" className="bg-input border-border absolute top-1/2 right-2 h-6 -translate-y-1/2 rounded-full text-xs font-bold">
                {btnText}
            </Button>
        </div>
    );
};

export default InputWithButton;
