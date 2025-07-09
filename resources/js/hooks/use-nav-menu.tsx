import { usePage } from '@inertiajs/react';

export function useNavMenu() {
    const { url } = usePage();
    const isProductsActive = url.includes('/products');
    const isBlogActive = url.includes('/blog');

    return [
        { title: 'Home', linkTo: 'home' },
        { title: 'Products', linkTo: 'products.index', isActive: isProductsActive },
        { title: 'Services', linkTo: 'services' },
        { title: 'Blog', linkTo: 'blog.index', isActive: isBlogActive },
        { title: 'About Us', linkTo: 'about-us' },
        { title: 'Contact Us', linkTo: 'contact-us' },
    ];
}
