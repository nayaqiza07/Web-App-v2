import BlogDetailPage from '@/components/templates/Blog/BlogDetailPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const BlogDetail = () => {
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
