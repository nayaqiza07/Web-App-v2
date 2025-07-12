import TextContent from '@/components/molecules/TextContent/TextContent';
import Activity from '@/components/organisms/Activity/Activity';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { useLoadingStore } from '@/stores/useLoadingStore';
import { ArrowRightLeftIcon, ShoppingBagIcon, TruckIcon } from 'lucide-react';
import SkeletonServicesPage from '../SkeletonPage/SkeletonServicesPage';

const ServicesPage = () => {
    const { isLoading } = useLoadingStore();

    if (isLoading) {
        return <SkeletonServicesPage />;
    }

    const dataContent = [
        {
            icon: TruckIcon,
            title: 'Fast Shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut, ',
        },
        {
            icon: ShoppingBagIcon,
            title: 'Easy to Shop',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut,',
        },
        {
            icon: ArrowRightLeftIcon,
            title: 'Hassle Free Return',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut,',
        },
        {
            icon: TruckIcon,
            title: 'Fast Shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut, ',
        },
        {
            icon: ShoppingBagIcon,
            title: 'Easy to Shop',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut,',
        },
        {
            icon: ArrowRightLeftIcon,
            title: 'Hassle Free Return',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut,',
        },
    ];

    return (
        <>
            <HeroSection variant="withBreadcrumb" color="bg-[#E3B4BA]" srcImage="/images/asjasjkdh.jpg" altImage="Image for Service page">
                <h1 className="text-4xl font-bold">Services</h1>
            </HeroSection>

            <section className="my-20 grid gap-15 md:grid-cols-2 lg:grid-cols-3">
                {dataContent.map((data, index) => (
                    <TextContent key={index} icon={data.icon} title={data.title} description={data.description} index={index} />
                ))}
            </section>

            <Activity
                text="Horestco is a young but reputable company with a team that has many years of first hand experience in the furniture manufacturing and hospitality industry"
                btnLink={route('about-us')}
                srcImage="/images/image-14.jpg"
                altImage="Image 14"
            />
        </>
    );
};

export default ServicesPage;
