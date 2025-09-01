import BlogDetailPage from '@/components/templates/Blog/BlogDetailPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { BlogData } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface BlogDetailProps {
    BLOG: BlogData;
    RELATED_BLOGS: BlogData[];
}

const BlogDetail: React.FC<BlogDetailProps> = (props) => {
    const { RELATED_BLOGS, BLOG } = props;

    const { setRelatedBlogs, setSelectedBlog } = useBlogStore();

    useEffect(() => {
        if (BLOG) setSelectedBlog(BLOG);
    }, [BLOG, setSelectedBlog]);

    useEffect(() => {
        if (RELATED_BLOGS) setRelatedBlogs(RELATED_BLOGS);
    }, [RELATED_BLOGS, setRelatedBlogs]);

    return (
        <>
            <Head title="Blog Detail" />

            <MainLayout>
                {/* <Deferred data={['BLOG', 'RELATED_BLOGS']} fallback={<SkeletonDetailBlog />}> */}
                <BlogDetailPage />
                {/* </Deferred> */}
            </MainLayout>
        </>
    );
};

export default BlogDetail;
