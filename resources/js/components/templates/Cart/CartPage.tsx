import AccordionCart from '@/components/organisms/Accordion/AccordionCart';
import SummaryCartCard from '@/components/organisms/Card/SummaryCartCard';
import SummaryCartDrawer from '@/components/organisms/Drawer/SummaryCartDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

const CartPage = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                variant="withBreadcrumb"
                srcImage="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                altImage="Image Cart"
            >
                <h1 className="text-2xl font-bold md:text-4xl">Your Cart</h1>
            </HeroSection>

            <div className="grid gap-5 md:grid-cols-[2fr_auto_1fr]">
                <AccordionCart />
                <Separator orientation="vertical" className="via-border hidden bg-gradient-to-b from-transparent to-transparent md:block" />
                <SummaryCartCard />
                <SummaryCartDrawer />
                <Link href="/products" className={cn(buttonVariants({ variant: 'outline' }), 'bg-secondary')}>
                    • Continue Shopping? •
                </Link>
            </div>
        </>
    );
};

export default CartPage;
