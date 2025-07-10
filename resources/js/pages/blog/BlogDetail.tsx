import BlogDetailPage from '@/components/templates/Blog/BlogDetailPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { Blog } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface BlogDetailProps {
    BLOG: Blog;
}

const BlogDetail: React.FC<BlogDetailProps> = (props) => {
    const { BLOG } = props;

    const { setSelectedBlog } = useBlogStore();

    useEffect(() => {
        try {
            setSelectedBlog(BLOG);
        } catch (error) {
            console.log(error);
        }
    }, [BLOG, setSelectedBlog]);

    return (
        <>
            <Head title="Blog Detail" />

            <MainLayout>
                <BlogDetailPage />
            </MainLayout>
        </>
    );
};

export default BlogDetail;
