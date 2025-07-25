import BlogDetailPage from '@/components/templates/Blog/BlogDetailPage';
import SkeletonDetailBlog from '@/components/templates/SkeletonPage/SkeletonDetailBlog';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { BlogData } from '@/types';
import { Deferred, Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface BlogDetailProps {
    BLOG: BlogData;
}

const BlogDetail: React.FC<BlogDetailProps> = (props) => {
    const { BLOG } = props;

    const { setSelectedBlog } = useBlogStore();

    useEffect(() => {
        if (BLOG) setSelectedBlog(BLOG);
    }, [BLOG, setSelectedBlog]);

    return (
        <>
            <Head title="Blog Detail" />

            <MainLayout>
                <Deferred data={'BLOG'} fallback={<SkeletonDetailBlog />}>
                    <BlogDetailPage />
                </Deferred>
            </MainLayout>
        </>
    );
};

export default BlogDetail;
