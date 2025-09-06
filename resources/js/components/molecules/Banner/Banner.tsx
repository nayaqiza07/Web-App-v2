import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';

export const Banner = () => {
    return (
        <div className="bg-background text-foreground px-4 py-1">
            <p className="flex justify-center text-sm">
                <Link href={'/products'} className="group">
                    Free Shipping for all Online Orders!
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
