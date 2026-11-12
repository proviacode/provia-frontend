import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PUNTOS = [
	{ value: '+15 M', label: 'vehículos obligados a realizar la RTO' },
	{ value: '3 meses', label: 'hasta la habilitación comercial' },
	{ value: '3 modelos', label: 'de inversión: propia, mixta o UTE' },
];

/** Adelanto en el home de la página /rto. */
export default function TalleresRTO() {
	return (
		<section id="talleres-rto" className="bg-bg rounded-[6px] p-6 sm:p-10 lg:p-14">
			<p className="text-primary text-[11px] font-medium tracking-[0.15em] uppercase mb-4">
				Nuevo · Resolución 32/2026
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 lg:items-end">
				<div>
					<h2 className="text-[clamp(28px,4.5vw,48px)] font-bold leading-tight tracking-tight text-text m-0 mb-4 sm:mb-6">
						Sumá la RTO a tu concesionaria o taller.
					</h2>
					<p className="text-[rgb(19,19,19)] text-base sm:text-lg font-light leading-relaxed m-0 max-w-[520px]">
						El Registro Nacional de Talleres RTO volvió a abrirse. Te acompañamos llave en mano: normativa,
						equipamiento homologado, diseño de la planta, capacitación y nuestro sistema CheckRTO.
					</p>
				</div>
				<div className="flex flex-col gap-8">
					<dl className="grid grid-cols-3 border-y border-gray-200 m-0">
						{PUNTOS.map((p, i) => (
							<div key={p.label} className={`py-5 ${i > 0 ? 'pl-4 sm:pl-6 border-l border-gray-200' : ''}`}>
								<dd className="m-0 text-[18px] sm:text-[24px] font-bold leading-tight text-text mb-2">{p.value}</dd>
								<dt className="text-muted text-[13px] font-light leading-snug">{p.label}</dt>
							</div>
						))}
					</dl>
					<Link
						href="/rto"
						className="group w-fit inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] bg-text text-white font-bold text-[17px] no-underline transition-colors hover:bg-black"
					>
						<span>Conocé el modelo</span>
						<span className="w-9 h-9 shrink-0 rounded-[4px] bg-white grid place-items-center text-text group-hover:bg-gray-200 transition-colors">
							<ArrowUpRight className="w-4 h-4" />
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
