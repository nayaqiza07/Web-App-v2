import { Badge } from '@/components/ui/badge';
import { XIcon } from 'lucide-react';
import { useState } from 'react';

interface BadgeTagProps {
    title?: string;
}

function BadgeTag({ title = 'Tag' }: BadgeTagProps) {
    const [isActive, setIsActive] = useState(true);

    if (!isActive) return null;

    return (
        <Badge variant="outline" className="cursor-default rounded-md px-2 py-1">
            <span>{title}</span>
            <button className="text-foreground/60 hover:text-foreground cursor-pointer" onClick={() => setIsActive(false)} aria-label="Delete">
                <XIcon size={14} aria-hidden={true} />
            </button>
        </Badge>
    );
}

export default BadgeTag;
