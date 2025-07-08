import Footer from '@/components/organisms/footer/Footer';
import Subscription from '@/components/organisms/Form/Subscription';
import Navbar from '@/components/organisms/navbar/Navbar';
import { useLoadingStore } from '@/stores/useLoadingStore';
import { router } from '@inertiajs/react';
import { ReactNode, useEffect, useRef } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const hasMounted = useRef(false);
    const { setIsLoading } = useLoadingStore();

    useEffect(() => {
        const start = () => setIsLoading(true);
        const finish = () => setTimeout(() => setIsLoading(false), 1500);

        if (hasMounted.current) return;
        hasMounted.current = true;

        router.on('start', start);
        router.on('finish', finish);
    }, [setIsLoading]);

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                {/* <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5 md:px-9 md:py-8 lg:px-20 lg:py-12"> */}
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
