import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICIOS_VISIBLES } from './servicios';

const pad = (n: number) => String(n).padStart(2, '0');

export default function NuestrosServicios() {
	return (
		<section id="nuestros-servicios">
			<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16" data-reveal>
				<div>
					<p className="eyebrow mb-8 sm:mb-10">
						<span className="eyebrow-index">02</span> Servicios
					</p>
					<h2 className="h-section max-w-[780px]">Soluciones concretas para cada etapa de tu gestión.</h2>
				</div>
				<p className="text-muted text-[17px] leading-relaxed m-0 max-w-[380px]">
					Consultoría, formación y soluciones digitales para mejorar la operación y la toma de decisiones.
				</p>
			</div>

			{/* Índice de servicios */}
			<ol className="list-none p-0 m-0 border-t border-line">
				{SERVICIOS_VISIBLES.map((s, i) => {
					const Icon = s.icon;
					return (
						<li
							key={s.id}
							id={`servicio-${s.id}`}
							itemScope
							itemType="https://schema.org/Service"
							className="group relative border-b border-line"
							data-reveal
						>
							<Link
								href={s.href ?? '/contacto'}
								aria-label={`${s.href ? 'Conocer más sobre' : 'Consultar por'} ${s.title}`}
								className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 sm:py-14 no-underline"
							>
								<div className="lg:col-span-6 flex gap-5 sm:gap-8">
									<span className="font-mono text-[12px] text-muted pt-3 transition-colors group-hover:text-primary">
										{pad(i + 1)}
									</span>
									<div>
										<h3
											className="m-0 text-[clamp(28px,3.4vw,48px)] font-medium leading-[1.04] tracking-[-0.035em] text-text [text-wrap:balance]"
											itemProp="name"
										>
											{s.title}
										</h3>
										<Icon className="w-6 h-6 mt-6 text-muted transition-colors group-hover:text-primary" strokeWidth={1.25} />
									</div>
								</div>

								<div className="lg:col-span-5 pl-[calc(12px+1.25rem)] sm:pl-[calc(12px+2rem)] lg:pl-0">
									<p className="text-muted text-[16px] leading-relaxed m-0 mb-6" itemProp="description">
										{s.description}
									</p>
									<ul className="list-none p-0 m-0 flex flex-wrap gap-2">
										{s.includes.map((item) => (
											<li
												key={item}
												className="px-3 py-1.5 rounded-full border border-line text-text text-[13px] leading-snug"
											>
												{item.replace(/\.$/, '')}
											</li>
										))}
									</ul>
								</div>

								<div className="hidden lg:flex lg:col-span-1 justify-end">
									<span className="grid place-items-center w-12 h-12 rounded-full border border-line text-text transition-colors duration-300 group-hover:bg-text group-hover:text-inverse group-hover:border-text">
										<ArrowUpRight className="w-5 h-5" />
									</span>
								</div>
							</Link>
						</li>
					);
				})}
			</ol>

			{/* Caso a medida */}
			<div
				className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-10 sm:mt-12"
				data-reveal
			>
				<p className="m-0 text-[clamp(20px,2vw,26px)] font-medium tracking-[-0.02em] text-text max-w-[620px]">
					¿Necesitás algo distinto?{' '}
					<span className="text-muted">Contanos tu desafío y diseñamos una solución a medida.</span>
				</p>
				<Link href="/contacto" className="group btn-primary shrink-0">
					Consultar mi caso
					<span className="btn-icon">
						<ArrowUpRight className="w-4 h-4" />
					</span>
				</Link>
			</div>
		</section>
	);
}
