import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ActivityProps {
    orderText?: string;
    orderImage?: string;
    color?: string;
}

const Activity = ({ orderText = 'order-last', orderImage = 'md:order-last', color = 'bg-[#059669]' }: ActivityProps) => {
    return (
        <Card className="flex w-full flex-col justify-between rounded-2xl border bg-white p-4 md:h-[300px] md:flex-row">
            <div className={`${orderText} flex w-full flex-col items-center justify-center gap-6 rounded-xl py-7 md:py-0`}>
                <h3 className="text-center text-xl font-semibold text-[#333333]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h3>
                <Button variant="outline" className="font-bold text-[#4D4D4D]">
                    Learn More
                </Button>
            </div>

            <div className={`${orderImage} ${color} h-[200px] w-full rounded-xl border md:h-full`}></div>
        </Card>
    );
};

export default Activity;
