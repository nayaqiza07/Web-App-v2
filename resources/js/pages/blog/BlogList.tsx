import BlogListPage from '@/components/templates/Blog/BlogListPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { BlogList as BlogListType } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface BlogListProps {
    BLOGS: BlogListType;
}

const BlogList: React.FC<BlogListProps> = (props) => {
    const { BLOGS } = props;

    const { setBlogs } = useBlogStore();

    useEffect(() => {
        if (BLOGS) {
            setBlogs(BLOGS);
        }
    }, [BLOGS, setBlogs]);

    return (
        <>
            <Head title="Blogs" />

            <MainLayout>
                {/* <Deferred data={'BLOGS'} fallback={<SkeletonDetailBlog />}> */}
                <BlogListPage />
                {/* </Deferred> */}
            </MainLayout>
        </>
    );
};

export default BlogList;
