import RatingIcon from '@/components/atoms/Button/RatingIcon';
import { Separator } from '@/components/ui/separator';

const ReviewContent = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <RatingIcon />
                <p>Name • 01/01/01</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni exercitationem id a quo, laboriosam necessitatibus vero unde quod
                    provident ut ea nemo, voluptatibus facilis facere.
                </p>
            </div>
            <Separator className="my-3 last:hidden" />
        </>
    );
};

export default ReviewContent;
