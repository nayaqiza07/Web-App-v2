import Footer from '@/components/organisms/Footer/Footer';
import Navbar from '@/components/organisms/Navbar/Navbar';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen border border-red-900">{children}</div>
            <Footer />
        </>
    );
};

export default MainLayout;
