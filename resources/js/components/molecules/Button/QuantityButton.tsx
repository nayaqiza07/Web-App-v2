import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const QuantityButton = () => {
    const [qty, setQty] = useState<number>(1);
    const handleChangeQty = (type: 'dec' | 'inc') => {
        if (type === 'dec') {
            setQty((prevQty) => prevQty - 1);
        } else {
            setQty((prevQty) => prevQty + 1);
        }
    };

    return (
        <div className="border-border flex w-fit overflow-hidden rounded-md border">
            <Button
                variant="secondary"
                size="icon"
                onClick={() => handleChangeQty('dec')}
                disabled={qty <= 1}
                className="size-8 rounded-none border-none"
            >
                <Minus />
            </Button>
            <Input className="bg-input size-8 rounded-none p-1 text-center shadow-none" value={qty} disabled />
            <Button variant="secondary" size="icon" onClick={() => handleChangeQty('inc')} className="size-8 rounded-none border-none">
                <Plus />
            </Button>
        </div>
    );
};

export default QuantityButton;
