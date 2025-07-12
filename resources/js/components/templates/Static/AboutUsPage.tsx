import TextContent from '@/components/molecules/TextContent/TextContent';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { useLoadingStore } from '@/stores/useLoadingStore';
import { BoxesIcon, ContainerIcon, FactoryIcon, UsersIcon } from 'lucide-react';
import SkeletonAboutUsPage from '../SkeletonPage/SkeletonAboutUsPage';

const AboutUsPage = () => {
    const { isLoading } = useLoadingStore();

    if (isLoading) {
        return <SkeletonAboutUsPage />;
    }

    const dataContent = [
        {
            icon: UsersIcon,
            title: 'Our Clients',
            description:
                'Our clients are mostly individual home owners, restaurants, hotels and condominiums that are very discerning in their taste and quality of furniture. Our regular clients choose us for the consistent quality and cost effectivess of our furniture.',
        },
        {
            icon: FactoryIcon,
            title: 'Manufacturing Facilities',
            description:
                'We have a production facility of 4500 sq.m.with a highly experienced team of carpenters, welders, weavers, quality control managers and furniture finishing specialists in Jepara, Central Java, Indonesia - the furniture manufacturing hub of Indonesia.',
        },
        {
            icon: ContainerIcon,
            title: 'Capacity',
            description:
                'We have a capacity to produce upto five 40ft. containers/month of contract grade furniture which can be increased upon demand given the time.',
        },
        {
            icon: BoxesIcon,
            title: 'Quality Control',
            description:
                'We understand the importance of consistent quality and on-time delivery. Our quality inspectors are dedicated and highly experienced. We are able to maintain a consistent quality with good workmanship and strong construction.',
        },
    ];

    return (
        <>
            <HeroSection variant="withBreadcrumb" color="bg-[#BECBC3]" className="md:gap-3">
                <h1 className="text-2xl font-bold md:text-4xl">About Us</h1>
                <p className="text-xs md:text-base">
                    Horestco is a young but reputable company with a team that has many years of first hand experience in the furniture manufacturing
                    and hospitality industry
                </p>
            </HeroSection>

            <div className="my-5 text-center">
                <p className="text-muted-foreground">
                    We specialize in manufacturing genuine high quality and heavy-duty classic wooden and rattan furniture as well as innovative and
                    contemporary stainless steel and synthetic wicker furniture to furnish commercial spaces, hotels, resorts and restaurants. With
                    Kaizen, the Japanase philosophy of constant improvement as a guiding force, we continuously improve our products and services with
                    feedback from our clients. Nothing motivates us more than watching people happily using our furniture for years. Maintaining high
                    standards of production practices, we aspire to serve the hospitality market with a variety of choices, designs and materials to
                    choose from.
                </p>
            </div>

            <div className="my-5 flex flex-col gap-5">
                <h1 className="col-span-4 text-2xl font-bold">Why Choose Us?</h1>
                <p className="text-muted-foreground">
                    We listen to and understand a client's goals, concerns and the end-use of the furniture and its environment. We manufacture
                    furniture at highly competitive prices without compromising quality. We take pride in what we do and we only make what we are best
                    at. We will ensure that your furniture has been made only by the best craftsmen, skilled and dedicated in their craft. We are more
                    than willing to manufacture specific custom designs or custom make our standard furniture to suit our customer's needs. For a
                    selection of furniture that we have made for various projects, please visit our contract furniture page.
                </p>
            </div>

            <div className="my-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {dataContent.map((data, index) => (
                    <TextContent isBordered key={index} icon={data.icon} title={data.title} description={data.description} index={index} />
                ))}
            </div>
        </>
    );
};

export default AboutUsPage;
