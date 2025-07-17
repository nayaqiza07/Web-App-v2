import { Children, ReactNode } from 'react';

export const MapUtils = <T>(of: T[], render: (item: T, index: number) => ReactNode): ReactNode[] => {
    return Children.toArray(of.map((item, index) => render(item, index)));
};
