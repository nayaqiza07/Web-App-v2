import { ReactNode } from 'react';

interface TextContentProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const TextContent = ({
    icon,
    title = 'Title',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic explicabo, sapiente beatae perspiciatis natus assumenda iure eaque',
}: TextContentProps) => {
    return (
        <div>
            <div className="flex flex-col items-center gap-8 text-center font-bold md:items-start md:text-start">
                <div className="bg-accent w-fit rounded border p-2">{icon}</div>
                <div className="flex flex-col gap-2">
                    <h1>{title}</h1>
                    <p className="text-muted-foreground text-xs">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TextContent;
