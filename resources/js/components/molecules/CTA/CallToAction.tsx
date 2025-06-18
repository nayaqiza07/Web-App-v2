import { Button } from '@/components/ui/button';

const CallToAction = () => {
    return (
        <div className="flex h-[240px] w-full flex-col items-center justify-center gap-7 rounded-2xl border bg-[#2563eb] px-10">
            <h3 className="text-center text-2xl font-bold text-white">Designing and innovation for a safer life at home</h3>
            <Button className="bg-black/30 text-white hover:bg-black/50">Go Shopping</Button>
        </div>
    );
};

export default CallToAction;
