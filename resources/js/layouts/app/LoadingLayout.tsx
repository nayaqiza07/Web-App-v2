import { ReactNode } from 'react';

interface LoadingLayoutProps {
    children: ReactNode;
    className: string;
}

const LoadingLayout: React.FC<LoadingLayoutProps> = ({ children, className }) => {
    return <main className={className}>{children}</main>;
};

export default LoadingLayout;
