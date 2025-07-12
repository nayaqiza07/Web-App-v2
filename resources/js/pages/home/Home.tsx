import Homepage from '@/components/templates/Home/Homepage';
import MainLayout from '@/layouts/app/MainLayout';
import { useBlogStore } from '@/stores/useBlogStore';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { Blog, Category, ProductList } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface HomeProps {
    PRODUCTS: ProductList;
    CATEGORIES: Category[];
    BLOGS: Blog[];
}

const Home: React.FC<HomeProps> = (props) => {
    const { PRODUCTS, CATEGORIES, BLOGS } = props;

    const { setProducts } = useProductStore();
    const { setCategories } = useCategoryStore();
    const { setBlogs } = useBlogStore();

    useEffect(() => {
        try {
            setProducts(PRODUCTS);
            setCategories(CATEGORIES);
            setBlogs(BLOGS);
        } catch (error) {
            console.log(error);
        }
    }, [PRODUCTS, CATEGORIES, BLOGS, setProducts, setCategories, setBlogs]);

    return (
        <>
            <Head title="Home" />
            <MainLayout>
                <Homepage />
            </MainLayout>
        </>
    );
};

export default Home;
