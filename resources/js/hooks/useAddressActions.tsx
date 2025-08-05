import ToastSonner from '@/components/atoms/Toast/ToastSonner';
import { AddressType } from '@/types';
import { router } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';
import { useGeographicData } from './useGeographicData';

export const useAddressActions = ({ data, reset }: { data: AddressType; reset?: () => void }) => {
    const { countriesList, stateList, cityList, getNameById } = useGeographicData({
        countryId: data.country,
        currentStateId: data.state,
    });

    // Function for create specific user's address
    const handleCreateAddress: FormEventHandler = (e) => {
        e.preventDefault();
        const toastId = 'create-address';

        const submitData = {
            ...data,
            country: getNameById(countriesList, data.country),
            state: getNameById(stateList, data.state),
            city: getNameById(cityList, data.city),
        };

        router.post(route('address.store'), submitData, {
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

        router.patch(
            route('address.setDefault', { address: data.id }),
            {
                is_default: true,
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

        const submitData = {
            ...data,
            country: getNameById(countriesList, data.country),
            state: getNameById(stateList, data.state),
            city: getNameById(cityList, data.city),
        };

        router.put(route('address.update', { address: data.id }), submitData, {
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

        router.delete(route('address.destroy', { address: data.id }), {
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
