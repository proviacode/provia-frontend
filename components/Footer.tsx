import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ isHomePage = true }: { isHomePage?: boolean }) {
	return (
		<footer className="bg-text mt-12 sm:mt-16 md:mt-24">
			<div className="w-full px-6 sm:px-8 md:px-12 lg:px-[120px] py-14 sm:py-20 md:py-24 max-w-[1920px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
					{/* Columna 1: Sobre Provia + contacto */}
					<div>
						<div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
							<img
								src="/Images/provia.svg"
								alt="Logo Provia Consulting - Consultoría Estratégica y Soluciones Integrales"
								className="w-10 h-10 sm:w-12 sm:h-12 brightness-0 invert"
								width={48}
								height={48}
								loading="lazy"
							/>
							<div className="flex flex-col leading-tight">
								<span className="font-bold text-lg sm:text-xl uppercase text-white">Provia</span>
								<span className="font-medium text-xs sm:text-sm uppercase text-white/60">Consulting</span>
							</div>
						</div>
						<p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-[360px] mb-6 sm:mb-8">
							Consultora integral especializada en educación vial, revisión técnica vehicular y desarrollo
							de estrategias de negocios.
						</p>

						<p className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mb-2">Email</p>
						<a
							href="mailto:proviasoporte@gmail.com"
							className="text-white/90 hover:text-white text-sm sm:text-base font-medium transition-colors"
							aria-label="Enviar email a Provia Consulting"
						>
							proviasoporte@gmail.com
						</a>

						<p className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mt-5 sm:mt-6 mb-2">
							Teléfono
						</p>
						<a
							href="tel:+543415964249"
							className="text-white/90 hover:text-white text-sm sm:text-base font-medium transition-colors"
							aria-label="Llamar a Provia Consulting"
						>
							+54 341 596 4249
						</a>
					</div>

					{/* Columna 2: Navegación */}
					<div>
						<p className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mb-5 sm:mb-6">
							Navegación
						</p>
						<nav className="flex flex-col gap-4 sm:gap-5" aria-label="Enlaces de navegación del sitio">
							<a
								href={isHomePage ? '#hero' : '/#hero'}
								className="text-white hover:text-white/70 text-lg sm:text-xl font-medium transition-colors"
								aria-label="Ir a inicio"
							>
								Home
							</a>
							<a
								href={isHomePage ? '#quienes-somos' : '/#quienes-somos'}
								className="text-white hover:text-white/70 text-lg sm:text-xl font-medium transition-colors"
								aria-label="Conocer más sobre Provia Consulting"
							>
								Nosotros
							</a>
							<a
								href={isHomePage ? '#nuestros-servicios' : '/#nuestros-servicios'}
								className="text-white hover:text-white/70 text-lg sm:text-xl font-medium transition-colors"
								aria-label="Ver nuestros servicios de consultoría"
							>
								Servicios
							</a>
							<a
								href={isHomePage ? '#porque-elegirnos' : '/#porque-elegirnos'}
								className="text-white hover:text-white/70 text-lg sm:text-xl font-medium transition-colors"
								aria-label="Conocer las ventajas de elegir Provia"
							>
								¿Por qué elegirnos?
							</a>
							<Link
								href="/contacto"
								className="text-white hover:text-white/70 text-lg sm:text-xl font-medium transition-colors"
								aria-label="Contactar con Provia Consulting"
							>
								Contacto
							</Link>
						</nav>
					</div>

					{/* Columna 3: CheckRTO */}
					<div>
						<p className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mb-5 sm:mb-6">
							Ecosistema
						</p>
						<h3 className="text-white text-lg sm:text-xl font-bold mb-2">CheckRTO</h3>
						<p className="text-white/70 text-sm font-light leading-relaxed mb-5 max-w-[280px]">
							Sistema Integral de Revisión Técnica Vehicular desarrollado por Provia.
						</p>
						<a
							href="https://www.checkrto.com"
							target="_blank"
							rel="noopener noreferrer"
							className="group w-fit inline-flex items-center gap-6 pl-4 pr-2 py-2 rounded-[4px] border border-white/20 text-white font-medium text-sm no-underline transition-colors hover:border-white/40"
							aria-label="Visitar CheckRTO - Sistema de Revisión Técnica Vehicular"
						>
							Visitar sitio
							<span className="w-7 h-7 shrink-0 rounded-[4px] bg-white/10 grid place-items-center group-hover:bg-white/20 transition-colors">
								<ArrowUpRight className="w-3.5 h-3.5" />
							</span>
						</a>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-white/10 pt-6 sm:pt-8">
					<p className="text-white/40 text-xs font-medium tracking-[0.1em] uppercase">
						© {new Date().getFullYear()} Provia S.A. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
