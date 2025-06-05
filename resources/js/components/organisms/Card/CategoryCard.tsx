interface CategoryCardProps {
    srcImage: string;
    altImage: string;
    title: string;
}

const CategoryCard = ({ srcImage, altImage, title }: CategoryCardProps) => {
    return (
        <div className="group relative h-[240px] w-full overflow-hidden rounded-2xl border">
            <img
                src={srcImage}
                alt={altImage}
                // loading="lazy"
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-black/30">
                <h1 className="text-4xl font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">{title}</h1>
            </div>
        </div>
    );
};

export default CategoryCard;
