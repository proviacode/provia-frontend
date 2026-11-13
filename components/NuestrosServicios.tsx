import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICIOS_VISIBLES } from './servicios';

const pad = (n: number) => String(n).padStart(2, '0');

export default function NuestrosServicios() {
	return (
		<section id="nuestros-servicios" className="border-t border-gray-200 pt-6 sm:pt-8">
			{/* Encabezado */}
			<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Nuestros servicios</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-14 lg:items-end mb-10 sm:mb-14">
				<h2 className="text-[clamp(28px,4.5vw,48px)] font-bold leading-tight tracking-tight text-text m-0">
					Soluciones concretas para cada etapa de tu gestión.
				</h2>
				<p className="text-[rgb(19,19,19)] text-base sm:text-lg font-light leading-relaxed m-0 max-w-[520px]">
					Acompañamos a empresas, organismos e instituciones con consultoría, formación y soluciones digitales
					para mejorar la operación y la toma de decisiones.
				</p>
			</div>

			{/* Grilla de servicios */}
			<ol className="list-none p-0 m-0 grid grid-cols-1 lg:grid-cols-3 border-t border-l border-gray-200">
				{SERVICIOS_VISIBLES.map((s, i) => {
					const Icon = s.icon;
					return (
						<li
							key={s.id}
							id={`servicio-${s.id}`}
							itemScope
							itemType="https://schema.org/Service"
							className="group relative flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-5 border-r border-b border-gray-200 bg-white p-6 sm:p-8 transition-colors duration-300 hover:bg-bg"
						>
							<span
								aria-hidden
								className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
							/>

							<div className="flex items-center justify-between mb-8 sm:mb-10">
								<span className="text-[13px] font-medium tabular-nums text-muted">{pad(i + 1)}</span>
								<Icon
									className="w-6 h-6 text-text/40 transition-colors duration-300 group-hover:text-primary"
									strokeWidth={1.5}
								/>
							</div>

							<h3 className="text-[20px] sm:text-[22px] font-bold leading-snug text-text mb-3 m-0" itemProp="name">
								{s.title}
							</h3>
							<p className="text-muted text-[15px] font-light leading-relaxed mb-6 m-0" itemProp="description">
								{s.description}
							</p>

							<ul className="list-none p-0 m-0 mb-8 space-y-2.5 border-t border-gray-200 pt-5">
								{s.includes.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<span className="mt-[9px] w-1.5 h-1.5 shrink-0 bg-primary" />
										<span className="text-text text-[15px] font-light leading-relaxed">{item}</span>
									</li>
								))}
							</ul>

							<Link
								href={s.href ?? '/contacto'}
								aria-label={`Consultar por ${s.title}`}
								className="mt-auto lg:self-end inline-flex w-fit items-center gap-2 text-text text-[15px] font-bold no-underline"
							>
								<span className="border-b border-transparent transition-colors group-hover:border-text">
									Consultar
								</span>
								<span className="w-8 h-8 rounded-[4px] bg-gray-100 grid place-items-center transition-colors group-hover:bg-text group-hover:text-white">
									<ArrowUpRight className="w-4 h-4" />
								</span>
							</Link>
						</li>
					);
				})}
			</ol>

			{/* Cierre */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-8 sm:mt-10">
				<p className="text-text text-base sm:text-lg font-light leading-relaxed m-0 max-w-[560px]">
					¿Tu organización necesita algo distinto? Diseñamos soluciones a medida para cada desafío.
				</p>
				<Link
					href="/contacto"
					className="group w-fit inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] bg-text text-white font-bold text-[17px] no-underline transition-colors hover:bg-black"
				>
					<span>Consultar ahora</span>
					<span className="w-9 h-9 shrink-0 rounded-[4px] bg-white grid place-items-center text-text group-hover:bg-gray-200 transition-colors">
						<ArrowUpRight className="w-4 h-4" />
					</span>
				</Link>
			</div>
		</section>
	);
}
