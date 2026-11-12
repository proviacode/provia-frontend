import Link from 'next/link';
import { ArrowUpRight, Users, BadgeCheck, MonitorCog, LineChart, Route } from 'lucide-react';

const pad = (n: number) => String(n).padStart(2, '0');

const RAZONES = [
	{
		icon: Users,
		title: 'Un equipo multidisciplinario',
		text: 'Tecnología, gestión, capacitación y asesoramiento legal-contable en un mismo equipo, sin intermediarios.',
	},
	{
		icon: BadgeCheck,
		title: 'Experiencia comprobable',
		text: '15 años trabajando con empresas, organismos y municipios, con proyectos que hoy están funcionando.',
	},
	{
		icon: MonitorCog,
		title: 'Tecnología propia',
		text: 'Desarrollamos nuestras propias plataformas, como CheckRTO, y herramientas a medida para cada organización.',
	},
	{
		icon: LineChart,
		title: 'Resultados medibles',
		text: 'Definimos objetivos e indicadores claros desde el inicio para que puedas ver el impacto de cada proyecto.',
	},
	{
		icon: Route,
		title: 'Acompañamiento de punta a punta',
		text: 'Del diagnóstico a la puesta en marcha, con soporte continuo y mejora constante una vez implementado.',
	},
];

const DATOS = [
	{ value: '15+', label: 'años de experiencia' },
	{ value: '+100', label: 'clientes acompañados' },
];

export default function PorqueElegirnos() {
	return (
		<section id="porque-elegirnos" className="border-t border-gray-200 pt-6 sm:pt-8">
			<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Ventajas competitivas</p>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
				{/* Columna izquierda */}
				<div className="lg:col-span-5 flex flex-col">
					<h2 className="text-[clamp(28px,4.5vw,48px)] font-bold leading-tight tracking-tight text-text m-0 mb-4 sm:mb-6">
						¿Por qué elegirnos?
					</h2>
					<p className="text-[rgb(19,19,19)] text-base sm:text-lg font-light leading-relaxed m-0 mb-8 sm:mb-10 max-w-[460px]">
						Trabajamos con <span className="font-medium text-text">excelencia, innovación y transparencia</span>:
						un equipo profesional, orientado a resultados y comprometido con el crecimiento de tu organización.
					</p>

					<dl className="grid grid-cols-2 border-y border-gray-200 m-0 mb-8 sm:mb-10 max-w-[460px]">
						{DATOS.map((d, i) => (
							<div key={d.label} className={`py-5 ${i > 0 ? 'pl-6 border-l border-gray-200' : ''}`}>
								<dd className="m-0 text-[clamp(36px,5vw,52px)] font-bold leading-none tracking-tight text-primary mb-2">
									{d.value}
								</dd>
								<dt className="text-muted text-[13px] sm:text-sm font-light">{d.label}</dt>
							</div>
						))}
					</dl>

					<Link
						href="/contacto"
						className="group w-fit inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] bg-text text-white font-bold text-[17px] no-underline transition-colors hover:bg-black"
					>
						<span>Trabajemos juntos</span>
						<span className="w-9 h-9 shrink-0 rounded-[4px] bg-white grid place-items-center text-text group-hover:bg-gray-200 transition-colors">
							<ArrowUpRight className="w-4 h-4" />
						</span>
					</Link>
				</div>

				{/* Columna derecha: razones */}
				<ol className="lg:col-span-7 list-none p-0 m-0 border-t border-gray-200">
					{RAZONES.map(({ icon: Icon, title, text }, i) => (
						<li
							key={title}
							className="group relative grid grid-cols-[auto_1fr] sm:grid-cols-[56px_1fr_auto] gap-x-5 sm:gap-x-6 items-start py-6 sm:py-8 border-b border-gray-200"
						>
							<span
								aria-hidden
								className="absolute left-0 top-[-1px] h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
							/>
							<span className="text-[13px] font-medium tabular-nums text-muted pt-1.5">{pad(i + 1)}</span>
							<div>
								<h3 className="text-[19px] sm:text-[22px] font-bold leading-snug text-text m-0 mb-2">{title}</h3>
								<p className="text-muted text-[15px] font-light leading-relaxed m-0 max-w-[520px]">{text}</p>
							</div>
							<Icon
								className="hidden sm:block w-6 h-6 mt-1 text-text/30 transition-colors duration-300 group-hover:text-primary"
								strokeWidth={1.5}
							/>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
