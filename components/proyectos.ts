export type Proyecto = {
	id: string;
	name: string;
	category: string;
	year?: string;
	summary: string;
	/** Datos destacados (se muestran en la home y en /proyectos). */
	stats?: { value: string; label: string }[];
	/** Etiquetas de lo que desarrollamos. */
	tags: string[];
	recognition?: { title: string; detail: string };
	url: string;
	/** Texto del link externo. */
	cta: string;
	image: { src: string; alt: string };
	/** true = aparece también en la sección "Nuestros proyectos" de la home. */
	destacado?: boolean;
	/** false = oculto en todo el sitio (se conserva para reactivarlo más adelante). */
	visible?: boolean;
};

/**
 * Fuente única de proyectos: la usan la home (CasosDeExito, solo los `destacado`)
 * y la página /proyectos. Para sumar un proyecto, agregar una entrada. El orden es el orden en pantalla.
 */
export const PROYECTOS: Proyecto[] = [
	{
		id: 'ushuaia360',
		name: 'Ushuaia360',
		category: 'App web y mobile',
		year: '2026',
		summary:
			'App de senderismo para Tierra del Fuego con senderos GPS, vistas 360° y navegación sin señal. Desarrollamos la app para iOS y Android, el panel de gestión y la API.',
		stats: [
			{ value: 'App, web y API', label: 'Desarrollo completo' },
			{ value: 'iOS + Android', label: 'Publicada en ambas tiendas' },
			{ value: 'Sin señal', label: 'Funciona sin conexión' },
		],
		tags: ['App móvil', 'Panel web', 'API', 'Turismo'],
		recognition: {
			title: 'Declarada de interés provincial, turístico y tecnológico',
			detail: 'Legislatura de Tierra del Fuego · Resolución N.º 252',
		},
		url: 'https://ushuaia360.com/links',
		cta: 'Ver proyecto',
		image: {
			src: '/Images/casos/ushuaia360/ushuaia.jpg',
			alt: 'App Ushuaia360 para explorar senderos y lugares turísticos de Tierra del Fuego',
		},
		destacado: true,
	},
	{
		id: 'checkrto',
		name: 'CheckRTO',
		category: 'Plataforma web',
		summary:
			'Sistema de gestión para talleres RTO/VTV: lleva cada inspección desde el ingreso hasta el certificado digital, con trazabilidad y control en tiempo real.',
		stats: [
			{ value: 'Checklist', label: 'Inspecciones estructuradas' },
			{ value: 'Certificados', label: 'Digitales y automáticos' },
			{ value: 'Obleas QR', label: 'Integración incluida' },
		],
		tags: ['Plataforma web', 'Gestión de talleres', 'Obleas QR', 'Certificados digitales'],
		url: 'https://www.checkrto.com',
		cta: 'Ver proyecto',
		image: {
			src: '/Images/checkrto/revisiones.webp',
			alt: 'Panel de revisiones de la plataforma CheckRTO para talleres de revisión técnica',
		},
	},
	{
		id: 'nubapay',
		name: 'Nubapay',
		// Oculto por ahora: volver a `true` (o borrar la línea) para mostrarlo.
		visible: false,
		category: 'Plataforma web',
		summary:
			'Plataforma para eventos y festivales: entradas, parking, menú digital y retiro con QR, para que cada evento sea más ágil.',
		stats: [
			{ value: 'Entradas', label: 'Venta y control de acceso' },
			{ value: 'Menú digital', label: 'Pedidos desde el celular' },
			{ value: 'Retiro con QR', label: 'Sin filas ni demoras' },
		],
		tags: ['Plataforma web', 'Eventos', 'Pagos', 'QR'],
		url: 'https://nubapay.app',
		cta: 'Ver proyecto',
		image: {
			src: '/Images/nubapay/landing.png',
			alt: 'Landing de Nubapay: menú digital, pagos móviles y retiro con QR para eventos y festivales',
		},
	},
];

/** Proyectos que se muestran en el sitio (filtra los `visible: false`). */
export const PROYECTOS_VISIBLES = PROYECTOS.filter((p) => p.visible !== false);
