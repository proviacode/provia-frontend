import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PUNTOS = [
	{ value: '+15 M', label: 'vehículos obligados a realizar la RTO' },
	{ value: '3 meses', label: 'hasta la habilitación comercial' },
	{ value: '3', label: 'modelos de inversión: propia, mixta o UTE' },
];

/**
 * Adelanto en el home de la página /rto.
 * Banda a todo el ancho: se ubica fuera del padding de <main> (ver app/page.tsx).
 */
export default function TalleresRTO() {
	return (
		<section id="talleres-rto" className="relative overflow-hidden bg-bg border-y border-line">
			{/* Grilla de fondo muy sutil */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.35]"
				style={{
					backgroundImage:
						'linear-gradient(rgb(var(--c-line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--c-line)) 1px, transparent 1px)',
					backgroundSize: '64px 64px',
					maskImage: 'radial-gradient(ellipse at 80% 0%, black, transparent 70%)',
					WebkitMaskImage: 'radial-gradient(ellipse at 80% 0%, black, transparent 70%)',
				}}
			/>

			<div className="relative max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-[120px] py-20 sm:py-28">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 lg:items-end" data-reveal>
					<div className="lg:col-span-7">
						<p className="eyebrow mb-8 sm:mb-10">Resolución 32/2026</p>
						<h2 className="h-display m-0 text-[clamp(32px,4.2vw,60px)]">Sumá la RTO/VTV a tu concesionaria o taller.</h2>
					</div>
					<div className="lg:col-span-4 lg:col-start-9">
						<p className="text-muted text-[17px] leading-relaxed m-0 mb-8">
							El Registro Nacional de Talleres RTO volvió a abrirse. Te acompañamos llave en mano: normativa,
							equipamiento homologado, diseño de la planta, capacitación y nuestro sistema CheckRTO.
						</p>
						<Link href="/rto" className="group btn-primary">
							Conocé el modelo
							<span className="btn-icon">
								<ArrowUpRight className="w-4 h-4" />
							</span>
						</Link>
					</div>
				</div>

				<dl className="grid grid-cols-1 sm:grid-cols-3 border-t border-line m-0 mt-16 sm:mt-24">
					{PUNTOS.map((p, i) => (
						<div
							key={p.label}
							className={`pt-6 sm:pt-8 pb-2 ${i > 0 ? 'mt-6 sm:mt-0 border-t border-line sm:border-t-0 sm:border-l sm:pl-8' : 'sm:pr-8'}`}
							data-reveal
							style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
						>
							<dd className="m-0 text-[clamp(40px,4.6vw,68px)] font-medium leading-none tracking-[-0.05em] text-text mb-4">
								{p.value}
							</dd>
							<dt className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted max-w-[260px]">{p.label}</dt>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
