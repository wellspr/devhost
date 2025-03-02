"use client";

import "./infinite-slider.scss";

import { useEffect, useRef } from "react";

export const InfiniteSlider = ({
    arr,
    className,
}: {
    arr: React.JSX.Element[];
    className?: string
}) => {

    const wagon = useRef<HTMLDivElement>(null);
    const arrRef = useRef<React.JSX.Element[]>(arr);

    useEffect(() => {
        setInterval(() => {
            const wagonCurrent = wagon.current;

            if (wagonCurrent) {
                wagonCurrent.style.transform = `translateX(-10rem)`;
                wagonCurrent.style.transition = "all 1s ease-in-out";

                setTimeout(() => {
                    const head = wagonCurrent.firstChild as Node;
                    wagonCurrent.removeChild(head);
                    wagonCurrent.style.transform = "translateX(0)";
                    wagonCurrent.style.transition = "unset";
                    wagonCurrent.appendChild(head);
                }, 1000);
            }
        }, 4000);
        
    }, []);

    return (
        <div className={`infinite-slider ${className}`}>
            <div className="infinite-slider__wagon" ref={wagon}>
                {arrRef.current}
            </div>
        </div>
    );
};