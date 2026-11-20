import { Users, BadgeCheck, MonitorCog, LineChart, Route } from 'lucide-react';

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

export default function PorqueElegirnos() {
	return (
		<section id="porque-elegirnos">
			<ol className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-[16px] overflow-hidden" data-reveal>
				{/* Celda de título */}
				<li className="bg-page p-6 sm:p-10 flex flex-col justify-between min-h-[300px] md:col-span-2 lg:col-span-1">
					<p className="eyebrow">
						<span className="eyebrow-index">04</span> Por qué elegirnos
					</p>
					<div className="mt-12">
						<h2 className="h-section text-[clamp(30px,3.4vw,46px)]">Excelencia, innovación y transparencia.</h2>
						<p className="text-muted text-[16px] leading-relaxed m-0 mt-5 max-w-[380px]">
							Un equipo profesional, orientado a resultados y comprometido con el crecimiento de tu organización.
						</p>
					</div>
				</li>

				{RAZONES.map(({ icon: Icon, title, text }, i) => (
					<li
						key={title}
						className="group relative bg-page p-6 sm:p-10 md:last:col-span-2 lg:last:col-span-1 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] transition-colors duration-300 hover:bg-bg"
					>
						<div className="flex items-start justify-between">
							<span className="grid place-items-center w-11 h-11 rounded-full border border-line text-muted transition-colors duration-300 group-hover:text-primary group-hover:border-primary/40">
								<Icon className="w-5 h-5" strokeWidth={1.5} />
							</span>
							<span className="font-mono text-[12px] text-muted">{pad(i + 1)}</span>
						</div>
						<div className="mt-12">
							<h3 className="text-[22px] sm:text-[24px] font-medium leading-snug tracking-[-0.02em] text-text m-0 mb-2">
								{title}
							</h3>
							<p className="text-muted text-[15px] leading-relaxed m-0">{text}</p>
						</div>
					</li>
				))}
			</ol>
		</section>
	);
}
