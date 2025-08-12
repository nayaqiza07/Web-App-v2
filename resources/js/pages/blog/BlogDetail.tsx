import BlogDetailPage from '@/components/templates/Blog/BlogDetailPage';
import SkeletonDetailBlog from '@/components/templates/SkeletonPage/SkeletonDetailBlog';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { BlogData, BlogList } from '@/types';
import { Deferred, Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface BlogDetailProps {
    BLOG: BlogData;
    BLOGS: BlogList;
}

const BlogDetail: React.FC<BlogDetailProps> = (props) => {
    const { BLOGS, BLOG } = props;

    console.log(BLOGS);

    const { setBlogs, setSelectedBlog } = useBlogStore();

    useEffect(() => {
        if (BLOG) setSelectedBlog(BLOG);
    }, [BLOG, setSelectedBlog]);

    useEffect(() => {
        if (BLOGS) setBlogs(BLOGS);
    }, [BLOGS, setBlogs]);

    return (
        <>
            <Head title="Blog Detail" />

            <MainLayout>
                <Deferred data={['BLOG', 'BLOGS']} fallback={<SkeletonDetailBlog />}>
                    <BlogDetailPage />
                </Deferred>
            </MainLayout>
        </>
    );
};

export default BlogDetail;
