import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartActions } from '@/hooks/useCartActions';
import { Minus, Plus } from 'lucide-react';

interface QuantityButtonProps {
    cartId: number;
    quantity: number;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ cartId, quantity }) => {
    const { handleUpdateCart } = useCartActions();

    const handleChangeQty = (type: 'dec' | 'inc') => {
        const newQty = type === 'dec' ? Math.max(quantity - 1, 1) : quantity + 1;

        handleUpdateCart(cartId, newQty);
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
