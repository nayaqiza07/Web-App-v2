import HeroSection from '@/components/organisms/Section/HeroSection';
import { useEffect, useState } from 'react';

const BlogDetailPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Hero Section Start */}
            <HeroSection isLoading={isLoading} variant="withBreadcrumb" color="bg-[#EACFAE]" srcImage="/images/647567.jpg" altImage="Foto Blog">
                <h1 className="text-4xl font-bold">Title</h1>
            </HeroSection>
            {/* Hero Section End */}

            {/* Blog Content Start */}
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis molestiae obcaecati inventore cum itaque numquam nostrum
                    omnis reprehenderit quam asperiores, sed, deserunt vitae architecto iure esse ab harum fuga exercitationem? Consequatur dolores
                    quibusdam qui nemo repellat, veritatis adipisci rem. Assumenda enim non dolore optio magni ipsum similique repellendus amet. Ipsam
                    necessitatibus est pariatur harum, nihil consectetur aliquid reiciendis autem aliquam neque incidunt voluptates rerum molestias
                    quia quo animi optio enim blanditiis velit repellat, id dolore quas. Accusantium, dolore recusandae sit eveniet itaque hic
                    voluptatibus dignissimos nobis doloribus illum? Exercitationem, blanditiis. Distinctio, molestias perferendis! Veniam omnis ipsa
                    repellendus recusandae laborum!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis molestiae obcaecati inventore cum itaque numquam nostrum
                    omnis reprehenderit quam asperiores, sed, deserunt vitae architecto iure esse ab harum fuga exercitationem? Consequatur dolores
                    quibusdam qui nemo repellat, veritatis adipisci rem. Assumenda enim non dolore optio magni ipsum similique repellendus amet. Ipsam
                    necessitatibus est pariatur harum, nihil consectetur aliquid reiciendis autem aliquam neque incidunt voluptates rerum molestias
                    quia quo animi optio enim blanditiis velit repellat, id dolore quas. Accusantium, dolore recusandae sit eveniet itaque hic
                    voluptatibus dignissimos nobis doloribus illum? Exercitationem, blanditiis. Distinctio, molestias perferendis! Veniam omnis ipsa
                    repellendus recusandae laborum!
                </p>
            </div>
            {/* Blog Content End */}
        </>
    );
};

export default BlogDetailPage;
