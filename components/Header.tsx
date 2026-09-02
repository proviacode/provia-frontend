'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Header({ isHomePage = true }: { isHomePage?: boolean }) {
	useEffect(() => {
		const navbar = document.getElementById('navbar');
		if (navbar) {
			const currentScroll = window.pageYOffset;
			if (currentScroll > 10) {
				navbar.classList.add('shadow-sm', 'border-b', 'border-gray-200');
			} else {
				navbar.classList.remove('shadow-sm', 'border-b', 'border-gray-200');
			}

			let lastScroll = currentScroll;

			const handleScroll = () => {
				const scroll = window.pageYOffset;
				if (scroll > 10) {
					navbar.classList.add('shadow-sm', 'border-b', 'border-gray-200');
				} else {
					navbar.classList.remove('shadow-sm', 'border-b', 'border-gray-200');
				}

				// Ocultar al bajar, mostrar al subir
				const isMenuOpen = document.body.classList.contains('menu-open');
				if (!isMenuOpen) {
					if (scroll > lastScroll && scroll > 120) {
						navbar.classList.add('-translate-y-full');
					} else {
						navbar.classList.remove('-translate-y-full');
					}
				}

				lastScroll = scroll <= 0 ? 0 : scroll;
			};

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
						if (link.getAttribute('data-section') === 'contactanos') {
							link.classList.remove('text-black/50');
							link.classList.add('text-text');
						} else {
							link.classList.remove('text-text');
							link.classList.add('text-black/50');
						}
					});
					return;
				}

				const sections = ['hero', 'quienes-somos', 'nuestros-servicios', 'contactanos'];
				const navbarHeight = navbar ? navbar.offsetHeight : 0;
				const scrollPosition = window.pageYOffset + navbarHeight + 100;

				let activeSection = 'hero';

				sections.forEach((sectionId) => {
					const section = document.querySelector(`#${sectionId}`);
					if (section) {
						const sectionTop = (section as HTMLElement).offsetTop;
						const sectionHeight = (section as HTMLElement).offsetHeight;

						if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
							activeSection = sectionId;
						}
					}
				});

				if (window.pageYOffset < 200) {
					activeSection = 'hero';
				}

				navLinks.forEach((link) => {
					const linkSection = link.getAttribute('data-section');
					if (linkSection === activeSection) {
						link.classList.remove('text-black/50');
						link.classList.add('text-text');
					} else {
						link.classList.remove('text-text');
						link.classList.add('text-black/50');
					}
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
	}, [isHomePage]);

	return (
		<>
			<div className="sticky top-0 z-50 mb-[72px] -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-[120px]">
			<header
				className="bg-white/95 backdrop-blur-sm flex items-center justify-between gap-5 py-0 px-6 sm:px-8 md:px-12 lg:px-[120px] transition-[transform,box-shadow] duration-300 ease-in-out h-auto will-change-transform"
				id="navbar"
			>
				<a href={isHomePage ? '#hero' : '/#hero'} className="flex items-center gap-2 sm:gap-3 no-underline" aria-label="Provia Consulting - Ir al inicio">
					<img
						src="/Images/Provia-navbar.svg"
						alt="Logo Provia Consulting - Consultoría Estratégica"
						className="w-20 h-20 sm:w-[88px] sm:h-[88px] md:w-24 md:h-24 scale-[1.2] sm:scale-[1.3] md:scale-[1.5] origin-left"
						width={96}
						height={96}
						loading="eager"
					/>
				</a>

				<button
					id="mobileMenuBtn"
					className="lg:hidden flex flex-col gap-1 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
					aria-label="Abrir menú de navegación"
					aria-expanded="false"
				>
					<span className="w-5 h-0.5 bg-text transition-all"></span>
					<span className="w-5 h-0.5 bg-text transition-all"></span>
					<span className="w-5 h-0.5 bg-text transition-all"></span>
				</button>

				{/* Menú desktop */}
				<nav className="hidden lg:flex items-center gap-9 ml-auto" aria-label="Navegación principal">
					<a
						className="nav-link font-medium text-black/50 no-underline transition-colors duration-200 py-1.5 hover:text-text smooth-scroll"
						href={isHomePage ? '#hero' : '/#hero'}
						data-section="hero"
					>
						Home
					</a>
					<a
						className="nav-link font-medium text-black/50 no-underline transition-colors duration-200 py-1.5 hover:text-text smooth-scroll"
						href={isHomePage ? '#quienes-somos' : '/#quienes-somos'}
						data-section="quienes-somos"
					>
						Nosotros
					</a>
					<a
						className="nav-link font-medium text-black/50 no-underline transition-colors duration-200 py-1.5 hover:text-text smooth-scroll"
						href={isHomePage ? '#nuestros-servicios' : '/#nuestros-servicios'}
						data-section="nuestros-servicios"
					>
						Servicios
					</a>
					<Link
						className="nav-link font-medium text-black/50 no-underline transition-colors duration-200 py-1.5 hover:text-text"
						href="/contacto"
						data-section="contactanos"
					>
						Contacto
					</Link>
				</nav>

				{/* Botón CheckRTO desktop */}
				<a
					className="group hidden md:inline-flex items-center gap-6 pl-4 pr-1.5 py-1.5 rounded-[4px] bg-text text-white font-bold text-sm no-underline transition-colors hover:bg-black"
					href="https://www.checkrto.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					CheckRTO
					<span className="w-7 h-7 shrink-0 rounded-[4px] bg-white grid place-items-center text-text group-hover:bg-gray-200 transition-colors">
						<ArrowUpRight className="w-3.5 h-3.5" />
					</span>
				</a>

				{/* Menú móvil */}
				<div
					id="mobileMenu"
					className="mobile-menu-fullscreen fixed inset-0 z-[9999] transform translate-x-full transition-transform duration-300 lg:hidden w-full"
					style={{ background: 'white', backgroundColor: 'white' }}
				>
					<div
						className="mobile-menu-overlay absolute inset-0 w-full min-h-full"
						style={{ background: 'white', backgroundColor: 'white' }}
					></div>
					<div
						className="relative flex flex-col min-h-full w-full z-10 flex-1"
						style={{ background: 'white', backgroundColor: 'white' }}
					>
						<div
							className="flex items-center justify-between pt-2 pb-2 px-4 border-b bg-white"
							style={{ boxShadow: 'none' }}
						>
							<img
								src="/Images/Provia-navbar.svg"
								alt="Provia Consulting"
								className="w-20 h-12"
								width={80}
								height={48}
							/>
							<button id="closeMobileMenu" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Cerrar menú">
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
								</svg>
							</button>
						</div>
						<div
							className="flex flex-col flex-1 min-h-0 pt-2 px-6 pb-6 overflow-auto"
							style={{ background: 'white', backgroundColor: 'white' }}
						>
							<nav
								className="flex flex-col gap-4 bg-white shrink-0"
								aria-label="Navegación móvil"
								style={{ background: 'white', backgroundColor: 'white' }}
							>
								<a
									className="nav-link-mobile font-medium text-lg text-text no-underline py-3 border-b border-gray-100 smooth-scroll"
									href={isHomePage ? '#hero' : '/#hero'}
									data-section="hero"
								>
									Home
								</a>
								<a
									className="nav-link-mobile font-medium text-lg text-text no-underline py-3 border-b border-gray-100 smooth-scroll"
									href={isHomePage ? '#quienes-somos' : '/#quienes-somos'}
									data-section="quienes-somos"
								>
									Nosotros
								</a>
								<a
									className="nav-link-mobile font-medium text-lg text-text no-underline py-3 border-b border-gray-100 smooth-scroll"
									href={isHomePage ? '#nuestros-servicios' : '/#nuestros-servicios'}
									data-section="nuestros-servicios"
								>
									Servicios
								</a>
								<Link
									className="nav-link-mobile font-medium text-lg text-text no-underline py-3 border-b border-gray-100"
									href="/contacto"
									data-section="contactanos"
								>
									Contacto
								</Link>
							</nav>
							<a
								className="checkrto-mobile-btn group inline-flex items-center justify-between gap-6 pl-6 pr-2 py-2.5 rounded-[4px] font-bold text-base no-underline mt-4 w-full sm:w-auto shrink-0"
								href="https://www.checkrto.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								CheckRTO
								<span className="checkrto-mobile-icon w-9 h-9 shrink-0 rounded-[4px] grid place-items-center">
									<ArrowUpRight className="w-4 h-4" />
								</span>
							</a>
							<div
								className="mt-auto pt-8 pb-6 flex flex-col gap-2 text-center sm:text-left border-t border-gray-100 shrink-0"
								style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
							>
								<p className="text-gray-600 text-sm font-light">
									Email:{' '}
									<a href="mailto:proviasoporte@gmail.com" className="text-primary underline break-all">
										proviasoporte@gmail.com
									</a>
								</p>
								<p className="text-gray-600 text-sm font-light">
									Teléfono:{' '}
									<a href="tel:+543415964249" className="text-primary underline">
										+54 341 596 4249
									</a>
								</p>
								<p className="text-gray-500 text-xs font-light mt-2">
									Todos los derechos reservados Provia S.A © <span id="mobileMenuYear"></span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</header>
			</div>

			<style jsx global>{`
				#mobileMenu {
					background-color: #ffffff !important;
					background: #ffffff !important;
					top: 0 !important;
					left: 0 !important;
					right: 0 !important;
					bottom: 0 !important;
					width: 100% !important;
					min-height: 100vh !important;
					min-height: 100dvh !important;
					height: 100vh !important;
					height: 100dvh !important;
				}

				#mobileMenu * {
					background-color: transparent;
				}

				#mobileMenu a.checkrto-mobile-btn {
					background-color: #0f172a !important;
					background: #0f172a !important;
					color: #ffffff !important;
				}

				#mobileMenu a.checkrto-mobile-btn .checkrto-mobile-icon {
					background-color: #ffffff !important;
					background: #ffffff !important;
					color: #0f172a !important;
				}

				#mobileMenu > div.mobile-menu-overlay {
					background-color: #ffffff !important;
					background: #ffffff !important;
				}

				#mobileMenu > div:not(.mobile-menu-overlay) {
					background-color: #ffffff !important;
					background: #ffffff !important;
					min-height: 100% !important;
				}

				#mobileMenu nav {
					background-color: #ffffff !important;
					background: #ffffff !important;
				}

				/* Asegurar que el menú esté por encima de todo */
				#mobileMenu {
					z-index: 99999 !important;
				}

				/* Asegurar que el badge quede detrás */
				#hero p {
					z-index: -1 !important;
					position: relative;
				}

				/* Cuando el menú está abierto, bajar el z-index del header */
				body.menu-open #navbar {
					z-index: 40 !important;
				}
			`}</style>
		</>
	);
}
