import { ArrowUpRight, Award } from 'lucide-react';

type Caso = {
	id: string;
	name: string;
	category: string;
	year: string;
	summary: string;
	stats: { value: string; label: string }[];
	recognition?: { title: string; detail: string };
	url: string;
	image: { src: string; alt: string };
};

const CASOS: Caso[] = [
	{
		id: 'ushuaia360',
		name: 'Ushuaia360',
		category: 'App web y mobile',
		year: '2026',
		summary:
			'App de senderismo para Tierra del Fuego con senderos GPS, vistas 360° y navegación sin señal. Desarrollamos la app para iOS y Android, el panel de gestión y la API.',
		stats: [
			{ value: 'App, web y API', label: 'Desarrollo completo' },
			{ value: 'iOS + Android', label: 'Publicada en ambas tiendas' },
			{ value: 'Sin señal', label: 'Funciona sin conexión' },
		],
		recognition: {
			title: 'Declarada de interés provincial, turístico y tecnológico',
			detail: 'Legislatura de Tierra del Fuego · Resolución N.º 252',
		},
		url: 'https://ushuaia360.com/links',
		image: {
			src: '/Images/casos/ushuaia360/ushuaia.jpg',
			alt: 'App Ushuaia360 para explorar senderos y lugares turísticos de Tierra del Fuego',
		},
	},
];

export default function CasosDeExito() {
	return (
		<section id="casos-de-exito" className="border-t border-gray-200 pt-6 sm:pt-8">
			<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Casos de éxito</p>
			<h2 className="text-[clamp(28px,4.5vw,48px)] font-bold leading-tight tracking-tight text-text m-0 mb-10 sm:mb-14">
				Proyectos reales, funcionando hoy.
			</h2>

			{CASOS.map((c) => (
				<article
					key={c.id}
					id={`caso-${c.id}`}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 lg:items-stretch"
					itemScope
					itemType="https://schema.org/CreativeWork"
				>
					<img
						src={c.image.src}
						alt={c.image.alt}
						className="w-full aspect-[16/9] lg:aspect-auto lg:h-full object-cover rounded-[6px]"
						width={1600}
						height={900}
						loading="lazy"
					/>

					<div className="flex flex-col">
						<p className="text-muted text-[13px] font-medium m-0 mb-3">
							{c.category} <span className="mx-1.5 text-gray-300">/</span> {c.year}
						</p>
						<h3
							className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight text-text m-0 mb-4"
							itemProp="name"
						>
							{c.name}
						</h3>
						<p
							className="text-[rgb(19,19,19)] text-base sm:text-lg font-light leading-relaxed m-0 mb-8 max-w-[520px]"
							itemProp="description"
						>
							{c.summary}
						</p>

						{c.recognition && (
							<div className="flex items-start gap-3 border-l-2 border-primary bg-bg rounded-r-[4px] px-4 py-3 mb-8 max-w-[520px]">
								<Award className="w-5 h-5 shrink-0 mt-0.5 text-primary" strokeWidth={1.75} />
								<div>
									<p className="text-text text-[15px] font-bold leading-snug m-0">{c.recognition.title}</p>
									<p className="text-muted text-[13px] font-light leading-snug m-0 mt-1">{c.recognition.detail}</p>
								</div>
							</div>
						)}

						<dl className="grid grid-cols-3 border-y border-gray-200 m-0 mb-8">
							{c.stats.map((s, i) => (
								<div key={s.label} className={`py-5 ${i > 0 ? 'pl-4 sm:pl-6 border-l border-gray-200' : ''}`}>
									<dd className="m-0 text-[18px] sm:text-[22px] font-bold leading-tight text-text mb-2">{s.value}</dd>
									<dt className="text-muted text-[13px] font-light leading-snug">{s.label}</dt>
								</div>
							))}
						</dl>

						<a
							href={c.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group w-fit inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] bg-text text-white font-bold text-[17px] no-underline transition-colors hover:bg-black"
						>
							<span>Ver proyecto</span>
							<span className="w-9 h-9 shrink-0 rounded-[4px] bg-white grid place-items-center text-text group-hover:bg-gray-200 transition-colors">
								<ArrowUpRight className="w-4 h-4" />
							</span>
						</a>
					</div>
				</article>
			))}
		</section>
	);
}
