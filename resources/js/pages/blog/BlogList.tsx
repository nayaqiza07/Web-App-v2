import BlogListPage from '@/components/templates/Blog/BlogListPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const BlogList = () => {
    return (
        <>
            <Head title="Blog" />

            <MainLayout>
                <BlogListPage />
            </MainLayout>
        </>
    );
};

export default BlogList;
