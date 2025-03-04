"use client";

import "./tech-slider.scss";

import Image from "next/image";

import js from "../../images/technologies/js.svg";
import nextjs from "../../images/technologies/nextjs.svg";
import reactjs from "../../images/technologies/react.svg";
import vuejs from "../../images/technologies/vue.svg";
import angularjs from "../../images/technologies/angular.svg";
import nodejs from "../../images/technologies/node-js.svg";
import docker from "../../images/technologies/docker.svg";
import laravel from "../../images/technologies/laravel.svg";
import django from "../../images/technologies/djangoproject-icon.svg";
import nuxt from "../../images/technologies/nuxtjs-icon.svg";
import svelte from "../../images/technologies/sveltetechnology-icon.svg";
import flask from "../../images/technologies/palletsprojects_flask-icon.svg";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { InfiniteSlider } from "@wellspr/slider";
import { useLayoutEffect, useRef } from "react";

type Logo = { id: number, image: StaticImport, alt: string }

const logos: Logo[] = [
    { id: 0, image: js, alt: "Javascript logo" },
    { id: 1, image: nextjs, alt: "Next js logo" },
    { id: 2, image: reactjs, alt: "React logo" },
    { id: 3, image: vuejs, alt: "Vue logo" },
    { id: 4, image: angularjs, alt: "Angular logo" },
    { id: 5, image: nodejs, alt: "Node logo" },
    { id: 6, image: docker, alt: "Docker logo" },
    { id: 7, image: laravel, alt: "Laravel logo" },
    { id: 8, image: django, alt: "Django logo" },
    { id: 9, image: nuxt, alt: "Nuxt logo" },
    { id: 10, image: svelte, alt: "Svelte logo" },
    { id: 11, image: flask, alt: "Flask logo" },
];

const Logo = ({ image, alt }: { image: StaticImport; alt: string }) => {
    return (
        <div className="logo">
            <Image src={image} alt={alt} fill />
        </div>
    );
};

export const TechSlider = () => {

    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const techSliderCurrent = ref.current;

        const adjustWidth = () => {
            const width = techSliderCurrent?.getBoundingClientRect().width;

            if (width) {
                const slider = techSliderCurrent.children[0] as HTMLElement;

                if (slider) {
                    slider.style.width = `${Math.floor(width / 100) * 100}px`;
                }
            }
        };

        adjustWidth();

        const observer = new ResizeObserver(() => {
            adjustWidth();
        });

        if (techSliderCurrent) {
            observer.observe(techSliderCurrent);
        }

        return () => {
            if (techSliderCurrent) {
                observer.unobserve(techSliderCurrent);
            }
        };
    }, []);

    const arr = logos.map(logo => {
        return (
            <Logo key={logo.id} alt={logo.alt} image={logo.image} />
        );
    });

    return (
        <div ref={ref} className="tech-slider-container">
            <InfiniteSlider arr={arr} className={`tech-slider`} translationStep="10rem" />
        </div>
    );
};