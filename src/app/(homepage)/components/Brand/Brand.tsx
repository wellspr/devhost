import "./brand.scss";

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/(homepage)/images/logo/dev-host-logo.svg";

export const Brand = () => {

    return (
        <div className="brand">
            <div className="brand__logo">
                <Image src={logo} alt="dev host logo" fill />
            </div>
            <Link href={"/"}>Dev Host</Link>
        </div>
    );
}