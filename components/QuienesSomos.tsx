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
					Somos una consultora integral especializada en educación vial, revisión técnica vehicular y
					desarrollo de estrategias de negocios. Acompañamos a empresas, organismos y municipios en la
					implementación y modernización de procesos, potenciando la eficiencia, la transparencia y el
					crecimiento sostenible. Nuestro enfoque combina experiencia técnica, asesoramiento empresarial y
					acompañamiento legal-contable para ofrecer soluciones sólidas, prácticas y sostenibles. Contamos
					con un equipo multidisciplinario de profesionales en ingeniería, tecnología, gestión pública,
					economía y derecho.
				</p>

				<h3 className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Qué hacemos</h3>
				<ul className="space-y-3 list-none pl-0 m-0">
					<li className="flex items-center gap-3">
						<span className="w-1.5 h-1.5 shrink-0 bg-primary"></span>
						<span className="text-text text-base sm:text-lg font-medium">Capacitaciones</span>
					</li>
					<li className="flex items-center gap-3">
						<span className="w-1.5 h-1.5 shrink-0 bg-primary"></span>
						<span className="text-text text-base sm:text-lg font-medium">Implementación de talleres</span>
					</li>
					<li className="flex items-center gap-3">
						<span className="w-1.5 h-1.5 shrink-0 bg-primary"></span>
						<span className="text-text text-base sm:text-lg font-medium">Estrategias empresariales</span>
					</li>
					<li className="flex items-center gap-3">
						<span className="w-1.5 h-1.5 shrink-0 bg-primary"></span>
						<span className="text-text text-base sm:text-lg font-medium">Asistencia Legal y Contable</span>
					</li>
					<li className="flex items-center gap-3">
						<span className="w-1.5 h-1.5 shrink-0 bg-primary"></span>
						<span className="text-text text-base sm:text-lg font-medium">
							Sistema Integral de Revisión Técnica Vehicular
						</span>
					</li>
				</ul>
			</div>

			<div className="w-full order-1 lg:order-2">
				<div className="relative bg-card overflow-hidden">
					<img
						className="block w-full h-[300px] sm:h-[380px] md:h-[520px] object-cover"
						src="/Images/2.jpg"
						alt="Equipo multidisciplinario de Provia Consulting trabajando en consultoría estratégica y análisis empresarial"
						width={800}
						height={520}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
