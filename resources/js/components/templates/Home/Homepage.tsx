import HeadLine from '@/components/molecules/HeadLine';
import Activity from '@/components/organisms/Activity/Activity';
import Subscription from '@/components/organisms/Form/Subscription';
import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { CircleAlert } from 'lucide-react';

const Homepage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-4 p-5">
            {/* 1 */}
            <div className="h-[300px] rounded-2xl border">
                <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            </div>

            <HeadLine icon={<CircleAlert size={20} />} title="What's New" />

            {/* 2 */}
            <div className="flex gap-4">
                <div className="h-[250px] w-full rounded-2xl border md:h-[300px]">
                    <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>

                <div className="h-[250px] w-full rounded-2xl border md:h-[300px]">
                    <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>

                <div className="hidden h-[250px] w-full rounded-2xl border md:h-[300px] lg:flex">
                    <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>

                <div className="hidden h-[300px] w-full rounded-2xl border md:flex">
                    <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>

            {/* 3 */}
            <div className="flex gap-4">
                <div className="h-[240px] w-full rounded-2xl border">
                    <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
                <div className="hidden h-[240px] w-full rounded-2xl border md:flex">
                    <PlaceholderPattern className="size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>

            {/* 4 */}
            <div className="flex h-[240px] w-full flex-col items-center justify-center gap-7 rounded-2xl border bg-[#2563EB] px-10">
                <h3 className="text-center text-2xl font-bold text-white">Designing and innovation for a safer life at home</h3>
                <Button className="bg-primary/30">Go Shopping</Button>
            </div>

            {/* 5 */}
            <Activity />
            <Activity orderImage="md:order-first" color="bg-[#DD0042]" />

            {/* 6 */}
            <Subscription />
        </main>
    );
};

export default Homepage;
