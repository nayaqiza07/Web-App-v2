import { Button } from '@/components/ui/button';
import { CircleAlertIcon, CircleCheckIcon, InfoIcon, XIcon } from 'lucide-react';
import { toast } from 'sonner';

interface ToastSonnerProps {
    variant: string;
    title: string;
    description?: string;
}

const ToastSonner: React.FC<ToastSonnerProps> = ({ variant, title, description }) => {
    return toast.custom((t) => (
        <div className="bg-popover z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
            <div className="flex gap-2">
                <div className="flex grow gap-3">
                    {variant === 'success' && <CircleCheckIcon className="mt-0.5 shrink-0 text-emerald-500" size={16} aria-hidden="true" />}

                    {variant === 'info' && <InfoIcon className="mt-0.5 shrink-0 text-blue-500" size={16} aria-hidden="true" />}

                    {variant === 'error' && <CircleAlertIcon className="mt-0.5 shrink-0 text-red-500" size={16} aria-hidden="true" />}

                    <div className="flex grow flex-col gap-3">
                        <div className="space-y-1">
                            <p className="text-sm font-medium">{title}</p>
                            <p className="text-sm font-medium">{description}</p>
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
};

export default ToastSonner;
