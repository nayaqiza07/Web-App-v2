import ToastSonner from '@/components/atoms/Toast/ToastSonner';
import { AddressType } from '@/types';
import { router } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';

export const useAddressActions = ({ data, reset }: { data: AddressType; reset?: () => void }) => {
    // Function for create specific user's address
    const handleCreateAddress: FormEventHandler = (e) => {
        e.preventDefault();

        router.post(route('address.store'), data, {
            preserveScroll: true,
            onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Saving..." />),
            onSuccess: () => {
                if (reset) reset();
            },
        });
    };

    // Function for set default the user's address
    const handleSetDefaultAddress = () => {
        router.put(
            route('address.setDefault', { id: data.id }),
            {
                id: data.id,
                is_active: true,
            },
            {
                preserveScroll: true,
                onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Updating..." />),
            },
        );
    };

    // Function for update specific user's address
    const handleUpdateAddress: FormEventHandler = (e) => {
        e.preventDefault();

        router.put(route('address.update', { id: data.id }), data, {
            preserveScroll: true,
            onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Updating..." />),
            onSuccess: () => {
                if (reset) reset();
            },
        });
    };

    // Function for delete the user's address
    const handleDeleteAddress = () => {
        router.delete(route('address.destroy', { id: data.id }), {
            data: { id: data.id },
            preserveScroll: true,
            onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Deleting..." />),
        });
    };

    return { handleCreateAddress, handleSetDefaultAddress, handleUpdateAddress, handleDeleteAddress };
};
