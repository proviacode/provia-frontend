import { ArrowDownRight } from 'lucide-react';
import { SERVICIOS_VISIBLES } from './servicios';

const DISCIPLINAS = ['Ingeniería', 'Tecnología', 'Gestión pública', 'Economía', 'Derecho'];

export default function QuienesSomos() {
	return (
		<section
			id="quienes-somos"
			className="border-t border-gray-200 pt-6 sm:pt-8"
			itemScope
			itemType="https://schema.org/AboutPage"
		>
			<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Quiénes somos</p>

			{/* Encabezado */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-14 lg:items-end mb-10 sm:mb-14">
				<h2 className="text-[clamp(28px,4.5vw,48px)] font-bold leading-tight tracking-tight text-text m-0">
					Tecnología y gestión para modernizar organizaciones.
				</h2>
				<p
					className="text-[rgb(19,19,19)] text-base sm:text-lg font-light leading-relaxed m-0 max-w-[520px]"
					itemProp="description"
				>
					Somos una consultora integral. Acompañamos a empresas, organismos y municipios en la digitalización y
					modernización de sus procesos, con soluciones que ganan en eficiencia, transparencia y seguridad.
				</p>
			</div>

			{/* Imagen */}
			<img
				className="block w-full h-[260px] sm:h-[360px] lg:h-[460px] object-cover rounded-[6px] mb-10 sm:mb-14"
				src="/Images/equipo.jpg"
				alt="Equipo de Provia Consulting trabajando en el desarrollo de soluciones de software"
				width={1600}
				height={460}
				loading="lazy"
			/>

			{/* Enfoque + Qué hacemos */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
				<div className="lg:col-span-6">
					<h3 className="text-[20px] sm:text-[22px] font-bold leading-snug text-text m-0 mb-3">Nuestro enfoque</h3>
					<p className="text-muted text-[15px] sm:text-base font-light leading-relaxed m-0 mb-8 max-w-[520px]">
						Combinamos experiencia técnica y conocimiento de gestión para construir herramientas sólidas,
						prácticas y sostenibles en el tiempo, con un equipo multidisciplinario de profesionales.
					</p>
					<ul className="list-none p-0 m-0 flex flex-wrap gap-2" aria-label="Disciplinas del equipo">
						{DISCIPLINAS.map((d) => (
							<li key={d} className="px-3 py-1.5 rounded-[4px] bg-bg text-text text-sm font-medium">
								{d}
							</li>
						))}
					</ul>
				</div>

				<div className="lg:col-span-6">
					<h3 className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase m-0 mb-2">Qué hacemos</h3>
					<ul className="list-none p-0 m-0 border-t border-gray-200">
						{SERVICIOS_VISIBLES.map((s, i) => (
							<li key={s.id} className="border-b border-gray-200">
								<a
									href={`#servicio-${s.id}`}
									className="group flex items-center gap-4 sm:gap-6 py-4 sm:py-5 no-underline"
								>
									<span className="text-[13px] font-medium tabular-nums text-muted w-6 shrink-0">
										{String(i + 1).padStart(2, '0')}
									</span>
									<span className="flex-1 text-text text-[17px] sm:text-lg font-bold leading-snug transition-colors group-hover:text-primary">
										{s.title}
									</span>
									<ArrowDownRight className="w-5 h-5 shrink-0 text-text/30 transition-colors group-hover:text-primary" />
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
