"use client";

import { links } from "@/config";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const HeaderMobile = () => {

    const [show, setShow] = useState<boolean>(false);

    return (
        <nav className="header__nav__mobile">
            <button className="header__nav__mobile__button"
                onClick={() => setShow(!show)}>
                <IconMenu2 />
            </button>

            <SlidingMenu show={show} setShow={setShow} />
        </nav>
    );
};

const SlidingMenu = ({
    show,
    setShow
}: {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";

            const current = ref.current;

            if (current) {
                current.querySelector(".sliding-menu__menu")?.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [show]);

    useEffect(() => {
        const current = ref.current;

        const onResize = () => {
            setShow(false);
        };

        if (current) {
            current.style.display = "block";
        }

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, [setShow]);

    return (
        <div
            className={
                show ?
                    "sliding-menu sliding-menu--show" :
                    "sliding-menu"
            }
            ref={ref}>
            <button className="sliding-menu__button"
                onClick={() => setShow(false)}>
                <IconX />
            </button>

            <ul className="sliding-menu__menu">
                <div className="sliding-menu__menu__login">
                    <Link href={"#"}>Login</Link>
                </div>
                {
                    links.map(link => {
                        return (
                            <li key={link.id} className="sliding-menu__menu__item"
                                onClick={() => {
                                    setTimeout(() => {
                                        setShow(false);
                                    }, 100)
                                }}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};