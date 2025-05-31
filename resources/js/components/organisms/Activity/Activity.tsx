import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ActivityProps {
    orderText?: string;
    orderImage?: string;
    srcImage?: string;
    altImage?: string;
}

const Activity = ({ orderText = 'order-last', orderImage = 'md:order-last', srcImage, altImage }: ActivityProps) => {
    return (
        <Card className="flex w-full flex-col justify-between rounded-2xl border p-2 md:h-[300px] md:flex-row">
            <div className={`${orderText} flex w-full flex-col items-center justify-center gap-6 rounded-xl py-7 md:py-0`}>
                <h3 className="text-center text-xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h3>
                <Button className="font-bold">Learn More</Button>
            </div>

            <div className={`${orderImage} h-[200px] w-full overflow-hidden rounded-xl border md:h-full`}>
                <img src={srcImage} alt={altImage} className="h-full w-full object-cover" />
            </div>
        </Card>
    );
};

export default Activity;
