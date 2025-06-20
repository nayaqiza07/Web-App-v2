import BlogCard from '@/components/organisms/Card/BlogCard';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { useEffect, useState } from 'react';

const BlogListPage = () => {
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
                <h1 className="text-4xl font-bold">Blog</h1>
            </HeroSection>
            {/* Hero Section End */}

            {/* Blog List Start */}
            <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-5">
                {Array.from({ length: 15 }).map((_, index) => (
                    <BlogCard isLoading={isLoading} key={index} index={index} />
                ))}
            </div>
            {/* Blog List End*/}
        </>
    );
};

export default BlogListPage;
