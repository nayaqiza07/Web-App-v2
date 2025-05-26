import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';
import { CircleAlert } from 'lucide-react';

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <MainLayout>
                <main className="mx-auto flex max-w-5xl flex-col gap-4 border p-5">
                    <div className="h-[300px] rounded-2xl border">
                        <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>

                    <div className="flex items-center justify-between text-sm font-bold text-[#333333]">
                        <div className="flex gap-4">
                            <CircleAlert size={20} />
                            <h3>Whatsnew</h3>
                        </div>
                        <span>View All</span>
                    </div>

                    <div className="h-[300px] rounded-2xl border">
                        <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </main>
            </MainLayout>
        </>
    );
};

export default Home;
