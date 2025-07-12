import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { truncateText } from '@/lib/utils';
import { BlogData } from '@/types';
import { Link } from '@inertiajs/react';
import { easeOut, motion } from 'framer-motion';
import React from 'react';

interface BlogCardProps {
    index?: number;
    isCarousel?: boolean;
    data: BlogData;
}

const BlogCard: React.FC<BlogCardProps> = ({ index, isCarousel, data }) => {
    const blogCardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: easeOut,
            },
        }),
    };

    return (
        <motion.div
            custom={index}
            variants={blogCardVariants}
            initial={!isCarousel ? 'hidden' : false}
            whileInView="visible"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            animate={{
                scale: 1,
                transition: {
                    duration: 0.2,
                },
            }}
            viewport={{ once: true }}
        >
            <Link href={route('blogs.show', { slug: data.slug })}>
                <Card className="flex h-[125px] flex-row gap-3 overflow-hidden p-2 md:h-full md:flex-col">
                    <CardContent className="relative w-[150px] overflow-hidden rounded-lg p-0 md:h-[150px] md:w-full">
                        <img
                            src={data.thumbnail}
                            alt={`Foto Produk ${data.title}`}
                            // loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                        />
                    </CardContent>

                    <CardFooter className="flex min-h-20 flex-col justify-between p-1 text-xs font-bold md:gap-3">
                        <h1 className="w-full">{truncateText(data.title, 35)}</h1>
                        <div className="text-muted-foreground flex w-full items-center justify-between">
                            <h3 className="order-last md:order-first">by Horestco</h3>
                            <h3 className="text-end">{data.published_at}</h3>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </motion.div>
    );
};

export default BlogCard;
