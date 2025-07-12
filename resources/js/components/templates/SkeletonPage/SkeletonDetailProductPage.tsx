import SkeletonImageDetailProduct from '@/components/atoms/Skeleton/SkeletonImageDetailProduct';
import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonCarouselImageProduct from '@/components/molecules/Skeleton/SkeletonCarouselImageProduct';
import SkeletonDetailProduct from '@/components/molecules/Skeleton/SkeletonDetailProduct';
import SkeletonHeadLine from '@/components/molecules/Skeleton/SkeletonHeadLine';
import SkeletonProductCard from '@/components/organisms/Skeleton/SkeletonProductCard';
import SkeletonTabsInformation from '@/components/organisms/Skeleton/SkeletonTabsInformation';

const SkeletonDetailProductPage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <SkeletonBreadcrumb />

            {/* Content Section */}
            <section className="flex flex-col gap-6 md:flex-row">
                {/* Right Content */}
                <div className="flex h-[416px] w-full flex-col gap-3 lg:flex-row">
                    <SkeletonCarouselImageProduct />
                    <SkeletonImageDetailProduct />
                </div>

                {/* Left Content */}
                <SkeletonDetailProduct />
            </section>

            <SkeletonTabsInformation />

            <section className="flex flex-col gap-6">
                <SkeletonHeadLine />
                <div className="flex gap-4 overflow-hidden pr-4 md:pr-12 lg:pr-16">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex-shrink-0 basis-1/2 md:basis-1/4 lg:basis-1/5">
                            <SkeletonProductCard />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default SkeletonDetailProductPage;
