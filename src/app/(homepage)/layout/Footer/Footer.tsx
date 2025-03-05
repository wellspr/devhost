import Link from "next/link";
import "./footer.scss";
import { IconBrandGithub } from "@tabler/icons-react";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content__links">
                    <Link className="footer__content__links__link-github"
                        href={"https://github.com/wellspr/devhost"}>
                        <span>View on Github</span>
                        <IconBrandGithub />
                    </Link>
                </div>
                <div className="footer__content__copy">
                    &copy; 2025 Dev Host - All rights reserved
                </div>
            </div>
        </footer>
    );
};