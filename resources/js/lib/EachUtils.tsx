import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { XIcon } from 'lucide-react';
import { Children, ReactNode } from 'react';

interface EachUtilsProps<T> {
    of: T[];
    render: (item: T, index: number) => ReactNode;
    emptyTitle?: string;
    emptyDesc?: string;
    emptyIcon?: React.ElementType;
    className?: string;
}

export const EachUtils = <T,>({
    of,
    render,
    emptyIcon: Icon = XIcon,
    emptyTitle = 'No data yet',
    emptyDesc = 'Once you write your data, it will appear here.',
    className = '',
}: EachUtilsProps<T>) => {
    if (!of || of.length === 0) {
        return <EmptyState icon={Icon} title={emptyTitle} desc={emptyDesc} className={className} />;
    }
    return Children.toArray(of.map((item, index) => render(item, index)));
};
