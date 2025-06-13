import { Button, type ButtonProps } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
// import { type InputWithButtonProps } from '@/types';
import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

// === VARIANTS ===
const inputVariants = cva('transition-all duration-200', {
    variants: {
        variant: {
            default: 'bg-input',
            search: 'bg-accent border border-muted w-40 text-muted-foreground',
            rounded: 'bg-input border-border h-10 rounded-full pl-5 focus:pl-5',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

const buttonVariants = cva('absolute top-1/2 right-2 -translate-y-1/2 text-xs font-bold', {
    variants: {
        variant: {
            default: 'bg-input border border-border',
            search: 'bg-primary text-primary-foreground px-3 rounded-md',
            rounded: 'bg-input border border-border rounded-full h-6',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

// === TYPE ===
type InputWithButtonVariantProps = {
    inputVariant?: VariantProps<typeof inputVariants>['variant'];
    buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
};

// === COMPONENT ===
export interface InputWithButtonProps extends React.InputHTMLAttributes<HTMLInputElement>, InputWithButtonVariantProps {
    placeholder: string;
    btnText: string | ReactNode;
    btnProps?: ButtonProps;
}

const InputWithButton = ({
    placeholder,
    btnText,
    btnProps,
    inputVariant = 'default',
    buttonVariant = 'default',
    ...inputProps
}: InputWithButtonProps) => {
    return (
        <div className="relative w-full max-w-sm">
            <Input {...inputProps} placeholder={placeholder} className={cn(inputVariants({ variant: inputVariant }), inputProps.className)} />
            <Button {...btnProps} className={cn(buttonVariants({ variant: buttonVariant }), btnProps?.className)}>
                {btnText}
            </Button>
        </div>
    );
};

// const InputWithButton = ({ placeholder, btnText }: InputWithButtonProps) => {
//     return (
//         <div className="relative w-full max-w-sm">
//             <Input
//                 type="email"
//                 placeholder={placeholder}
//                 className="bg-input border-border h-10 rounded-full pl-5 transition-all duration-200 placeholder:font-bold focus:pl-5"
//             />
//             <Button variant="outline" className="bg-input border-border absolute top-1/2 right-2 h-6 -translate-y-1/2 rounded-full text-xs font-bold">
//                 {btnText}
//             </Button>
//         </div>
//     );
// };

export default InputWithButton;
