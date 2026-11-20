import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ isHomePage = true }: { isHomePage?: boolean }) {
	const anchor = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);
	const nav = [
		{ label: 'Inicio', href: anchor('hero') },
		{ label: 'Nosotros', href: anchor('quienes-somos') },
		{ label: 'Servicios', href: anchor('nuestros-servicios') },
		{ label: 'Por qué elegirnos', href: anchor('porque-elegirnos') },
		{ label: 'Talleres RTO', href: '/rto' },
		{ label: 'Proyectos', href: '/proyectos' },
		{ label: 'Contacto', href: '/contacto' },
	];

	return (
		<footer className="bg-ink border-t border-line mt-16 sm:mt-24">
			<div className="w-full px-6 sm:px-8 md:px-12 lg:px-[120px] pt-14 sm:pt-20 pb-8 max-w-[1920px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 sm:mb-24">
					{/* Marca */}
					<div className="lg:col-span-5">
						<div className="flex items-center gap-2.5 text-text mb-6">
							<Logo className="w-8 h-8" gapColor="rgb(var(--c-ink))" />
							<span className="wordmark text-[20px]">Provia</span>
						</div>
						<p className="text-muted text-[15px] leading-relaxed max-w-[360px] m-0">
							Consultora integral de tecnología y gestión. Educación vial, revisión técnica vehicular y
							estrategias de negocio para empresas, organismos y municipios.
						</p>
					</div>

					{/* Navegación */}
					<div className="lg:col-span-3">
						<p className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted mb-5">Navegación</p>
						<nav className="flex flex-col gap-3" aria-label="Enlaces de navegación del sitio">
							{nav.map((n) => (
								<Link
									key={n.label}
									href={n.href}
									className="w-fit text-text text-[15px] no-underline hover:text-primary transition-colors"
								>
									{n.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Contacto + CheckRTO */}
					<div className="lg:col-span-4 flex flex-col gap-10">
						<div>
							<p className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted mb-5">Contacto</p>
							<div className="flex flex-col gap-3">
								<a
									href="mailto:proviasoporte@gmail.com"
									className="w-fit text-text text-[15px] no-underline hover:text-primary transition-colors"
									aria-label="Enviar email a Provia Consulting"
								>
									proviasoporte@gmail.com
								</a>
								<a
									href="tel:+543415964249"
									className="w-fit text-text text-[15px] no-underline hover:text-primary transition-colors"
									aria-label="Llamar a Provia Consulting"
								>
									+54 341 596 4249
								</a>
							</div>
						</div>

						<div>
							<p className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted mb-5">Ecosistema</p>
							<a
								href="https://www.checkrto.com"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center justify-between gap-6 rounded-[10px] border border-line p-4 no-underline transition-colors hover:border-muted/50"
								aria-label="Visitar CheckRTO - Sistema de Revisión Técnica Vehicular"
							>
								<span>
									<span className="block text-text text-[15px] font-medium">CheckRTO</span>
									<span className="block text-muted text-[13px] leading-snug mt-0.5">
										Sistema de gestión para talleres RTO/VTV
									</span>
								</span>
								<ArrowUpRight className="w-4 h-4 shrink-0 text-muted transition-colors group-hover:text-text" />
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-t border-line pt-6">
					<p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted m-0">
						© {new Date().getFullYear()} Provia S.A. Todos los derechos reservados.
					</p>
					<p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted m-0">Provia Consulting</p>
				</div>
			</div>
		</footer>
	);
}
