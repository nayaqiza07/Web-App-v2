import { Paginate } from '@/components/atoms/Pagination/Paginate';
import BlogCard from '@/components/organisms/Card/BlogCard';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { EachUtils } from '@/lib/EachUtils';
import { useBlogStore } from '@/stores/useBlogStore';
import { useLoadingStore } from '@/stores/useLoadingStore';
import { usePage } from '@inertiajs/react';
import { NewspaperIcon } from 'lucide-react';
import SkeletonBlogPage from '../SkeletonPage/SkeletonBlogPage';

const BlogListPage = () => {
    const { isLoading } = useLoadingStore();
    const { blogs } = useBlogStore();

    const { component } = usePage();

    const thisComponentName = 'blog/BlogList';

    if (isLoading && component === thisComponentName) {
        return <SkeletonBlogPage />;
    }

    // console.log('Blog Page render:', component, isLoading);

    return (
        <>
            {/* Hero Section Start */}
            <HeroSection variant="withBreadcrumb" color="bg-[#EACFAE]" srcImage="/images/647567.jpg" altImage="Foto Blog">
                <h1 className="text-4xl font-bold">Blog</h1>
            </HeroSection>
            {/* Hero Section End */}

            {/* Blog List Start */}
            <div className="flex w-full flex-col justify-between gap-10">
                <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-5">
                    <EachUtils
                        emptyIcon={NewspaperIcon}
                        emptyTitle="No Blogs Found"
                        emptyDesc="Your search did not match any Blogs"
                        className="col-span-full"
                        of={blogs.data}
                        render={(_blog) => <BlogCard key={_blog.id} index={_blog.id} data={_blog} />}
                    />
                </div>
                {/* Blog List End*/}

                <Paginate data={blogs} />
            </div>
        </>
    );
};

export default BlogListPage;
