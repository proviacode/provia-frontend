'use client';

import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { BookOpen, ArrowRight, Target, Briefcase, Scale, Car, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function NuestrosServicios() {
	useEffect(() => {
		console.log('Script iniciado');

		let swiperInstance: import('swiper').Swiper | null = null;

		const initSwiper = async () => {
			console.log('Inicializando Swiper...');

			try {
				const { Swiper } = await import('swiper');
				const { Navigation } = await import('swiper/modules');
				const { Loop } = (await import('swiper/modules')) as any;

				console.log('Swiper importado:', Swiper);
				console.log('Navigation:', Navigation);
				console.log('Loop:', Loop);

				const swiperEl = document.querySelector('.services-swiper');
				console.log('Elemento swiper encontrado:', swiperEl);

				if (!swiperEl) {
					console.error('No se encontró el elemento .services-swiper');
					return;
				}

				const prevBtn = document.querySelector('.swiper-button-prev-custom');
				const nextBtn = document.querySelector('.swiper-button-next-custom');
				console.log('Botón prev encontrado:', prevBtn);
				console.log('Botón next encontrado:', nextBtn);

				const slides = document.querySelectorAll('.services-swiper .swiper-slide');
				console.log('Slides encontrados:', slides.length);

				const updateOpacity = (swiper: any) => {
					const containerCenter = window.innerWidth / 2;
					let closestSlide: any = null;
					let minDistance = Infinity;

					swiper.slides.forEach((slide: HTMLElement) => {
						const slideRect = slide.getBoundingClientRect();
						const slideCenter = slideRect.left + slideRect.width / 2;
						const distanceFromCenter = Math.abs(slideCenter - containerCenter);

						if (distanceFromCenter < minDistance) {
							minDistance = distanceFromCenter;
							closestSlide = slide;
						}
					});

					swiper.slides.forEach((slide: HTMLElement) => {
						if (slide === closestSlide) {
							slide.style.opacity = '1';
							slide.style.transform = 'scale(1)';
						} else {
							slide.style.opacity = '0.4';
							slide.style.transform = 'scale(0.75)';
						}
					});
				};

				const updateProgress = (swiper: any) => {
					const progressBar = document.getElementById('progressBar');
					if (!progressBar) return;

					const totalSlides = 6;
					const currentIndex = swiper.realIndex;
					const progress = ((currentIndex + 1) / totalSlides) * 100;

					progressBar.style.width = `${progress}%`;
				};

				const swiperOptions: any = {
					modules: [Navigation, Loop].filter(Boolean),
					loop: true,
					loopedSlides: 6,
					slidesPerView: 'auto',
					spaceBetween: window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 30 : 50,
					centeredSlides: true,
					speed: 600,
					effect: 'slide',
					freeMode: false,
					grabCursor: true,
					cssMode: false,
					on: {
						init: function (this: any) {
							console.log('Swiper inicializado correctamente');
							console.log('Slides en Swiper:', this.slides.length);
							console.log('Slide activo:', this.activeIndex);
							setTimeout(() => {
								updateOpacity(this);
								updateProgress(this);
							}, 300);
						},
						slideChange: function (this: any) {
							console.log('Slide cambiado a:', this.activeIndex);
							console.log('Real index:', this.realIndex);
						},
						transitionEnd: function (this: any) {
							updateOpacity(this);
							updateProgress(this);
						},
					},
				};

				swiperInstance = new Swiper('.services-swiper', swiperOptions);

				console.log('Instancia de Swiper creada:', swiperInstance);

				if (prevBtn) {
					prevBtn.addEventListener('click', (e) => {
						console.log('Botón prev clickeado');
						e.preventDefault();
						e.stopPropagation();
						if (swiperInstance) {
							swiperInstance.slidePrev();
							console.log('slidePrev() llamado');
						} else {
							console.error('swiperInstance no está disponible');
						}
					});
					console.log('Event listener agregado a prevBtn');
				} else {
					console.error('prevBtn no encontrado');
				}

				if (nextBtn) {
					nextBtn.addEventListener('click', (e) => {
						console.log('Botón next clickeado');
						e.preventDefault();
						e.stopPropagation();
						if (swiperInstance) {
							swiperInstance.slideNext();
							console.log('slideNext() llamado');
						} else {
							console.error('swiperInstance no está disponible');
						}
					});
					console.log('Event listener agregado a nextBtn');
				} else {
					console.error('nextBtn no encontrado');
				}
			} catch (error: any) {
				console.error('Error al inicializar Swiper:', error);
				console.error('Stack:', error.stack);
			}
		};

		const timeoutId = setTimeout(initSwiper, 100);

		return () => {
			clearTimeout(timeoutId);
			if (swiperInstance) {
				(swiperInstance as any).destroy?.(true, true);
			}
		};
	}, []);

	return (
		<>
			<section
				className="mt-12 sm:mt-16 md:mt-24"
				id="nuestros-servicios"
				itemScope
				itemType="https://schema.org/Service"
			>
				<div className="text-center mb-8 sm:mb-10 md:mb-12 px-6 sm:px-8 md:px-12 lg:px-[120px]">
					<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Qué ofrecemos</p>
					<h2 className="text-[clamp(24px,4vw,36px)] mb-3 sm:mb-4 leading-tight font-bold text-text">
						Nuestros servicios
					</h2>
					<p className="text-text text-sm sm:text-base font-light leading-relaxed max-w-[720px] mx-auto">
						Acompañamos a empresas e instituciones con consultoría, formación y soluciones digitales para
						mejorar la operación y la toma de decisiones.
					</p>
				</div>

				<div className="relative w-screen -ml-[calc((100vw-100%)/2)] overflow-visible">
					<div className="swiper services-swiper overflow-visible">
						<div className="swiper-wrapper">
							{/* Servicio 1: Capacitaciones */}
							<div className="swiper-slide" style={{ width: '360px', height: 'auto', minHeight: '400px' }}>
								<div className="bg-white rounded-[4px] p-4 sm:p-6 border border-gray-200 shadow-[0_4px_50px_-12px_rgba(63,169,245,0.2)] h-full flex flex-col overflow-hidden">
									<div className="flex items-center gap-2 mb-3 sm:mb-4">
										<h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-text">Capacitaciones</h3>
										<BookOpen className="w-5 h-5 text-primary" />
									</div>

									<p className="text-muted text-[16px] font-light leading-relaxed mb-4">
										Brindamos programas formativos para fortalecer habilidades, profesionalizar equipos y mejorar
										la eficiencia operativa.
									</p>

									<div className="mb-4">
										<h4 className="text-muted text-[16px] font-light mb-2">Incluye:</h4>
										<ul className="space-y-2 list-none pl-0">
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[12px]">•</span>
												<p className="text-muted text-[15px] font-light m-0">
													Educación vial para empresas, instituciones y municipios.
												</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">
													Formación en ventas, marketing y posicionamiento de marca.
												</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">
													Estrategias integrales de costos para optimizar recursos.
												</p>
											</li>
										</ul>
									</div>

									<div className="flex flex-wrap gap-2 mb-4">
										<span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-[4px] text-[14px] font-light">Eficiencia</span>
										<span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-[4px] text-[14px] font-light">Productividad</span>
										<span className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-[4px] text-[14px] font-light">Ahorro</span>
										<span className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-[4px] text-[14px] font-light">Ventas</span>
										<span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-[4px] text-[14px] font-light border border-blue-200">+10</span>
									</div>

									<a className="group mt-auto w-fit inline-flex items-center gap-2 text-primary text-[15px] font-bold no-underline transition-colors" href="#">
										<span>Consultar ahora</span>
										<span className="w-7 h-7 shrink-0 rounded-[4px] bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
											<ArrowRight className="w-3.5 h-3.5 text-primary" />
										</span>
									</a>
								</div>
							</div>

							{/* Servicio 2: Implementación de talleres */}
							<div className="swiper-slide" style={{ width: '360px', height: 'auto', minHeight: '400px' }}>
								<div className="bg-white rounded-[4px] p-6 border border-gray-200 shadow-[0_4px_50px_-12px_rgba(63,169,245,0.2)] h-full flex flex-col overflow-hidden">
									<div className="flex items-center gap-2 mb-4">
										<h3 className="text-[28px] font-bold text-text">Implementación de talleres</h3>
										<Target className="w-5 h-5 text-primary" />
									</div>

									<p className="text-muted text-[16px] font-light leading-relaxed mb-4">
										Diseñamos y ejecutamos talleres prácticos enfocados en resolver desafíos específicos de tu
										organización, promoviendo la innovación y el pensamiento estratégico.
									</p>

									<div className="mb-4">
										<h4 className="text-muted text-[16px] font-light mb-2">Incluye:</h4>
										<ul className="space-y-2 list-none pl-0">
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[12px]">•</span>
												<p className="text-muted text-[15px] font-light m-0">Talleres de Design Thinking y creatividad</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">Sesiones de planificación estratégica</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">Facilitación de equipos de alto rendimiento</p>
											</li>
										</ul>
									</div>

									<div className="flex flex-wrap gap-2 mb-4">
										<span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-[4px] text-[14px] font-light">Design Thinking</span>
										<span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-[4px] text-[14px] font-light">Facilitación</span>
										<span className="px-3 py-1.5 bg-teal-100 text-teal-700 rounded-[4px] text-[14px] font-light">Innovación</span>
									</div>

									<a className="group mt-auto w-fit inline-flex items-center gap-2 text-primary text-[15px] font-bold no-underline transition-colors" href="#">
										<span>Consultar ahora</span>
										<span className="w-7 h-7 shrink-0 rounded-[4px] bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
											<ArrowRight className="w-3.5 h-3.5 text-primary" />
										</span>
									</a>
								</div>
							</div>

							{/* Servicio 3: Estrategias empresariales */}
							<div className="swiper-slide" style={{ width: '360px', height: 'auto', minHeight: '400px' }}>
								<div className="bg-white rounded-[4px] p-6 border border-gray-200 shadow-[0_4px_50px_-12px_rgba(63,169,245,0.2)] h-full flex flex-col overflow-hidden">
									<div className="flex items-center gap-2 mb-4">
										<h3 className="text-[28px] font-bold text-text">Estrategias empresariales</h3>
										<Briefcase className="w-5 h-5 text-primary" />
									</div>

									<p className="text-muted text-[16px] font-light leading-relaxed mb-4">
										Desarrollamos planes estratégicos alineados con la visión de tu organización, optimizando
										procesos y recursos para alcanzar objetivos de negocio sostenibles.
									</p>

									<div className="mb-4">
										<h4 className="text-muted text-[16px] font-light mb-2">Incluye:</h4>
										<ul className="space-y-2 list-none pl-0">
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[12px]">•</span>
												<p className="text-muted text-[15px] font-light m-0">Diagnóstico y análisis organizacional</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">Optimización de procesos y workflows</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">Transformación digital y modernización</p>
											</li>
										</ul>
									</div>

									<div className="flex flex-wrap gap-2 mb-4">
										<span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-[4px] text-[14px] font-light">Estrategia</span>
										<span className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-[4px] text-[14px] font-light">Optimización</span>
										<span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-[4px] text-[14px] font-light">Digital</span>
									</div>

									<a className="group mt-auto w-fit inline-flex items-center gap-2 text-primary text-[15px] font-bold no-underline transition-colors" href="#">
										<span>Consultar ahora</span>
										<span className="w-7 h-7 shrink-0 rounded-[4px] bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
											<ArrowRight className="w-3.5 h-3.5 text-primary" />
										</span>
									</a>
								</div>
							</div>

							{/* Servicio 4: Asistencia Legal y Contable */}
							<div className="swiper-slide" style={{ width: '360px', height: 'auto', minHeight: '400px' }}>
								<div className="bg-white rounded-[4px] p-6 border border-gray-200 shadow-[0_4px_50px_-12px_rgba(63,169,245,0.2)] h-full flex flex-col overflow-hidden">
									<div className="flex items-center gap-2 mb-4">
										<h3 className="text-[28px] font-bold text-text">Asistencia Legal y Contable</h3>
										<Scale className="w-5 h-5 text-primary" />
									</div>

									<p className="text-muted text-[16px] font-light leading-relaxed mb-4">
										Brindamos soporte normativo, jurídico y financiero para asegurar proyectos sólidos y
										ordenados.
									</p>

									<div className="mb-4">
										<h4 className="text-muted text-[16px] font-light mb-2">Incluye:</h4>
										<ul className="space-y-2 list-none pl-0">
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[12px]">•</span>
												<p className="text-muted text-[15px] font-light m-0">Asesoramiento en normativa vigente.</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">Estructuras contables eficientes.</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">
													Acompañamiento legal para licitaciones, contratos y regulaciones.
												</p>
											</li>
										</ul>
									</div>

									<div className="flex flex-wrap gap-2 mb-4">
										<span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-[4px] text-[14px] font-light">Legal</span>
										<span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-[4px] text-[14px] font-light">Contable</span>
										<span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-[4px] text-[14px] font-light">Normativa</span>
										<span className="px-3 py-1.5 bg-cyan-100 text-cyan-700 rounded-[4px] text-[14px] font-light">Compliance</span>
									</div>

									<a className="group mt-auto w-fit inline-flex items-center gap-2 text-primary text-[15px] font-bold no-underline transition-colors" href="#">
										<span>Consultar ahora</span>
										<span className="w-7 h-7 shrink-0 rounded-[4px] bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
											<ArrowRight className="w-3.5 h-3.5 text-primary" />
										</span>
									</a>
								</div>
							</div>

							{/* Servicio 5: Sistema Integral de Revisión Técnica Vehicular */}
							<div className="swiper-slide" style={{ width: '360px', height: 'auto', minHeight: '400px' }}>
								<div className="bg-white rounded-[4px] p-6 border border-gray-200 shadow-[0_4px_50px_-12px_rgba(63,169,245,0.2)] h-full flex flex-col overflow-hidden">
									<div className="flex items-center gap-2 mb-2">
										<h3 className="text-[22px] font-bold text-text">Sistema Integral de Revisión Técnica Vehicular</h3>
										<Car className="w-5 h-5 text-primary" />
									</div>

									<p className="text-muted text-[14px] font-light leading-relaxed mb-2">
										Plataforma para talleres RTV que centraliza la operación y asegura trazabilidad, seguridad y
										transparencia, con control en tiempo real y reportes automáticos.
									</p>

									<div className="mb-2">
										<h4 className="text-muted text-[14px] font-light mb-1.5">Incluye:</h4>
										<ul className="space-y-2 list-none pl-0">
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[12px]">•</span>
												<p className="text-muted text-[13px] font-light m-0">Trazabilidad total de cada revisión</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[12px] font-light m-0">Reportes automáticos y paneles de seguimiento</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[12px] font-light m-0">Integración con obleas QR</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[12px] font-light m-0">Centralización de datos por taller y jurisdicción</p>
											</li>
										</ul>
									</div>

									<div className="flex flex-wrap gap-2 mb-2">
										<span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-[4px] text-[14px] font-light">Eficiencia</span>
										<span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-[4px] text-[14px] font-light">Digital</span>
										<span className="px-3 py-1.5 bg-violet-100 text-violet-700 rounded-[4px] text-[14px] font-light">Trazabilidad</span>
										<span className="px-3 py-1.5 bg-amber-100 text-amber-700 rounded-[4px] text-[14px] font-light">Tiempo Real</span>
										<span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-[4px] text-[14px] font-light border border-blue-200">+3</span>
									</div>

									<a className="group mt-auto w-fit inline-flex items-center gap-2 text-primary text-[15px] font-bold no-underline transition-colors" href="#">
										<span>Consultar ahora</span>
										<span className="w-7 h-7 shrink-0 rounded-[4px] bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
											<ArrowRight className="w-3.5 h-3.5 text-primary" />
										</span>
									</a>
								</div>
							</div>

							{/* Servicio 6: Ciberseguridad */}
							<div className="swiper-slide" style={{ width: '360px', height: 'auto', minHeight: '400px' }}>
								<div className="bg-white rounded-[4px] p-4 sm:p-6 border border-gray-200 shadow-[0_4px_50px_-12px_rgba(63,169,245,0.2)] h-full flex flex-col overflow-hidden">
									<div className="flex items-center gap-2 mb-3 sm:mb-4">
										<h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-text">Ciberseguridad</h3>
										<ShieldCheck className="w-5 h-5 text-primary" />
									</div>

									<p className="text-muted text-[16px] font-light leading-relaxed mb-4">
										Identificamos, analizamos y reducimos los riesgos que amenazan la confidencialidad, integridad
										y disponibilidad de tu información. Fortalecemos tu postura de ciberseguridad con soluciones
										adaptadas a tu realidad.
									</p>

									<div className="mb-4">
										<h4 className="text-muted text-[16px] font-light mb-2">Incluye:</h4>
										<ul className="space-y-2 list-none pl-0">
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[12px]">•</span>
												<p className="text-muted text-[15px] font-light m-0">Evaluación de riesgos y análisis de vulnerabilidades</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">Implementación de políticas y procedimientos de seguridad</p>
											</li>
											<li className="flex items-start gap-2">
												<span className="text-text mt-1.5 text-[10px]">•</span>
												<p className="text-muted text-[14px] font-light m-0">Monitoreo continuo y respuesta a incidentes</p>
											</li>
										</ul>
									</div>

									<div className="flex flex-wrap gap-2 mb-4">
										<span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-[4px] text-[14px] font-light">Seguridad</span>
										<span className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-[4px] text-[14px] font-light">Protección</span>
										<span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-[4px] text-[14px] font-light">Riesgos</span>
										<span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-[4px] text-[14px] font-light">Compliance</span>
									</div>

									<a className="group mt-auto w-fit inline-flex items-center gap-2 text-primary text-[15px] font-bold no-underline transition-colors" href="#">
										<span>Consultar ahora</span>
										<span className="w-7 h-7 shrink-0 rounded-[4px] bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
											<ArrowRight className="w-3.5 h-3.5 text-primary" />
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Controles de navegación con indicador de progreso */}
				<div className="flex flex-col items-center gap-4 mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 md:px-12 lg:px-[120px]">
					<div className="w-full max-w-[300px] sm:max-w-[400px] relative">
						<div className="h-1 bg-gray-200 rounded-full overflow-hidden">
							<div id="progressBar" className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: '0%' }}></div>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<button
							className="swiper-button-prev-custom w-10 h-10 rounded-[4px] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.12)] flex items-center justify-center text-text font-medium hover:bg-gray-50 transition-colors"
							aria-label="Anterior servicio"
						>
							<ChevronLeft className="w-4 h-4" />
						</button>

						<button
							className="swiper-button-next-custom w-10 h-10 rounded-[4px] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.12)] flex items-center justify-center text-text font-medium hover:bg-gray-50 transition-colors"
							aria-label="Siguiente servicio"
						>
							<ChevronRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</section>

			<style jsx global>{`
				.services-swiper {
					padding: 20px 0;
					width: 100%;
				}

				.services-swiper .swiper-wrapper {
					display: flex;
				}

				.services-swiper .swiper-slide {
					transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
					will-change: opacity, transform;
					width: 360px !important;
					min-width: 360px;
					height: auto !important;
					min-height: 400px;
					flex-shrink: 0;
					box-sizing: border-box;
					transform-origin: center center;
				}

				@media (min-width: 640px) {
					.services-swiper .swiper-slide {
						width: 420px !important;
						min-width: 420px;
					}
				}

				@media (min-width: 1024px) {
					.services-swiper .swiper-slide {
						width: 500px !important;
						min-width: 500px;
					}
				}

				.services-swiper .swiper-wrapper {
					transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				}

				#nuestros-servicios {
					overflow: visible;
				}
			`}</style>
		</>
	);
}
