import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    btnText: string;
}

const EmptyState = ({ icon, title, btnText }: EmptyStateProps) => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-10">
            {icon}
            <h3>{title}</h3>
            <Button>{btnText}</Button>
        </div>
    );
};

export default EmptyState;
