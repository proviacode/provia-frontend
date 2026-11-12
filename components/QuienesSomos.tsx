import { SERVICIOS_VISIBLES } from './servicios';

export default function QuienesSomos() {
	return (
		<section
			id="quienes-somos"
			className="grid grid-cols-1 gap-8 sm:gap-10 items-center mt-16 sm:mt-24 md:mt-32 lg:grid-cols-2 lg:gap-16"
			itemScope
			itemType="https://schema.org/AboutPage"
		>
			<div className="order-2 lg:order-1">
				<h2 className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Quiénes somos</h2>

				<p className="text-[rgb(19,19,19)] text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10 m-0 max-w-[520px]">
					Somos una consultora integral especializada en soluciones digitales, consultoría y capacitación
					para organizaciones, y revisión técnica vehicular a través de nuestra plataforma CheckRTO. Acompañamos a empresas, organismos y municipios en la digitalización y
					modernización de sus procesos, con soluciones que ganan en eficiencia, transparencia y seguridad.
					Nuestro enfoque combina experiencia técnica y conocimiento de gestión para construir herramientas
					sólidas, prácticas y sostenibles en el tiempo. Contamos con un equipo multidisciplinario de
					profesionales en ingeniería, tecnología, gestión pública, economía y derecho.
				</p>

				<h3 className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Qué hacemos</h3>
				<ul className="space-y-3 list-none pl-0 m-0">
					{SERVICIOS_VISIBLES.map((s) => (
						<li key={s.id} className="flex items-start gap-3">
							<span className="mt-[0.65em] w-1.5 h-1.5 shrink-0 bg-primary"></span>
							<span className="text-text text-base sm:text-lg font-medium">{s.title}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="w-full order-1 lg:order-2">
				<div className="relative bg-card overflow-hidden">
					<img
						className="block w-full h-[300px] sm:h-[380px] md:h-[520px] object-cover rounded-[6px]"
						src="/Images/equipo.jpg"
						alt="Equipo de Provia Consulting trabajando en el desarrollo de soluciones de software"
						width={800}
						height={520}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
