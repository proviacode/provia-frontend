import type { Metadata } from 'next';
import Script from 'next/script';
import { ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const seoTitle = 'Contacto | Provia Consulting';
const seoDescription =
	'Hablá con el equipo de Provia Consulting. Contanos tu desafío y te acompañamos con soluciones de consultoría a medida para tu organización.';

export const metadata: Metadata = {
	title: seoTitle,
	description: seoDescription,
	alternates: {
		canonical: '/contacto',
	},
	openGraph: {
		title: seoTitle,
		description: seoDescription,
		url: '/contacto',
	},
	twitter: {
		title: seoTitle,
		description: seoDescription,
	},
};

export default function ContactoPage() {
	return (
		<>
			<main className="w-full px-6 sm:px-8 md:px-12 lg:px-[120px] pt-0 pb-14">
				<Header isHomePage={false} />

				<section itemScope itemType="https://schema.org/ContactPage" className="mb-16 sm:mb-24 md:mb-32">
					<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Contacto</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
						{/* Columna izquierda: título + opciones de contacto */}
						<div className="flex flex-col">
							<h1 className="text-[clamp(36px,6vw,64px)] font-bold leading-[1.05] tracking-tight text-text mb-4 sm:mb-6 m-0">
								Contáctanos
							</h1>
							<p className="text-[rgb(19,19,19)] text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10 max-w-[480px] m-0">
								Nuestro equipo está listo para conversar sobre tu desafío. Escribinos y te conectamos con la
								persona indicada.
							</p>

							<div className="flex flex-col gap-4">
								<div className="bg-[#f6f8fb] rounded-[4px] p-6">
									<div className="flex items-center justify-between gap-4 flex-wrap">
										<div>
											<h2 className="text-lg font-bold text-text mb-1 m-0">Hablá con nuestro equipo</h2>
											<p className="text-muted text-sm font-light m-0">Llamanos para conversar sobre tu proyecto.</p>
										</div>
										<a
											href="tel:+543415964249"
											className="group shrink-0 inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-[4px] border border-gray-300 bg-white text-text font-medium text-sm no-underline transition-colors hover:border-gray-400"
										>
											Llamar ahora
											<span className="w-7 h-7 shrink-0 rounded-[4px] bg-gray-100 grid place-items-center group-hover:bg-gray-200 transition-colors">
												<ArrowUpRight className="w-3.5 h-3.5" />
											</span>
										</a>
									</div>
								</div>

								<div className="bg-[#f6f8fb] rounded-[4px] p-6">
									<div className="flex items-center justify-between gap-4 flex-wrap">
										<div>
											<h2 className="text-lg font-bold text-text mb-1 m-0">Escribinos directo</h2>
											<p className="text-muted text-sm font-light m-0">Para consultas generales.</p>
										</div>
										<a
											href="mailto:proviasoporte@gmail.com"
											className="group shrink-0 inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-[4px] border border-gray-300 bg-white text-text font-medium text-sm no-underline transition-colors hover:border-gray-400"
										>
											Enviar email
											<span className="w-7 h-7 shrink-0 rounded-[4px] bg-gray-100 grid place-items-center group-hover:bg-gray-200 transition-colors">
												<ArrowUpRight className="w-3.5 h-3.5" />
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Columna derecha: formulario */}
						<div>
							<h2 className="text-[clamp(24px,3.5vw,36px)] font-bold leading-tight tracking-tight text-text mb-6 sm:mb-8 m-0">
								Las oportunidades están aquí. ¿Por qué esperar?
							</h2>
							<ContactForm />
						</div>
					</div>
				</section>
			</main>
			<Footer isHomePage={false} />

			<Script src="/scripts/contact-form.js" strategy="afterInteractive" />
		</>
	);
}
