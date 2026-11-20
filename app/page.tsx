import type { Metadata } from 'next';
import Soluciones from '@/components/Soluciones';
import QuienesSomos from '@/components/QuienesSomos';
import NuestrosServicios from '@/components/NuestrosServicios';
import CasosDeExito from '@/components/CasosDeExito';
import TalleresRTO from '@/components/TalleresRTO';
import PorqueElegirnos from '@/components/PorqueElegirnos';
import Contactanos from '@/components/Contactanos';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageCarouselScript from '@/components/PageCarouselScript';
import Reveal from '@/components/Reveal';

const seoTitle = 'Provia Consulting | Consultoría Estratégica';
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
			<main className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-[120px] pt-0 pb-8">
				<Header />

				<Soluciones />

				<div className="mt-24 sm:mt-32 lg:mt-40">
					<QuienesSomos />
				</div>

				<div className="mt-24 sm:mt-32 lg:mt-40">
					<NuestrosServicios />
				</div>

				{/* Adelanto de /rto: banda a todo el ancho */}
				<div className="mt-24 sm:mt-32 lg:mt-40 -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-[120px]">
					<TalleresRTO />
				</div>

				<div className="mt-24 sm:mt-32 lg:mt-40">
					<CasosDeExito />
				</div>

				<div className="mt-24 sm:mt-32 lg:mt-40">
					<PorqueElegirnos />
				</div>

				<div className="mt-24 sm:mt-32 lg:mt-40">
					<Contactanos />
				</div>
			</main>
			<Footer />

			<PageCarouselScript />
			<Reveal />
		</>
	);
}
