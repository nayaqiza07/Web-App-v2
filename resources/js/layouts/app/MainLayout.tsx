import Footer from '@/components/organisms/footer/Footer';
import Navbar from '@/components/organisms/navbar/Navbar';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
