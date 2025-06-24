import { Star, StarHalf } from 'lucide-react';

const RatingIcon = () => {
    return (
        <div className="relative">
            <div className="flex gap-0.5">
                {Array.from({ length: 5 }, () => (
                    <Star size={15} fill="#CFD5E1" strokeWidth={0} />
                ))}
            </div>
            <div className="absolute top-0 flex gap-0.5">
                <Star size={15} fill="#FFD45F" strokeWidth={0} />
                <Star size={15} fill="#FFD45F" strokeWidth={0} />
                <StarHalf size={15} fill="#FFD45F" strokeWidth={0} />
            </div>
        </div>
    );
};

export default RatingIcon;
