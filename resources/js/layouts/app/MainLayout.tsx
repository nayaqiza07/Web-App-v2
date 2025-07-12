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
    const { isLoading, setIsLoading } = useLoadingStore();

    useEffect(() => {
        const start = () => {
            // console.log('🌐 Loading started');
            setIsLoading(true);
            // ✅ Disable scroll
            document.body.classList.add('overflow-hidden');
            document.documentElement.classList.add('overflow-hidden');
        };

        const finish = () => {
            setTimeout(() => {
                // console.log('✅ Loading finished');
                setIsLoading(false);
                // ✅ Enable scroll again
                document.body.classList.remove('overflow-hidden');
                document.documentElement.classList.remove('overflow-hidden');
            }, 500);
        };

        if (hasMounted.current) return;
        hasMounted.current = true;

        router.on('start', start);
        router.on('finish', finish);
    }, [setIsLoading]);

    return (
        <>
            <Navbar />
            {/* <div className="min-h-screen"> */}
            <div className={`relative ${isLoading ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
                {/* <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5 md:px-9 md:py-8 lg:px-20 lg:py-12"> */}
                <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
                    {children}
                    {!isLoading && <Subscription />}
                </main>
            </div>
            {/* <div className="min-h-screen">{children}</div> */}
            {!isLoading && <Footer />}
        </>
    );
};

export default MainLayout;
