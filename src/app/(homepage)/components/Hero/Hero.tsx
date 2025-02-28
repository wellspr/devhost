import "./hero.scss";
import hosting from "../../images/hosting/4103163_1032.svg";

import { Header } from "../../layout/Header/Header";
import Image from "next/image";
import Link from "next/link";

const arr: number[] = [];
for (let i = 0; i < 80; i++) {
    arr.push(i);
}

export const Hero = () => {

    return (
        <div className="hero">
            <Header />

            <div className="tiles">
                {
                    arr.map((i) => {
                        return (
                            <div key={i} className="tiles__tile"></div>
                        )
                    })
                }

            </div>

            <div className="hero__content">
                <div className="hero__content__highlights">
                    <h2 className="hero__content__highlights__headline">Deploy Faster, Scale Smarter, Perform Better</h2>
                    <h3 className="hero__content__highlights__subheading">Powerful developer tools, zero infrastructure headaches, and 99.99% guaranteed uptime.</h3>

                    <div className="hero__content__highlights__cta">
                        <button className="hero__content__highlights__cta__button">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="hero__content__illustration">
                    <Image src={hosting} alt="cloud server web hosting" fill />
                    <span className="hero__content__illustration__attribution">
                        Designed by {" "}
                        <Link href={"https://www.freepik.com/author/fullvector"}>Fullvector</Link> {"/"}
                        <Link href={"https://www.freepik.com"} target="_blank">Freepik</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};