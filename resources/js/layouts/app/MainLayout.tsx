import Footer from '@/components/organisms/Footer';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen">
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
