import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { CircleCheckIcon, XIcon } from 'lucide-react';
import { toast } from 'sonner';

interface ToastCartProps {
    toastId: string | number;
    message: string;
    itemName?: string;
    itemQuantity?: number;
    isViewLink?: boolean;
}

export const ToastCart = ({ toastId, message, itemName, itemQuantity, isViewLink = true }: ToastCartProps) => {
    return (
        <div className="bg-popover z-50 max-w-[400px] rounded-md border p-4 shadow-lg md:w-[400px]">
            <div className="flex gap-2">
                <div className="flex grow gap-3">
                    <CircleCheckIcon className="mt-0.5 shrink-0 text-emerald-500" size={16} aria-hidden="true" />
                    <div className="flex grow flex-col gap-3">
                        <div className="space-y-1">
                            <p className="text-sm font-medium">{message}</p>
                            <table className="text-muted-foreground text-xs">
                                <tbody>
                                    {itemName && (
                                        <tr>
                                            <td>Item</td>
                                            <td className="px-2">:</td>
                                            <td>{itemName}</td>
                                        </tr>
                                    )}
                                    {itemQuantity && (
                                        <tr>
                                            <td>Quantity</td>
                                            <td className="px-2">:</td>
                                            <td>{itemQuantity}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {isViewLink && (
                            <div className="flex gap-2">
                                <Link
                                    href={route('cart.index')}
                                    as="button"
                                    className={cn(buttonVariants({ variant: 'default' }), 'h-fit w-fit rounded px-2 py-1 text-xs')}
                                >
                                    View Cart
                                </Link>
                            </div>
                        )}
                    </div>
                    <Button
                        variant="ghost"
                        className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                        aria-label="Close notification"
                        onClick={() => toast.dismiss(toastId)}
                    >
                        <XIcon size={16} className="opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
