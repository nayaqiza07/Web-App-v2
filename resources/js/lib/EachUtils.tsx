import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { ButtonProps } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { Children, ReactNode } from 'react';

interface EachUtilsProps<T> {
    of: T[];
    render: (item: T, index: number) => ReactNode;
    emptyIcon?: React.ElementType;
    emptyIconSize?: number;
    emptyTitle?: string;
    emptyDesc?: string;
    emptyButtonTxt?: string;
    emptyButtonLink?: string;
    emptyButtonProps?: ButtonProps;
    className?: string;
}

export const EachUtils = <T,>({
    of,
    render,
    emptyIcon: Icon = XIcon,
    emptyIconSize,
    emptyTitle = 'No data yet',
    emptyDesc = 'Once you write your data, it will appear here.',
    emptyButtonTxt,
    emptyButtonLink,
    emptyButtonProps,
    className = '',
}: EachUtilsProps<T>) => {
    if (!of || of.length === 0) {
        return (
            <EmptyState
                icon={Icon}
                iconSize={emptyIconSize}
                title={emptyTitle}
                desc={emptyDesc}
                btnText={emptyButtonTxt}
                btnLink={emptyButtonLink}
                btnProps={emptyButtonProps}
                className={className}
            />
        );
    }
    return Children.toArray(of.map((item, index) => render(item, index)));
};
