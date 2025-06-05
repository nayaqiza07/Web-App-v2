import { useState } from 'react';

interface NavData {
    title: string;
    linkTo: string;
}
interface TryNavProps {
    data: NavData[];
}

const TryNav = ({ data }: TryNavProps) => {
    type NavRef = HTMLButtonElement | null;
    const [navRefs, _] = useState<NavRef[]>([]);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const hoveredNav = navRefs[hoveredIdx ?? -1]?.getBoundingClientRect();

    return (
        <nav className="relative">
            {data.map((nav, index) => (
                <button
                    ref={(e) => {
                        navRefs[index] = e;
                    }}
                    className="z-10 px-3 py-1.5 font-medium"
                    onPointerEnter={() => setHoveredIdx(index)}
                >
                    {nav.title}
                </button>
            ))}

            {hoveredNav ? (
                <button
                    className="absolute top-0 left-0 rounded-md bg-red-500"
                    style={{ top: hoveredNav.top, left: hoveredNav.left, width: hoveredNav.width, height: hoveredNav.height }}
                />
            ) : null}
        </nav>
    );
};

export default TryNav;
