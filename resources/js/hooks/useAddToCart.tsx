import { Button, buttonVariants } from '@/components/ui/button';
import { cn, truncateText } from '@/lib/utils';
import { useCartStore } from '@/stores/useCartStore';
import { ProductData } from '@/types';
import { Link } from '@inertiajs/react';
import { CircleCheckIcon, XIcon } from 'lucide-react';
import { toast } from 'sonner';

export const useAddToCart = () => {
    const { addItem } = useCartStore();

    const handleAddToCart = (
        e: React.MouseEvent<HTMLButtonElement>,
        data: ProductData,
        quantity: number,
        setQuantity?: (quantity: number) => void,
    ) => {
        e.preventDefault();

        addItem({
            id: data?.id,
            thumbnail: data?.thumbnail,
            name: data?.name,
            slug: data?.slug,
            category: {
                name: data?.category.name,
                slug: data?.category.slug,
            },
            price: data?.price,
            quantity: quantity,
        });

        toast.custom((t) => (
            <div className="bg-popover z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
                <div className="flex gap-2">
                    <div className="flex grow gap-3">
                        <CircleCheckIcon className="mt-0.5 shrink-0 text-emerald-500" size={16} aria-hidden="true" />
                        <div className="flex grow flex-col gap-3">
                            <div className="space-y-1">
                                <p className="text-sm font-medium">You just added item to your cart</p>
                                <table className="text-muted-foreground text-xs">
                                    <tbody>
                                        <tr>
                                            <td>Item</td>
                                            <td className="px-2">:</td>
                                            <td>{truncateText(data.name, 23)}</td>
                                        </tr>
                                        <tr>
                                            <td>Quantity</td>
                                            <td className="px-2">:</td>
                                            <td>{quantity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href={route('cart')}
                                    as="button"
                                    className={cn(buttonVariants({ variant: 'default' }), 'h-fit w-fit rounded px-2 py-1 text-xs')}
                                >
                                    View Cart
                                </Link>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                            aria-label="Close notification"
                            onClick={() => toast.dismiss(t)}
                        >
                            <XIcon size={16} className="opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                        </Button>
                    </div>
                </div>
            </div>
        ));

        if (setQuantity) {
            setQuantity(1);
        }
    };
    return { handleAddToCart };
};
