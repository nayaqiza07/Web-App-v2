import { Breadcrumbs } from '@/components/breadcrumbs';
import AccordionInformation from '@/components/organisms/Accordion/AccordionInformation';
import CarouselImageProduct from '@/components/organisms/Carousel/CarouselImageProduct';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { MapPin, MessagesSquare, Send } from 'lucide-react';

const ProductDetailPage = () => {
    const breadcrumbs = useBreadcrumb();
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <div className="flex flex-col gap-6 md:flex-row">
                {/* Right Content */}
                <div className="flex h-[416px] w-full flex-col gap-3 lg:flex-row">
                    <div className="order-last mx-auto flex w-[260px] items-center justify-center lg:order-first lg:w-fit">
                        <CarouselImageProduct orientation={window.innerWidth >= 1024 ? 'vertical' : 'horizontal'} />
                    </div>

                    <div className="order-first h-[416px] w-full items-center overflow-hidden rounded-2xl lg:order-last">
                        <div className="h-full w-full bg-[url(/images/image-18.jpg)] bg-cover bg-center"></div>
                    </div>
                </div>

                {/* Left Content */}
                <div className="flex w-full flex-col gap-4 lg:w-2/3">
                    <Badge variant={'outline'} className="font-bold">
                        Free Shipping
                    </Badge>
                    <h1 className="text-2xl font-semibold">Title</h1>
                    <p className="flex gap-4 font-bold">
                        <span>Rp. 1.000.000</span>
                        <span className="text-[#666666] line-through">Rp.1.500.000</span>
                    </p>
                    <div className="flex gap-5 rounded-xl border p-3 md:flex-col lg:flex-row">
                        <p className="flex text-xs">
                            <MapPin size={20} />
                            <span>Pickup</span>
                        </p>
                        <p className="flex text-xs">
                            <Send size={20} />
                            <span>Ships</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border px-4 py-3 text-xs">
                        <MessagesSquare size={20} />
                        <span>Need Some Help? Contact Us</span>
                    </div>
                    <Button>Checkout</Button>
                </div>
            </div>

            <AccordionInformation />
        </main>
    );
};

export default ProductDetailPage;
