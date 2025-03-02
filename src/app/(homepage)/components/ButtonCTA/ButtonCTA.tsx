import "./button-cta.scss";

import { content } from "@/config";
const { button_cta } = content;

export const ButtonCTAPrimary = () => {
    return (
        <button className="button-cta button-cta--primary">
            {button_cta.primary}
        </button>
    );
};

export const ButtonCTASecondary = () => {
    return (
        <button className="button-cta button-cta--secondary">
            {button_cta.secondary}
        </button>
    );
};