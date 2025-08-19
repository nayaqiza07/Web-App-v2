import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';

export const Banner = () => {
    return (
        <div className="bg-primary text-primary-foreground px-4 py-1">
            <p className="flex justify-center text-sm">
                <Link href={'/products'} className="group">
                    Free Shipping on orders over $99
                    <ArrowRightIcon
                        className="ms-2 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        aria-hidden="true"
                    />
                </Link>
            </p>
        </div>
    );
};
