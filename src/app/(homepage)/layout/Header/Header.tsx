import "./header.scss";

import { links } from "@/config";
import Link from "next/link";
import { Brand } from "../../components/Brand";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
    return (
        <header className="header">
            <Brand />

            <nav className="header__nav">
                <ul className="header__nav__menu">
                    {
                        links.map(link => {
                            return (
                                <li key={link.id} className="header__nav__menu__item">
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className="header__nav__login">
                    <Link href={"#"}>Login</Link>
                </div>
            </nav>

            <HeaderMobile />
        </header>
    );
};