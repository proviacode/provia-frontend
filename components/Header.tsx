'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Header({
	isHomePage = true,
	activeSection = 'contactanos',
}: {
	isHomePage?: boolean;
	/** Link resaltado en páginas internas (valor de `data-section`). */
	activeSection?: string;
}) {
	useEffect(() => {
		const navbar = document.getElementById('navbar');
		if (navbar) {
			// Arriba de todo: barra transparente. Al scrollear: cápsula flotante (ver estilos abajo).
			const handleScroll = () => {
				navbar.classList.toggle('scrolled', window.pageYOffset > 24);
			};
			handleScroll();

			window.addEventListener('scroll', handleScroll);

			// Smooth scroll con compensación para navbar sticky
			const smoothScrollHandlers: { el: Element; handler: (e: Event) => void }[] = [];
			document.querySelectorAll('.smooth-scroll').forEach((anchor) => {
				const handler = (e: Event) => {
					if (!isHomePage) return;
					e.preventDefault();
					const targetId = anchor.getAttribute('href');
					if (targetId && targetId.startsWith('#')) {
						const targetElement = document.querySelector(targetId);
						if (targetElement) {
							const navbarHeight = navbar.offsetHeight;
							const targetPosition =
								targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

							window.scrollTo({
								top: targetPosition,
								behavior: 'smooth',
							});
						}
					}
				};
				anchor.addEventListener('click', handler);
				smoothScrollHandlers.push({ el: anchor, handler });
			});

			// También para el logo
			const logoLink = document.querySelector('header a[aria-label="Provia Consulting - Ir al inicio"]');
			const logoHandler = (e: Event) => {
				if (!isHomePage) return;
				e.preventDefault();
				const targetElement = document.querySelector('#hero');
				if (targetElement) {
					const navbarHeight = navbar.offsetHeight;
					const targetPosition =
						targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth',
					});
				}
			};
			if (logoLink) {
				logoLink.addEventListener('click', logoHandler);
			}

			// Detectar sección activa según el scroll
			function updateActiveNavLink() {
				const navLinks = document.querySelectorAll('.nav-link');

				if (!isHomePage) {
					navLinks.forEach((link) => {
						link.classList.toggle('is-active', link.getAttribute('data-section') === activeSection);
					});
					return;
				}

				const sections = ['hero', 'quienes-somos', 'nuestros-servicios', 'contactanos'];
				const navbarHeight = navbar ? navbar.offsetHeight : 0;
				const scrollPosition = window.pageYOffset + navbarHeight + 100;

				let currentSection = 'hero';

				sections.forEach((sectionId) => {
					const section = document.querySelector(`#${sectionId}`);
					if (section) {
						const sectionTop = (section as HTMLElement).offsetTop;
						const sectionHeight = (section as HTMLElement).offsetHeight;

						if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
							currentSection = sectionId;
						}
					}
				});

				if (window.pageYOffset < 200) {
					currentSection = 'hero';
				}

				navLinks.forEach((link) => {
					link.classList.toggle('is-active', link.getAttribute('data-section') === currentSection);
				});
			}

			window.addEventListener('scroll', updateActiveNavLink);
			updateActiveNavLink();

			// Menú móvil
			const mobileMenuBtn = document.getElementById('mobileMenuBtn');
			const mobileMenu = document.getElementById('mobileMenu');
			const closeMobileMenu = document.getElementById('closeMobileMenu');
			const mobileMenuYearEl = document.getElementById('mobileMenuYear');
			if (mobileMenuYearEl) mobileMenuYearEl.textContent = String(new Date().getFullYear());

			function openMobileMenu() {
				if (mobileMenu) {
					mobileMenu.classList.remove('translate-x-full');
					mobileMenuBtn?.setAttribute('aria-expanded', 'true');
					document.body.style.overflow = 'hidden';
					document.body.classList.add('menu-open');
				}
			}

			function closeMobileMenuFunc() {
				if (mobileMenu) {
					mobileMenu.classList.add('translate-x-full');
					mobileMenuBtn?.setAttribute('aria-expanded', 'false');
					document.body.style.overflow = '';
					document.body.classList.remove('menu-open');
				}
			}

			if (mobileMenuBtn) {
				mobileMenuBtn.addEventListener('click', openMobileMenu);
			}

			if (closeMobileMenu) {
				closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
			}

			const mobileLinkHandlers: { el: Element; handler: () => void }[] = [];
			document.querySelectorAll('.nav-link-mobile').forEach((link) => {
				const handler = () => {
					setTimeout(closeMobileMenuFunc, 300);
				};
				link.addEventListener('click', handler);
				mobileLinkHandlers.push({ el: link, handler });
			});

			const overlayHandler = (e: Event) => {
				if (e.target === mobileMenu || (e.target as HTMLElement).classList.contains('mobile-menu-overlay')) {
					closeMobileMenuFunc();
				}
			};
			if (mobileMenu) {
				mobileMenu.addEventListener('click', overlayHandler);
			}

			return () => {
				window.removeEventListener('scroll', handleScroll);
				window.removeEventListener('scroll', updateActiveNavLink);
				smoothScrollHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
				if (logoLink) logoLink.removeEventListener('click', logoHandler);
				if (mobileMenuBtn) mobileMenuBtn.removeEventListener('click', openMobileMenu);
				if (closeMobileMenu) closeMobileMenu.removeEventListener('click', closeMobileMenuFunc);
				mobileLinkHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
				if (mobileMenu) mobileMenu.removeEventListener('click', overlayHandler);
			};
		}
	}, [isHomePage, activeSection]);

	const anchor = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);
	const links: { label: string; href: string; section: string; inPage: boolean }[] = [
		{ label: 'Nosotros', href: anchor('quienes-somos'), section: 'quienes-somos', inPage: true },
		{ label: 'Servicios', href: anchor('nuestros-servicios'), section: 'nuestros-servicios', inPage: true },
		{ label: 'Talleres RTO', href: '/rto', section: 'rto', inPage: false },
		{ label: 'Proyectos', href: '/proyectos', section: 'proyectos', inPage: false },
	];

	return (
		<>
			{/* Espaciador: reserva en el flujo el alto del navbar fijo */}
			<div aria-hidden className="h-[72px] mb-6 sm:mb-10" />

			{/* Navbar fijo a la ventana (no sticky: así no se va cuando termina <main>).
			    El header adentro pasa de barra a cápsula al scrollear. */}
			<div id="navbarWrap" className="fixed top-0 inset-x-0 z-50">
				<header id="navbar" className="relative mx-auto flex items-center justify-between gap-5">
					<a
						href={anchor('hero')}
						className="flex items-center gap-2.5 no-underline text-text"
						aria-label="Provia Consulting - Ir al inicio"
					>
						<Logo className="nav-logo w-7 h-7" />
						<span className="wordmark text-[18px]">Provia</span>
					</a>

					{/* Menú desktop */}
					<nav
						className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
						aria-label="Navegación principal"
					>
						{links.map((l) =>
							l.inPage ? (
								<a
									key={l.section}
									className="nav-link px-3.5 py-2 rounded-full text-[14px] text-muted no-underline transition-colors duration-200 hover:text-text smooth-scroll"
									href={l.href}
									data-section={l.section}
								>
									{l.label}
								</a>
							) : (
								<Link
									key={l.section}
									className="nav-link px-3.5 py-2 rounded-full text-[14px] text-muted no-underline transition-colors duration-200 hover:text-text"
									href={l.href}
									data-section={l.section}
								>
									{l.label}
								</Link>
							),
						)}
					</nav>

					<div className="flex items-center gap-2">
						{/* Botón Contactanos desktop */}
						<Link
							className="group hidden md:inline-flex items-center gap-3 h-10 pl-4 pr-1 rounded-full bg-text text-inverse text-[14px] font-medium no-underline transition-colors hover:bg-white"
							href="/contacto"
						>
							Contactanos
							<span className="grid place-items-center w-8 h-8 rounded-full bg-inverse text-text transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
								<ArrowUpRight className="w-3.5 h-3.5" />
							</span>
						</Link>

						<button
							id="mobileMenuBtn"
							className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-line"
							aria-label="Abrir menú de navegación"
							aria-expanded="false"
						>
							<span className="w-4 h-px bg-text"></span>
							<span className="w-4 h-px bg-text"></span>
						</button>
					</div>
				</header>
			</div>

			{/* Menú móvil: fuera del header para que el blur/cápsula no lo recorte */}
			<div
				id="mobileMenu"
				className="fixed inset-0 z-[9999] w-full h-[100dvh] bg-page transform translate-x-full transition-transform duration-300 lg:hidden"
			>
				<div className="mobile-menu-overlay absolute inset-0"></div>
				<div className="relative z-10 flex flex-col h-full">
					<div className="flex items-center justify-between h-[68px] px-6 sm:px-8 border-b border-line">
						<span className="flex items-center gap-2.5 text-text">
							<Logo className="w-7 h-7" />
							<span className="wordmark text-[18px]">Provia</span>
						</span>
						<button
							id="closeMobileMenu"
							className="grid place-items-center w-10 h-10 rounded-full border border-line text-text"
							aria-label="Cerrar menú"
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>

					<div className="flex flex-col flex-1 min-h-0 px-6 sm:px-8 pt-6 pb-6 overflow-auto">
						<nav className="flex flex-col" aria-label="Navegación móvil">
							{[{ label: 'Inicio', href: anchor('hero'), section: 'hero', inPage: true }, ...links].map((l, i) =>
								l.inPage ? (
									<a
										key={l.section}
										className="nav-link-mobile flex items-baseline gap-4 py-4 border-b border-line text-[28px] font-medium tracking-[-0.03em] text-text no-underline smooth-scroll"
										href={l.href}
										data-section={l.section}
									>
										<span className="font-mono text-[12px] text-muted">{String(i + 1).padStart(2, '0')}</span>
										{l.label}
									</a>
								) : (
									<Link
										key={l.section}
										className="nav-link-mobile flex items-baseline gap-4 py-4 border-b border-line text-[28px] font-medium tracking-[-0.03em] text-text no-underline"
										href={l.href}
										data-section={l.section}
									>
										<span className="font-mono text-[12px] text-muted">{String(i + 1).padStart(2, '0')}</span>
										{l.label}
									</Link>
								),
							)}
						</nav>

						<Link className="group btn-primary w-full mt-8" href="/contacto">
							Contactanos
							<span className="btn-icon">
								<ArrowUpRight className="w-4 h-4" />
							</span>
						</Link>

						<div
							className="mt-auto pt-8 flex flex-col gap-2"
							style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
						>
							<a href="mailto:proviasoporte@gmail.com" className="text-text text-[15px] no-underline break-all">
								proviasoporte@gmail.com
							</a>
							<a href="tel:+543415964249" className="text-text text-[15px] no-underline">
								+54 341 596 4249
							</a>
							<p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mt-3 m-0">
								© <span id="mobileMenuYear"></span> Provia S.A.
							</p>
						</div>
					</div>
				</div>
			</div>

			<style jsx global>{`
				/* Estado inicial: barra transparente a todo el ancho */
				#navbarWrap {
					padding-top: 0;
					transition: padding-top 400ms cubic-bezier(0.22, 1, 0.36, 1);
				}
				#navbar {
					height: 72px;
					max-width: 100%;
					padding-inline: var(--nav-px, 24px);
					border: 1px solid transparent;
					border-radius: 0;
					background-color: transparent;
					transition:
						max-width 500ms cubic-bezier(0.22, 1, 0.36, 1),
						height 400ms cubic-bezier(0.22, 1, 0.36, 1),
						padding 400ms cubic-bezier(0.22, 1, 0.36, 1),
						border-radius 400ms cubic-bezier(0.22, 1, 0.36, 1),
						background-color 300ms ease,
						border-color 300ms ease,
						box-shadow 300ms ease;
				}
				@media (min-width: 640px) {
					#navbar { --nav-px: 32px; }
				}
				@media (min-width: 768px) {
					#navbar { --nav-px: 48px; }
				}
				@media (min-width: 1024px) {
					#navbar { --nav-px: 120px; }
				}

				/* Al scrollear: cápsula flotante */
				#navbarWrap:has(#navbar.scrolled) {
					padding-top: 12px;
				}
				#navbar.scrolled {
					height: 56px;
					max-width: min(1040px, calc(100% - 24px));
					padding-inline: 8px 8px;
					padding-left: 18px;
					border-radius: 999px;
					border-color: rgb(var(--c-line));
					background-color: rgb(var(--c-card) / 0.72);
					-webkit-backdrop-filter: blur(16px) saturate(140%);
					backdrop-filter: blur(16px) saturate(140%);
					box-shadow:
						0 10px 40px rgba(0, 0, 0, 0.35),
						inset 0 1px 0 rgba(255, 255, 255, 0.04);
				}
				#navbar.scrolled .nav-logo {
					width: 24px;
					height: 24px;
					stroke: rgb(var(--c-card));
				}
				.nav-logo {
					transition:
						width 400ms ease,
						height 400ms ease;
				}

				/* Link activo */
				#navbar .nav-link.is-active {
					color: rgb(var(--c-text));
					background-color: rgb(255 255 255 / 0.07);
				}

				body.menu-open #navbarWrap {
					z-index: 40;
				}
			`}</style>
		</>
	);
}
