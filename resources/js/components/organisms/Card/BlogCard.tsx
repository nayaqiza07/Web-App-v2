import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { truncateText } from '@/lib/utils';
import { easeOut, motion } from 'framer-motion';
import React from 'react';
import SkeletonBlogCard from '../Skeleton/SkeletonBlogCard';

interface BlogCardProps {
    isLoading?: boolean;
    index?: number;
    isCarousel?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ isLoading = false, index, isCarousel }) => {
    const blogCardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: easeOut,
            },
        }),
    };

    return isLoading ? (
        <SkeletonBlogCard />
    ) : (
        <motion.div custom={index} variants={blogCardVariants} initial={!isCarousel ? 'hidden' : false} animate="visible">
            <Card className="flex h-[125px] flex-row gap-3 overflow-hidden p-2 md:h-full md:flex-col">
                <CardContent className="relative overflow-hidden rounded-lg p-0 md:h-[150px]">
                    <img
                        src={`/images/image-0.jpg`}
                        alt={`Foto Produk ${`1`}`}
                        // loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                    />
                </CardContent>

                <CardFooter className="flex flex-col justify-between p-1 text-xs font-bold md:gap-3">
                    <h1 className="w-full">{truncateText('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, autem?', 30)}</h1>
                    <div className="text-muted-foreground flex w-full items-center justify-between">
                        <h3 className="order-last md:order-first">by Admin</h3>
                        <h3 className="text-end">20 June 2025</h3>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default BlogCard;
