import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { Button, buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/app/MainLayout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon, SquareArrowOutUpRightIcon } from 'lucide-react';

function ErrorPage({ status, message }: { status: number; message?: string }) {
    console.log(status);
    const defaultTitles: Record<number, string> = {
        503: '503 | Service Unavailable',
        500: '500 | Server Error',
        408: '408 | Request Timeout',
        404: '404 | Page Not Found',
        403: '403 | Forbidden',
        401: '401 | Unauthorized',
    };

    const defaultDescriptions: Record<number, string> = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        408: 'Sorry, this request takes too long to process.',
        404: "Sorry, the page you are looking for doesn't exist.",
        403: 'Sorry, you are forbidden from accessing this page.',
        401: 'Whoops, you need to login first.',
    };

    const title = defaultTitles[status] ?? `${status} Error`;
    const description = message ?? defaultDescriptions[status];

    const linkContent = [
        {
            id: 'about-us',
            title: 'About Us',
            description:
                'Horestco is a young but reputable company with a team that has many years of first hand experience in the furniture manufacturing and hospitality industry',
            href: 'about-us',
            className: 'hover:text-primary row-span-2 flex h-full flex-col',
        },
        {
            id: 'support',
            title: 'Support',
            description: 'Need help with something? Check out our most frequently asked questions',
            href: 'support.index',
            className: 'hover:text-primary flex h-full flex-col',
        },
        {
            id: 'contact-us',
            title: 'Contact Us',
            description: 'Feel free to contact us or even better visit us',
            href: 'contact-us.indexOnContactUs',
            className: 'hover:text-primary flex h-full flex-col',
        },
    ];

    const visit = () => {
        history.back();
    };

    return (
        <>
            <Head title={String(status)} />
            <MainLayout>
                <div className="bg-background relative flex w-full items-center justify-center rounded-lg md:py-10">
                    <div className="flex flex-col items-center justify-center gap-5 py-10">
                        <div className="space-y-2 text-center">
                            <h1 className="text-4xl uppercase md:text-5xl lg:text-6xl">{title}</h1>
                            <p className="text-muted-foreground text-xl">{description}</p>
                        </div>

                        <p className="mt-10 text-center">Go to other sections to learn more about Horestco</p>
                        <div className="grid h-full w-full gap-3 md:grid-cols-2 md:grid-rows-2">
                            {linkContent.map((_content) => (
                                <Link
                                    key={_content.id}
                                    href={route(_content.href)}
                                    className={cn(_content.className, buttonVariants({ variant: 'secondary' }), 'h-full p-3')}
                                >
                                    <div className="inline-flex w-full items-start justify-between gap-3 self-start text-2xl">
                                        {_content.title}
                                        <SquareArrowOutUpRightIcon />
                                    </div>
                                    <p className="text-muted-foreground h-full w-full text-wrap">{_content.description}</p>
                                </Link>
                            ))}
                        </div>
                        <Button onClick={visit} className="w-full md:w-fit md:self-start">
                            <ArrowLeftIcon />
                            Go Back
                        </Button>
                    </div>

                    <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={1}
                        repeatDelay={1}
                        className={cn(
                            '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
                            'inset-x-0 inset-y-[-30%] h-[150%] skew-y-12',
                        )}
                    />
                </div>
            </MainLayout>
        </>
    );
}

export default ErrorPage;
