import { easeOut, motion } from 'framer-motion';

interface TextContentProps {
    isBordered?: boolean;
    icon: React.ElementType;
    title: string;
    description: string;
    index?: number;
}

const TextContent: React.FC<TextContentProps> = ({
    isBordered = false,
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

    return (
        <motion.div
            custom={index}
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${isBordered && 'rounded-xl border p-3'} flex flex-col items-center gap-8 text-center font-bold md:items-start md:text-start`}
        >
            <div className="bg-card w-fit rounded-md border p-2">
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
