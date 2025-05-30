import HeroSection from '@/components/organisms/Section/HeroSection';

const BlogListPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            <HeroSection variant="withBreadcrumb" color="bg-[#EACFAE]"></HeroSection>
        </main>
    );
};

export default BlogListPage;
