import { Card, CardContent, CardFooter } from '@/components/ui/card';

const BlogCard = () => {
    const truncateText = (text: string, maxLength: number = 50): string => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <Card className="flex h-[125px] flex-row gap-3 overflow-hidden p-2 md:h-full md:flex-col">
            <CardContent className="relative overflow-hidden rounded-lg p-0 md:h-[200px]">
                <img
                    src={`/images/image-0.jpg`}
                    alt={`Foto Produk ${`1`}`}
                    // loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-200 hover:scale-125"
                />
            </CardContent>

            <CardFooter className="flex flex-col justify-between p-1 text-xs font-bold md:gap-6">
                <h1 className="text-base">{truncateText('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, autem?')}</h1>
                <div className="flex w-full items-center justify-between">
                    <h3 className="text-muted-foreground order-last md:order-first">by Admin</h3>
                    <h3 className="text-muted-foreground text-end">20 June 2025</h3>
                </div>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
