import HeroSection from '@/components/organisms/Section/HeroSection';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { EachUtils } from '@/lib/EachUtils';
import { truncateText } from '@/lib/utils';
import { useBlogStore } from '@/stores/useBlogStore';
import { Link } from '@inertiajs/react';
import { NewspaperIcon } from 'lucide-react';

const BlogDetailPage = () => {
    const { relatedBlogs, selectedBlog } = useBlogStore();

    return (
        <>
            {/* Hero Section Start */}
            <HeroSection variant="withBreadcrumb" color="bg-[#EACFAE]" srcImage={selectedBlog?.thumbnail} altImage="Foto Blog">
                <h1 className="text-2xl font-bold">{selectedBlog?.title}</h1>
            </HeroSection>
            {/* Hero Section End */}

            {/* Blog Content Start */}
            <div className="block md:grid md:grid-cols-[3fr_auto_1fr] md:gap-5">
                <article className="prose dark:prose-invert h-full max-w-none" dangerouslySetInnerHTML={{ __html: selectedBlog?.body ?? '' }} />

                <Separator orientation="vertical" className="via-border bg-gradient-to-b from-transparent to-transparent" />

                <aside className="h-full space-y-5">
                    <h3>Related Posts</h3>
                    <ScrollArea className="text-muted-foreground h-full text-xs">
                        <EachUtils
                            emptyIcon={NewspaperIcon}
                            emptyTitle="No Related Blogs Found"
                            emptyDesc=""
                            of={relatedBlogs}
                            render={(_blog) => (
                                <Link
                                    href={route('blogs.show', { slug: _blog.slug })}
                                    key={_blog.id}
                                    className="hover:text-foreground mb-3 flex gap-3"
                                >
                                    <img src={_blog.thumbnail} alt={`${_blog.title}`} loading="lazy" className="size-15 object-cover" />
                                    <p>{truncateText(_blog.title, 35)}</p>
                                </Link>
                            )}
                        />
                    </ScrollArea>
                </aside>
            </div>
            {/* Blog Content End */}
        </>
    );
};

export default BlogDetailPage;
