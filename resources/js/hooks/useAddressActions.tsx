import ToastSonner from '@/components/atoms/Toast/ToastSonner';
import { AddressType } from '@/types';
import { router } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';

export const useAddressActions = ({ data, reset }: { data: AddressType; reset?: () => void }) => {
    // Function for create specific user's address
    const handleCreateAddress: FormEventHandler = (e) => {
        e.preventDefault();
        const toastId = 'create-address;';

        router.post(route('address.store'), data, {
            preserveScroll: true,
            onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Saving..." />, { id: toastId }),
            onSuccess: () => {
                if (reset) reset();
                toast.dismiss(toastId);
            },
            onError: () => {
                toast.dismiss(toastId);
            },
        });
    };

    // Function for set default the user's address
    const handleSetDefaultAddress = () => {
        const toastId = 'set-default-address';
        router.put(
            route('address.setDefault', { id: data.id }),
            {
                id: data.id,
                is_active: true,
            },
            {
                preserveScroll: true,
                onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Updating..." />, { id: toastId }),
                onSuccess: () => {
                    toast.dismiss(toastId);
                },
                onError: () => {
                    toast.dismiss(toastId);
                },
            },
        );
    };

    // Function for update specific user's address
    const handleUpdateAddress: FormEventHandler = (e) => {
        e.preventDefault();
        const toastId = 'update-address';

        router.put(route('address.update', { id: data.id }), data, {
            preserveScroll: true,
            onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Updating..." />, { id: toastId }),
            onSuccess: () => {
                if (reset) reset();
                toast.dismiss(toastId);
            },
            onError: () => {
                toast.dismiss(toastId);
            },
        });
    };

    // Function for delete the user's address
    const handleDeleteAddress = () => {
        const toastId = 'delete-address';

        router.delete(route('address.destroy', { id: data.id }), {
            data: { id: data.id },
            preserveScroll: true,
            onStart: () => toast.custom((t) => <ToastSonner toastId={t} variant="process" title="Deleting..." />, { id: toastId }),
            onSuccess: () => {
                toast.dismiss(toastId);
            },
            onError: () => {
                toast.dismiss(toastId);
            },
        });
    };

    return { handleCreateAddress, handleSetDefaultAddress, handleUpdateAddress, handleDeleteAddress };
};
