import TextContent from '@/components/molecules/TextContent/TextContent';
import Activity from '@/components/organisms/Activity/Activity';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { ArrowRightLeft, ShoppingBag, Truck } from 'lucide-react';

const ServicesPage = () => {
    const dataContent = [
        {
            icon: <Truck />,
            title: 'Fast Shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut, ',
        },
        {
            icon: <ShoppingBag />,
            title: 'Easy to Shop',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut,',
        },
        {
            icon: <ArrowRightLeft />,
            title: 'Hassle Free Return',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut,',
        },
        {
            icon: <Truck />,
            title: 'Fast Shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut, ',
        },
        {
            icon: <ShoppingBag />,
            title: 'Easy to Shop',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut,',
        },
        {
            icon: <ArrowRightLeft />,
            title: 'Hassle Free Return',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias, praesentium libero velit soluta ut,',
        },
    ];

    return (
        <>
            <HeroSection variant="withBreadcrumb" color="bg-[#E3B4BA]" srcImage="/images/asjasjkdh.jpg" altImage="Image for Service page">
                <h1 className="text-4xl font-bold">Services</h1>
            </HeroSection>

            <div className="my-20 grid gap-15 md:grid-cols-2 lg:grid-cols-3">
                {dataContent.map((data, index) => (
                    <TextContent key={index} icon={data.icon} title={data.title} description={data.description} />
                ))}
            </div>

            <Activity srcImage="/images/image-14.jpg" altImage="Image 14" />
        </>
    );
};

export default ServicesPage;
