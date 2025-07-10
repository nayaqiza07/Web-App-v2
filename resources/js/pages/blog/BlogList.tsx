import BlogListPage from '@/components/templates/Blog/BlogListPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { Blog } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface BlogListProps {
    BLOGS: Blog[];
}

const BlogList: React.FC<BlogListProps> = (props) => {
    const { BLOGS } = props;

    const { setBlogs } = useBlogStore();

    useEffect(() => {
        try {
            setBlogs(BLOGS);
        } catch (error) {
            console.log(error);
        }
    }, [BLOGS, setBlogs]);

    return (
        <>
            <Head title="Blogs" />

            <MainLayout>
                <BlogListPage />
            </MainLayout>
        </>
    );
};

export default BlogList;
