import HeroSection from '@/components/organisms/Section/HeroSection';
import { useBlogStore } from '@/stores/useBlogStore';
import { useLoadingStore } from '@/stores/useLoadingStore';

const BlogDetailPage = () => {
    const { isLoading } = useLoadingStore();

    const { selectedBlog } = useBlogStore();

    console.log(selectedBlog);

    return (
        <>
            {/* Hero Section Start */}
            <HeroSection isLoading={isLoading} variant="withBreadcrumb" color="bg-[#EACFAE]" srcImage={selectedBlog?.thumbnail} altImage="Foto Blog">
                <h1 className="text-2xl font-bold">{selectedBlog?.title}</h1>
            </HeroSection>
            {/* Hero Section End */}

            {/* Blog Content Start */}
            <article className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: selectedBlog?.body ?? '' }} />
            {/* Blog Content End */}
        </>
    );
};

export default BlogDetailPage;
