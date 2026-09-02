import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Soluciones() {
	return (
		<section id="hero" itemScope itemType="https://schema.org/Organization">
			{/* Titular + foto pequeña */}
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
				<h1 className="text-[clamp(30px,6.8vw,72px)] font-bold leading-[1.05] tracking-tight text-text max-w-[900px] m-0">
					Soluciones integrales para modernizar, fortalecer y hacer crecer la gestión de tu organización.
				</h1>
				<div className="hidden lg:block shrink-0 w-[220px] xl:w-[260px]">
					<img
						src="/Images/av3.jpg"
						alt="Equipo multidisciplinario de Provia Consulting"
						className="w-full h-[110px] xl:h-[130px] object-cover"
						width={360}
						height={170}
						loading="eager"
					/>
				</div>
			</div>

			{/* Foto grande + descripción / CTAs / confían en nosotros */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
				<div>
					<img
						src="/Images/1.jpeg"
						alt="Consultoría estratégica y modernización de procesos empresariales - Provia Consulting"
						className="w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover"
						width={800}
						height={440}
						loading="eager"
					/>
				</div>

				<div className="flex flex-col">
					<p className="text-[rgb(19,19,19)] text-base sm:text-lg font-medium leading-relaxed mb-6 sm:mb-8 w-full m-0">
						Acompañamos a empresas, organismos y municipios en la implementación y modernización de procesos,
						optimizando la operación para ganar eficiencia, fortalecer la transparencia y habilitar un
						crecimiento sostenible y medible.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10 w-full">
						<Link
							href="/contacto"
							className="group flex-1 inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] bg-text text-white font-bold text-[17px] no-underline transition-colors hover:bg-black"
						>
							<span>Consultar ahora</span>
							<span className="w-9 h-9 shrink-0 rounded-[4px] bg-white grid place-items-center text-text group-hover:bg-gray-200 transition-colors">
								<ArrowUpRight className="w-4 h-4" />
							</span>
						</Link>
						<a
							href="#quienes-somos"
							className="group flex-1 inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] border border-gray-200 bg-white text-text font-bold text-[17px] no-underline transition-colors hover:border-gray-300"
						>
							<span>Conocer más</span>
							<span className="w-9 h-9 shrink-0 rounded-[4px] bg-gray-100 grid place-items-center text-text group-hover:bg-gray-200 transition-colors">
								<ArrowUpRight className="w-4 h-4" />
							</span>
						</a>
					</div>

					<div className="border-t border-gray-200 pt-5">
						<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">
							Confían en nosotros
						</p>
						<div className="flex items-center gap-4 flex-wrap">
							<div className="inline-flex items-center">
								<img
									className="w-11 h-11 rounded-full border-[3px] border-bg object-cover shadow-card -mr-3"
									src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60"
									alt="Cliente satisfecho de Provia Consulting"
									width={44}
									height={44}
									loading="lazy"
								/>
								<img
									className="w-11 h-11 rounded-full border-[3px] border-bg object-cover shadow-card -mr-3"
									src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=60"
									alt="Cliente satisfecho de Provia Consulting"
									width={44}
									height={44}
									loading="lazy"
								/>
								<img
									className="w-11 h-11 rounded-full border-[3px] border-bg object-cover shadow-card -mr-3"
									src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=120&q=60"
									alt="Cliente satisfecho de Provia Consulting"
									width={44}
									height={44}
									loading="lazy"
								/>
								<span className="w-[52px] h-[52px] grid place-items-center rounded-full bg-primary text-white font-medium text-sm border-[3px] border-bg shadow-card -mr-3">
									+ 100
								</span>
							</div>
							<p className="text-text text-sm font-light max-w-[320px] leading-snug m-0">
								Más de 100 organizaciones ya confían en nuestra consultora para modernizar y optimizar sus
								procesos.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
