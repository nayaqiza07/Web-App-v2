import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonChatWithUs from '@/components/molecules/Skeleton/SkeletonChatWithUs';
import SkeletonContactForm from '@/components/organisms/Skeleton/SkeletonContactForm';
import SkeletonFaq from '@/components/organisms/Skeleton/SkeletonFaq';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonContactUsPage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="flex flex-col gap-6">
                <SkeletonBreadcrumb />
                <Skeleton className="h-[92px] rounded-xl md:h-[120px] lg:h-[208px]" />
            </section>

            {/* Content Section */}
            <section className="grid gap-3 md:grid-cols-[2fr_auto_1fr] md:gap-8">
                <SkeletonContactForm />
                <Separator orientation="vertical" className="via-border bg-gradient-to-b from-transparent to-transparent" />
                <SkeletonChatWithUs />
            </section>

            <SkeletonFaq />
        </main>
    );
};

export default SkeletonContactUsPage;
