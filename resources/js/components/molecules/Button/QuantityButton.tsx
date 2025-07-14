import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/stores/useCartStore';
import { Minus, Plus } from 'lucide-react';

interface QuantityButtonProps {
    productId: number;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ productId }) => {
    const { updateQuantity, getQuantity } = useCartStore();

    const quantity = getQuantity(productId);

    const handleChangeQty = (type: 'dec' | 'inc') => {
        const newQty = type === 'dec' ? Math.max(quantity - 1, 1) : quantity + 1;
        updateQuantity(productId, newQty);
    };

    return (
        <div className="border-border flex w-fit overflow-hidden rounded-md border">
            <Button
                variant="secondary"
                size="icon"
                onClick={() => handleChangeQty('dec')}
                disabled={quantity <= 1}
                className="size-7 rounded-none border-none"
            >
                <Minus />
            </Button>
            <Input className="bg-input size-7 rounded-none p-1 text-center shadow-none" value={quantity} readOnly />
            <Button variant="secondary" size="icon" onClick={() => handleChangeQty('inc')} className="size-7 rounded-none border-none">
                <Plus />
            </Button>
        </div>
    );
};

export default QuantityButton;
