import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PROYECTOS_VISIBLES } from '@/components/proyectos';

const seoTitle = 'Proyectos | Provia Consulting';
const seoDescription =
	'Conocé los proyectos que desarrollamos en Provia Consulting: apps, plataformas web y sistemas de gestión funcionando hoy para organizaciones y empresas.';

export const metadata: Metadata = {
	title: seoTitle,
	description: seoDescription,
	alternates: {
		canonical: '/proyectos',
	},
	openGraph: {
		title: seoTitle,
		description: seoDescription,
		url: '/proyectos',
	},
	twitter: {
		title: seoTitle,
		description: seoDescription,
	},
};

const pad = (n: number) => String(n).padStart(2, '0');

export default function ProyectosPage() {
	return (
		<>
			<main className="w-full px-6 sm:px-8 md:px-12 lg:px-[120px] pt-0 pb-14">
				<Header isHomePage={false} activeSection="proyectos" />

				{/* Intro */}
				<section className="mb-16 sm:mb-24" itemScope itemType="https://schema.org/CollectionPage">
					<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Proyectos</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 lg:items-end">
						<h1
							className="text-[clamp(34px,5.5vw,58px)] font-bold leading-[1.1] tracking-tight text-text m-0 max-w-[560px]"
							itemProp="name"
						>
							Lo que construimos, funcionando hoy.
						</h1>
						<p
							className="text-text text-base sm:text-lg font-light leading-relaxed m-0 max-w-[520px]"
							itemProp="description"
						>
							Apps, plataformas y sistemas de gestión que desarrollamos de punta a punta para organizaciones y
							empresas.
						</p>
					</div>
				</section>

				{/* Listado */}
				<section aria-label="Listado de proyectos" className="mb-16 sm:mb-24">
					<ol className="list-none p-0 m-0 border-t border-line">
						{PROYECTOS_VISIBLES.map((p, i) => (
							<li
								key={p.id}
								id={`proyecto-${p.id}`}
								itemScope
								itemType="https://schema.org/CreativeWork"
								className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 py-10 sm:py-14 border-b border-line"
							>
								<div className="lg:col-span-7 lg:order-none">
									<img
										src={p.image.src}
										alt={p.image.alt}
										className="w-full aspect-[16/10] object-cover rounded-[6px] bg-bg"
										width={1600}
										height={1000}
										loading={i === 0 ? 'eager' : 'lazy'}
									/>
								</div>

								<div className="lg:col-span-5 flex flex-col">
									<p className="text-muted text-[13px] font-medium m-0 mb-3">
										<span className="tabular-nums">{pad(i + 1)}</span>
										<span className="mx-1.5 text-muted/40">/</span>
										{p.category}
										{p.year && (
											<>
												<span className="mx-1.5 text-muted/40">/</span>
												{p.year}
											</>
										)}
									</p>
									<h2
										className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight text-text m-0 mb-4"
										itemProp="name"
									>
										{p.name}
									</h2>
									<p
										className="text-text text-base font-light leading-relaxed m-0 mb-6"
										itemProp="description"
									>
										{p.summary}
									</p>

									<ul className="list-none p-0 m-0 flex flex-wrap gap-2 mb-6" aria-label="Qué desarrollamos">
										{p.tags.map((t) => (
											<li key={t} className="px-3 py-1.5 rounded-[4px] bg-bg text-text text-sm font-medium">
												{t}
											</li>
										))}
									</ul>

									{p.recognition && (
										<div className="flex items-start gap-3 border-l-2 border-primary bg-bg rounded-r-[4px] px-4 py-3 mb-6">
											<Award className="w-5 h-5 shrink-0 mt-0.5 text-primary" strokeWidth={1.75} />
											<div>
												<p className="text-text text-[15px] font-bold leading-snug m-0">{p.recognition.title}</p>
												<p className="text-muted text-[13px] font-light leading-snug m-0 mt-1">
													{p.recognition.detail}
												</p>
											</div>
										</div>
									)}

									<a
										href={p.url}
										target="_blank"
										rel="noopener noreferrer"
										className="group mt-auto w-fit inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] bg-text text-inverse font-medium text-[17px] no-underline transition-colors hover:bg-text/85"
									>
										<span>{p.cta}</span>
										<span className="w-9 h-9 shrink-0 rounded-[4px] bg-inverse grid place-items-center text-text group-hover:bg-inverse/80 transition-colors">
											<ArrowUpRight className="w-4 h-4" />
										</span>
									</a>
								</div>
							</li>
						))}
					</ol>
				</section>

				{/* Cierre */}
				<section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10 rounded-[6px] bg-bg p-6 sm:p-8 lg:p-10">
					<div className="max-w-[560px]">
						<h2 className="text-[clamp(22px,3vw,30px)] font-bold leading-tight tracking-tight text-text m-0 mb-2">
							¿Tenés un proyecto en mente?
						</h2>
						<p className="text-muted text-[15px] sm:text-base font-light leading-relaxed m-0">
							Contanos tu idea y la convertimos en una solución a medida.
						</p>
					</div>
					<Link
						href="/contacto"
						className="group w-fit shrink-0 inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] bg-text text-inverse font-bold text-[16px] no-underline transition-colors hover:bg-text/85"
					>
						<span>Contanos tu idea</span>
						<span className="w-9 h-9 shrink-0 rounded-[4px] bg-inverse grid place-items-center text-text group-hover:bg-inverse/80 transition-colors">
							<ArrowUpRight className="w-4 h-4" />
						</span>
					</Link>
				</section>
			</main>
			<Footer isHomePage={false} />
		</>
	);
}
