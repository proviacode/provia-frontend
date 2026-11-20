import Link from 'next/link';
import { ArrowUpRight, Award } from 'lucide-react';
import { PROYECTOS_VISIBLES } from './proyectos';

const CASOS = PROYECTOS_VISIBLES.filter((p) => p.destacado);

export default function CasosDeExito() {
	return (
		<section id="casos-de-exito">
			<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16" data-reveal>
				<div>
					<p className="eyebrow mb-8 sm:mb-10">
						<span className="eyebrow-index">03</span> Proyectos
					</p>
					<h2 className="h-section max-w-[760px]">Proyectos reales, funcionando hoy.</h2>
				</div>
				<Link href="/proyectos" className="group btn-ghost shrink-0">
					Ver todos los proyectos
					<span className="btn-icon">
						<ArrowUpRight className="w-4 h-4" />
					</span>
				</Link>
			</div>

			<div className="flex flex-col gap-8">
				{CASOS.map((c) => (
					<article
						key={c.id}
						id={`caso-${c.id}`}
						className="group overflow-hidden rounded-[16px] border border-line bg-bg"
						itemScope
						itemType="https://schema.org/CreativeWork"
						data-reveal
					>
						{/* Imagen */}
						<a
							href={c.url}
							target="_blank"
							rel="noopener noreferrer"
							className="relative block overflow-hidden"
							aria-label={`${c.cta}: ${c.name}`}
						>
							<img
								src={c.image.src}
								alt={c.image.alt}
								className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
								width={2100}
								height={900}
								loading="lazy"
							/>
							<span className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-page/80 backdrop-blur font-mono text-[11px] uppercase tracking-[0.06em] text-text">
								{c.category}
								{c.year && <> · {c.year}</>}
							</span>
						</a>

						{/* Info */}
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 p-6 sm:p-10">
							<div className="lg:col-span-5">
								<h3
									className="m-0 mb-4 text-[clamp(32px,4vw,56px)] font-medium leading-none tracking-[-0.04em] text-text"
									itemProp="name"
								>
									{c.name}
								</h3>
								<p className="text-muted text-[17px] leading-relaxed m-0" itemProp="description">
									{c.summary}
								</p>
							</div>

							<div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
								{c.recognition && (
									<div className="flex items-start gap-3">
										<Award className="w-5 h-5 shrink-0 mt-0.5 text-primary" strokeWidth={1.5} />
										<div>
											<p className="text-text text-[15px] font-medium leading-snug m-0">{c.recognition.title}</p>
											<p className="text-muted text-[13px] leading-snug m-0 mt-1">{c.recognition.detail}</p>
										</div>
									</div>
								)}

								{c.stats && (
									<dl className="grid grid-cols-3 border-y border-line m-0">
										{c.stats.map((s, i) => (
											<div key={s.label} className={`py-5 ${i > 0 ? 'pl-4 border-l border-line' : 'pr-4'}`}>
												<dd className="m-0 text-[15px] sm:text-[17px] font-medium leading-tight text-text mb-1.5">
													{s.value}
												</dd>
												<dt className="text-muted text-[13px] leading-snug">{s.label}</dt>
											</div>
										))}
									</dl>
								)}

								<a href={c.url} target="_blank" rel="noopener noreferrer" className="group/btn btn-primary">
									{c.cta}
									<span className="btn-icon group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
										<ArrowUpRight className="w-4 h-4" />
									</span>
								</a>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
