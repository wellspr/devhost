import "./hero.scss";
import hosting from "../../images/hosting/4103163_1032.svg";

import { Header } from "../../layout/Header";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/config";
import { ButtonCTAPrimary, ButtonCTASecondary } from "../ButtonCTA";
import { TechSlider } from "../TechSlider";

const arr: number[] = [];
for (let i = 0; i < 80; i++) {
    arr.push(i);
}

export const Hero = () => {
    const { hero } = content;

    return (
        <div className="hero">
            <Header />

            <div className="tiles">
                {
                    arr.map((i) => {
                        return (
                            <div key={i} className="tiles__tile" />
                        );
                    })
                }
            </div>

            <div className="hero__content">
                <div className="hero__content__highlights">
                    <h2 className="hero__content__highlights__headline">
                        {hero.headline}
                    </h2>
                    <h3 className="hero__content__highlights__subheading">
                        {hero.subheading}
                    </h3>

                    <div className="hero__content__highlights__cta">
                        <ButtonCTAPrimary />
                        <ButtonCTASecondary />
                    </div>

                    <TechSlider />
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