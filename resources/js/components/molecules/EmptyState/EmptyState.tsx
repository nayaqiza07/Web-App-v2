import { Button, ButtonProps } from '@/components/ui/button';
import { ReactNode } from 'react';

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    btnText?: string;
    btnProps?: ButtonProps;
}

const EmptyState = ({ icon, title, btnText, btnProps }: EmptyStateProps) => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-10">
            {icon}
            <h3>{title}</h3>
            {btnText && (
                <Button className="text-xs" size="sm" {...btnProps}>
                    {btnText}
                </Button>
            )}
        </div>
    );
};

export default EmptyState;
