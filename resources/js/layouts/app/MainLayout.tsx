import Footer from '@/components/organisms/footer/Footer';
import Subscription from '@/components/organisms/Form/Subscription';
import Navbar from '@/components/organisms/navbar/Navbar';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
                    {children}
                    <Subscription />
                </main>
            </div>
            {/* <div className="min-h-screen">{children}</div> */}
            <Footer />
        </>
    );
};

export default MainLayout;
