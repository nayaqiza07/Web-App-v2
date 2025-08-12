import { ToastCart } from '@/components/atoms/Toast/ToastCart';
import ToastSonner from '@/components/atoms/Toast/ToastSonner';
import { useQuantityButtonStore } from '@/stores/useQuantityButtonStore';
import { CartItemsType, NullableCartItemsType, ProductData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { useMemo } from 'react';
import { toast } from 'sonner';

export const useCartActions = () => {
    const { setQuantity } = useQuantityButtonStore();

    const { cart } = usePage().props;
    const typedCart: NullableCartItemsType = cart as NullableCartItemsType;

    const cartItems = useMemo(() => {
        return typedCart || ({ items: [], total_items: 0 } as CartItemsType);
    }, [typedCart]);

    const subTotalPrice = useMemo(() => {
        if (!cartItems || !cartItems.items) {
            return 0;
        }

        return cartItems.items.reduce((acc, _item) => acc + _item.product.price * _item.quantity, 0);
    }, [cartItems]);

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, data: ProductData, quantity: number) => {
        e.preventDefault();
        e.stopPropagation();

        const toastId = 'add-to-cart';

        router.post(
            route('cart.store'),
            {
                product_id: data?.id,
                quantity: quantity,
            },
            {
                preserveScroll: 'errors',
                only: ['cart'],
                onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Saving..." />, { id: toastId }),
                onSuccess: () =>
                    toast.custom(
                        (t) => <ToastCart toastId={t} message="You just added item to your cart" itemName={data.name} itemQuantity={quantity} />,
                        { id: toastId },
                    ),
                onError: (errors) => {
                    const firstError = Object.values(errors)[0];
                    toast.error(firstError);
                },
            },
        );

        if (setQuantity) {
            setQuantity(1);
        }
    };

    const handleUpdateCart = (cartId: number, newQuantity: number) => {
        if (newQuantity < 1) {
            return;
        }

        const toastId = 'update-quantity-cart';

        router.put(
            route('cart.update', { cartItem: cartId }),
            {
                quantity: newQuantity,
            },
            {
                preserveScroll: true,
                only: ['cart'],
                onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Updating..." />, { id: toastId }),
                onSuccess: () =>
                    toast.custom((t) => <ToastCart toastId={t} message="You just updated item on your cart" itemQuantity={newQuantity} />, {
                        id: toastId,
                    }),
                onError: (errors) => {
                    const firstError = Object.values(errors)[0];
                    toast.error(firstError);
                },
            },
        );
    };

    const handleRemoveCartItem = (cartId: number, productName: string) => {
        const toastId = 'delete-from-cart';

        router.delete(route('cart.destroy', { cartItem: cartId }), {
            preserveScroll: true,
            only: ['cart'],
            onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Deleting..." />, { id: toastId }),
            onSuccess: () =>
                toast.custom(
                    (t) => <ToastCart toastId={t} message="You just deleted item on your cart" itemName={productName} isViewLink={false} />,
                    {
                        id: toastId,
                    },
                ),
            onError: (errors) => {
                const firstError = Object.values(errors)[0];
                toast.error(firstError);
            },
        });
    };

    const handleClearAllCartItems = () => {
        const toastId = 'clear-all-item';

        router.delete(route('cart.clear'), {
            preserveScroll: true,
            only: ['cart'],
            onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Clearing..." />, { id: toastId }),
            onSuccess: () =>
                toast.custom((t) => <ToastCart toastId={t} message="All cart items has been cleared" isViewLink={false} />, {
                    id: toastId,
                }),
            onError: (errors) => {
                const firstError = Object.values(errors)[0];
                toast.error(firstError);
            },
        });
    };

    return { handleAddToCart, handleUpdateCart, handleRemoveCartItem, handleClearAllCartItems, cartItems, subTotalPrice };
};
