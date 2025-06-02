import BlogCard from '@/components/organisms/Card/BlogCard';
import HeroSection from '@/components/organisms/Section/HeroSection';

const BlogListPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            {/* Hero Section Start */}
            <HeroSection variant="withBreadcrumb" color="bg-[#EACFAE]" srcImage="/images/647567.jpg" altImage="Foto Blog"></HeroSection>
            {/* Hero Section End */}

            {/* Blog List Start */}
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <BlogCard key={index} />
                ))}
            </div>
            {/* Blog List End*/}
        </main>
    );
};

export default BlogListPage;
