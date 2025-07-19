import ToastSonner from '@/components/atoms/Toast/ToastSonner';
import { usePage } from '@inertiajs/react';
import { toast } from 'sonner';

type FlashToastType = {
    success?: string;
    info?: string;
    error?: string;
};

export const useFlashToast = () => {
    const page = usePage();
    const flash = (page.props as { flash?: FlashToastType }).flash ?? {};

    if (flash.success) {
        toast.custom((t) => <ToastSonner toastId={t} variant="success" title={flash.success!} />);
    }
    if (flash.error) {
        toast.custom((t) => <ToastSonner toastId={t} variant="error" title={flash.error!} />);
    }
    if (flash.info) {
        toast.custom((t) => <ToastSonner toastId={t} variant="info" title={flash.info!} />);
    }
};
