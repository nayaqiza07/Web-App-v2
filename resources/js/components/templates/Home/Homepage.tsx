import HeadLine from '@/components/molecules/HeadLine';
import Activity from '@/components/organisms/Activity/Activity';
import ProductCard from '@/components/organisms/Card/ProductCard';
import Subscription from '@/components/organisms/Form/Subscription';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Link } from '@inertiajs/react';
import { CircleAlert } from 'lucide-react';

const Homepage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            {/* Hero Section */}
            <HeroSection image={'bg-[url(/images/image-18.jpg)]'}>
                <h1 className="text-4xl font-bold">New Styles Are Here</h1>
                <p>Discover The Lasts Premium FurnitureFeatured In Our Collection</p>
                <Link href={route('shop')}>
                    <Button className="rounded-full bg-white text-sm font-bold text-[#1a1a1a]">Go Shopping</Button>
                </Link>
            </HeroSection>

            <HeadLine icon={<CircleAlert size={20} />} title="What's New" />

            {/* 2 */}
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            {/* 3 */}
            <div className="flex gap-3">
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
                <Button className="bg-black/30 text-white hover:bg-black/50">Go Shopping</Button>
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
