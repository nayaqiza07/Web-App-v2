import { buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/app/MainLayout';
import { Head, Link } from '@inertiajs/react';

function ErrorPage({ status }: { status: number }) {
    console.log(status);
    const title = {
        503: '503: Service Unavailable',
        500: '500: Server Error',
        404: '404: Page Not Found',
        403: '403: Forbidden',
    }[status];

    const description = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }[status];

    return (
        <>
            <Head title={String(status)} />
            <MainLayout>
                <div className="flex min-h-screen flex-col items-center justify-center gap-5">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link href={route('home')} className={buttonVariants({ variant: 'default' })}>
                        Get Back
                    </Link>
                </div>
            </MainLayout>
        </>
    );
}

export default ErrorPage;
