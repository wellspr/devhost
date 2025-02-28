import { Hero } from "./components/Hero";

export default function Home() {
	return (
		<div className="homepage">
			
			<section id="hero" className="hero">
				<Hero />
			</section>

			<section id="features" className="features"></section>

			<section id="pricing" className="pricing"></section>

			<section id="performance" className="performance"></section>

			<section id="tools" className="tools"></section>

			<section id="testimonials" className="testimonials"></section>

			<section id="resources" className="resources"></section>

			<section id="cta" className="cta"></section>
		</div>
	);
}