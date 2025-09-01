import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

const CtaCard = () => {
    return (
        <>
            <Card className="bg-primary text-primary-foreground border-none p-4 text-center shadow-none">
                <CardContent className="p-0">Don’t stop now — discover more great finds!</CardContent>
                <CardFooter className="mt-auto p-0">
                    <Link
                        href="/products"
                        className={cn(buttonVariants({ variant: 'secondary' }), 'mx-auto bg-[#f3f4f6] text-xs text-[#4b5563] hover:bg-[#f3f4f6]/80')}
                    >
                        Keep Shopping
                    </Link>
                </CardFooter>
            </Card>
        </>
    );
};

export default CtaCard;
