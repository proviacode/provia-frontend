import type { Metadata } from 'next';
import Soluciones from '@/components/Soluciones';
import QuienesSomos from '@/components/QuienesSomos';
import NuestrosServicios from '@/components/NuestrosServicios';
import PorqueElegirnos from '@/components/PorqueElegirnos';
import Contactanos from '@/components/Contactanos';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageCarouselScript from '@/components/PageCarouselScript';

const seoTitle = 'Provia Consulting | Consultoría Estratégica y Soluciones Integrales';
const seoDescription =
	'Consultora integral especializada en educación vial, revisión técnica vehicular y desarrollo de estrategias de negocios. Acompañamos a empresas, organismos y municipios en la modernización de procesos, optimizando la operación para ganar eficiencia, fortalecer la transparencia y habilitar un crecimiento sostenible.';

export const metadata: Metadata = {
	title: seoTitle,
	description: seoDescription,
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: seoTitle,
		description: seoDescription,
		url: '/',
	},
	twitter: {
		title: seoTitle,
		description: seoDescription,
	},
};

export default function Home() {
	return (
		<>
			<main className="w-full px-6 sm:px-8 md:px-12 lg:px-[120px] pt-0 pb-14">
				<Header />

				<div className="mb-16 sm:mb-24 md:mb-32 -mt-10">
					<Soluciones />
				</div>

				{/* Sección: ¿Quiénes somos? */}
				<div className="mb-24 sm:mb-32 md:mb-48 mt-16 sm:mt-24 md:mt-56">
					<QuienesSomos />
				</div>

				{/* Sección: Nuestros servicios */}
				<div className="mb-8 sm:mb-10 md:mb-12 mt-12 sm:mt-16 md:mt-24">
					<NuestrosServicios />
				</div>

				{/* Sección: ¿Por qué elegirnos? */}
				<div className="mb-16 sm:mb-20 md:mb-24">
					<PorqueElegirnos />
				</div>

				{/* Sección: Contáctanos */}
				<div className="mb-16 sm:mb-20 md:mb-24">
					<Contactanos />
				</div>
			</main>
			<Footer />

			<PageCarouselScript />
		</>
	);
}
