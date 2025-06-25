import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';
import SkeletonActivity from '../Skeleton/SkeletonActivity';

interface ActivityProps {
    isLoading?: boolean;
    text?: string;
    btnLink?: string;
    orderText?: string;
    orderImage?: string;
    srcImage?: string;
    altImage?: string;
}

const Activity: React.FC<ActivityProps> = ({
    isLoading = false,
    text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis rem similique! Maxime suscipit modi et? Assumenda, voluptas quod animi, impedit itaque eligendi dolore numquam rerum magnam architecto minus nostrum!',
    btnLink,
    orderText = 'order-last',
    orderImage = 'md:order-last',
    srcImage,
    altImage,
}) => {
    return isLoading ? (
        <SkeletonActivity />
    ) : (
        <motion.div
            initial={{ opacity: 0, x: orderImage === 'md:order-first' ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            <Card className="flex w-full flex-col justify-between rounded-2xl border p-2 md:h-[300px] md:flex-row">
                <div className={`${orderText} flex w-full flex-col items-center justify-center gap-6 rounded-xl py-7 md:py-0`}>
                    <h3 className="text-center text-xl font-semibold">{text}</h3>

                    <Link href={btnLink ?? '#'}>
                        <Button className="font-bold">Learn More</Button>
                    </Link>
                </div>

                <div className={`${orderImage} h-[200px] w-full overflow-hidden rounded-xl border md:h-full`}>
                    <img src={srcImage} alt={altImage} className="h-full w-full object-cover" />
                </div>
            </Card>
        </motion.div>
    );
};

export default Activity;
