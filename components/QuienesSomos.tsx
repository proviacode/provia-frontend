const PASOS = [
	{ title: 'Diagnóstico', desc: 'Entendemos tu organización y sus procesos antes de proponer nada.' },
	{ title: 'Diseño y desarrollo', desc: 'Construimos la solución junto a tu equipo, con entregas claras.' },
	{ title: 'Implementación y acompañamiento', desc: 'Capacitamos, ponemos en marcha y damos soporte continuo.' },
];

const DISCIPLINAS = ['Ingeniería', 'Tecnología', 'Gestión pública', 'Economía', 'Derecho'];

export default function QuienesSomos() {
	return (
		<section id="quienes-somos" itemScope itemType="https://schema.org/AboutPage">
			<p className="eyebrow mb-10 sm:mb-14" data-reveal>
				<span className="eyebrow-index">01</span> Quiénes somos
			</p>

			{/* Manifiesto */}
			<p
				className="m-0 max-w-[1200px] text-[clamp(24px,3.4vw,48px)] font-medium leading-[1.12] tracking-[-0.03em] [text-wrap:pretty]"
				itemProp="description"
				data-reveal
			>
				<span className="text-text">Somos una consultora integral.</span>{' '}
				<span className="text-muted/70">
					Acompañamos a empresas, organismos y municipios en la digitalización y modernización de sus procesos,
				</span>{' '}
				<span className="text-text">con soluciones que ganan en eficiencia, transparencia y seguridad.</span>
			</p>

			{/* Imagen + enfoque */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mt-16 sm:mt-24">
				<div className="lg:col-span-5" data-reveal>
					<img
						className="block w-full aspect-[4/3] lg:aspect-[4/5] object-cover rounded-[14px] grayscale-[40%]"
						src="/Images/equipo.jpg"
						alt="Equipo de Provia Consulting trabajando en el desarrollo de soluciones de software"
						width={800}
						height={1000}
						loading="lazy"
					/>
				</div>

				<div className="lg:col-span-6 lg:col-start-7 flex flex-col" data-reveal>
					<h2 className="m-0 text-[clamp(26px,2.6vw,36px)] font-medium leading-tight tracking-[-0.025em] text-text [text-wrap:balance]">
						Tecnología y gestión para modernizar organizaciones.
					</h2>
					<p className="text-muted text-[17px] leading-relaxed m-0 mt-5 max-w-[520px]">
						Combinamos experiencia técnica y conocimiento de gestión para construir herramientas sólidas,
						prácticas y sostenibles en el tiempo.
					</p>

					<p className="eyebrow mt-12 mb-4">Un equipo multidisciplinario</p>
					<ul className="list-none p-0 m-0 border-t border-line" aria-label="Disciplinas del equipo">
						{DISCIPLINAS.map((d, i) => (
							<li
								key={d}
								className="group flex items-baseline justify-between py-4 border-b border-line text-[clamp(20px,2vw,26px)] font-medium tracking-[-0.02em] text-text"
							>
								<span className="transition-transform duration-300 group-hover:translate-x-1.5">{d}</span>
								<span className="font-mono text-[12px] text-muted">{String(i + 1).padStart(2, '0')}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Cómo trabajamos: línea de tiempo */}
			<div className="mt-20 sm:mt-28">
				<p className="eyebrow mb-10" data-reveal>
					Cómo trabajamos
				</p>
				<ol className="relative list-none p-0 m-0 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
					{/* Línea que une los pasos */}
					<span aria-hidden className="hidden md:block absolute left-0 right-0 top-[5px] h-px bg-line" />
					{PASOS.map((p, i) => (
						<li
							key={p.title}
							className="relative pl-6 md:pl-0 border-l border-line md:border-l-0"
							data-reveal
							style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
						>
							<span
								aria-hidden
								className="absolute -left-[6px] md:left-0 top-0 w-[11px] h-[11px] rounded-full border border-primary bg-page"
							/>
							<span className="block font-mono text-[12px] text-primary md:mt-10 mb-4">Paso {String(i + 1).padStart(2, '0')}</span>
							<p className="text-text text-[22px] font-medium leading-snug tracking-[-0.02em] m-0 mb-3">{p.title}</p>
							<p className="text-muted text-[15px] leading-relaxed m-0 max-w-[320px]">{p.desc}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
