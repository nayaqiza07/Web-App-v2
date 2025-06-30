import { usePage } from '@inertiajs/react';

export function useNavMenu() {
    const { url } = usePage();
    const isProductsActive = url.includes('/products');

    return [
        { title: 'Home', linkTo: 'home' },
        { title: 'Products', linkTo: 'products.index', isActive: isProductsActive },
        { title: 'Services', linkTo: 'services' },
        { title: 'Blog', linkTo: 'blog' },
        { title: 'About Us', linkTo: 'about-us' },
        { title: 'Contact Us', linkTo: 'contact-us' },
    ];
}
