import { easeOut, motion } from 'framer-motion';
import SkeletonTextContent from '../Skeleton/SkeletonTextContent';

interface TextContentProps {
    isLoading?: boolean;
    icon: React.ElementType;
    title: string;
    description: string;
    index?: number;
}

const TextContent: React.FC<TextContentProps> = ({
    isLoading = false,
    icon: Icon,
    title = 'Title',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic explicabo, sapiente beatae perspiciatis natus assumenda iure eaque',
    index,
}) => {
    const textContentVariants = {
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
        <SkeletonTextContent />
    ) : (
        <motion.div
            custom={index}
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center gap-8 text-center font-bold md:items-start md:text-start"
        >
            <div className="bg-card w-fit rounded border p-2">
                <Icon size={20} />
            </div>
            <div className="flex flex-col gap-2">
                <h1>{title}</h1>
                <p className="text-muted-foreground text-xs">{description}</p>
            </div>
        </motion.div>
    );
};

export default TextContent;
