import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button variant="outline" size="icon" onClick={ScrollToTop} className="hidden rounded-full lg:flex">
            <ArrowUp />
        </Button>
    );
};

export default ScrollToTopButton;
