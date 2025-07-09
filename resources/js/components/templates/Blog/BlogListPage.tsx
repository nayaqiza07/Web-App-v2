import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import BlogCard from '@/components/organisms/Card/BlogCard';
import HeroSection from '@/components/organisms/Section/HeroSection';
import SkeletonBlogCard from '@/components/organisms/Skeleton/SkeletonBlogCard';
import { useBlogStore } from '@/stores/useBlogStore';
import { useLoadingStore } from '@/stores/useLoadingStore';
import { NewspaperIcon } from 'lucide-react';

const BlogListPage = () => {
    const { isLoading } = useLoadingStore();
    const { blogs } = useBlogStore();

    return (
        <>
            {/* Hero Section Start */}
            <HeroSection isLoading={isLoading} variant="withBreadcrumb" color="bg-[#EACFAE]" srcImage="/images/647567.jpg" altImage="Foto Blog">
                <h1 className="text-4xl font-bold">Blog</h1>
            </HeroSection>
            {/* Hero Section End */}

            {/* Blog List Start */}
            <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-5">
                {isLoading ? (
                    Array.from({ length: 15 }).map((_, index) => <SkeletonBlogCard key={index} />)
                ) : blogs.length > 0 ? (
                    blogs.map((blog, index) => <BlogCard key={index} index={index} data={blog} />)
                ) : (
                    <EmptyState
                        icon={<NewspaperIcon size={50} />}
                        title="No Blogs Found"
                        desc="Your search did not match any Blogs"
                        btnText="Go to Blogs"
                        btnLink={route('blogs.index')}
                        className="col-span-full"
                    />
                )}
            </div>
            {/* Blog List End*/}
        </>
    );
};

export default BlogListPage;
