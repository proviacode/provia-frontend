import type { LucideIcon } from 'lucide-react';
import { BookOpen, Target, Briefcase, Scale, Car, ShieldCheck, Code2 } from 'lucide-react';

export type Servicio = {
	id: string;
	title: string;
	description: string;
	includes: string[];
	icon: LucideIcon;
	/** false = oculto en el sitio (se conserva para poder reactivarlo). */
	visible: boolean;
};

/**
 * Fuente única de servicios: la usan la sección "Nuestros servicios", la lista
 * "Qué hacemos" de Quiénes somos y los datos estructurados (JSON-LD) del layout.
 * Para mostrar u ocultar un servicio, cambiar `visible`. El orden del array es el orden en pantalla.
 */
export const SERVICIOS: Servicio[] = [
	{
		id: 'soluciones-digitales',
		title: 'Soluciones digitales',
		description:
			'Desarrollamos software a medida y protegemos la información de tu organización, con herramientas digitales confiables, escalables y seguras.',
		includes: [
			'Sistemas web y aplicaciones móviles a medida.',
			'Automatización de procesos e integración de sistemas.',
			'Evaluación de riesgos y análisis de vulnerabilidades.',
			'Políticas de seguridad, monitoreo y respuesta a incidentes.',
		],
		icon: Code2,
		visible: true,
	},
	{
		id: 'consultoria-capacitacion',
		title: 'Consultoría y capacitación',
		description:
			'Acompañamos a tu organización con estrategia, formación y soporte legal-contable para ordenar procesos, profesionalizar equipos y tomar mejores decisiones.',
		includes: [
			'Diagnóstico organizacional y planificación estratégica.',
			'Capacitaciones en educación vial, ventas, marketing y costos.',
			'Talleres de Design Thinking y facilitación de equipos.',
			'Asesoramiento legal y contable en normativa, contratos y licitaciones.',
		],
		icon: Briefcase,
		visible: true,
	},
	{
		id: 'checkrto',
		title: 'CheckRTO: revisión técnica vehicular',
		description:
			'Nuestra plataforma para talleres RTV: lleva cada inspección desde el ingreso hasta el certificado digital en un solo sistema, con trazabilidad y control en tiempo real.',
		includes: [
			'Gestión de inspecciones con checklist estructurada.',
			'Informes automáticos y certificados digitales.',
			'Integración con obleas QR.',
			'Paneles de seguimiento por taller y jurisdicción.',
		],
		icon: Car,
		visible: true,
	},

	// --- Ocultos (servicios individuales previos, fusionados arriba) ---
	{
		id: 'desarrollo-software',
		title: 'Desarrollo de software',
		description:
			'Diseñamos y desarrollamos software a medida para digitalizar procesos, integrar sistemas y dar a tu organización herramientas confiables y escalables.',
		includes: [
			'Sistemas web y aplicaciones móviles a medida.',
			'Automatización de procesos e integración con sistemas existentes.',
			'Paneles de gestión, reportes e indicadores.',
			'Soporte, mantenimiento y evolución continua.',
		],
		icon: Code2,
		visible: false,
	},
	{
		id: 'ciberseguridad',
		title: 'Ciberseguridad',
		description:
			'Identificamos, analizamos y reducimos los riesgos que amenazan la confidencialidad, integridad y disponibilidad de tu información.',
		includes: [
			'Evaluación de riesgos y análisis de vulnerabilidades.',
			'Políticas y procedimientos de seguridad.',
			'Monitoreo continuo y respuesta a incidentes.',
		],
		icon: ShieldCheck,
		visible: false,
	},
	{
		id: 'rtv',
		title: 'Sistema Integral de Revisión Técnica Vehicular',
		description:
			'Plataforma para talleres RTV que centraliza la operación y asegura trazabilidad, seguridad y transparencia, con control en tiempo real.',
		includes: [
			'Trazabilidad total de cada revisión.',
			'Reportes automáticos y paneles de seguimiento.',
			'Integración con obleas QR.',
			'Centralización de datos por taller y jurisdicción.',
		],
		icon: Car,
		visible: false,
	},
	{
		id: 'capacitaciones',
		title: 'Capacitaciones',
		description:
			'Programas formativos para fortalecer habilidades, profesionalizar equipos y mejorar la eficiencia operativa.',
		includes: [
			'Educación vial para empresas, instituciones y municipios.',
			'Formación en ventas, marketing y posicionamiento de marca.',
			'Estrategias integrales de costos para optimizar recursos.',
		],
		icon: BookOpen,
		visible: false,
	},
	{
		id: 'talleres',
		title: 'Implementación de talleres',
		description:
			'Talleres prácticos enfocados en resolver desafíos específicos de tu organización, promoviendo la innovación y el pensamiento estratégico.',
		includes: [
			'Talleres de Design Thinking y creatividad.',
			'Sesiones de planificación estratégica.',
			'Facilitación de equipos de alto rendimiento.',
		],
		icon: Target,
		visible: false,
	},
	{
		id: 'estrategias',
		title: 'Estrategias empresariales',
		description:
			'Planes estratégicos alineados con la visión de tu organización, optimizando procesos y recursos para alcanzar objetivos sostenibles.',
		includes: [
			'Diagnóstico y análisis organizacional.',
			'Optimización de procesos y flujos de trabajo.',
			'Transformación digital y modernización.',
		],
		icon: Briefcase,
		visible: false,
	},
	{
		id: 'legal-contable',
		title: 'Asistencia legal y contable',
		description: 'Soporte normativo, jurídico y financiero para asegurar proyectos sólidos y ordenados.',
		includes: [
			'Asesoramiento en normativa vigente.',
			'Estructuras contables eficientes.',
			'Acompañamiento legal en licitaciones, contratos y regulaciones.',
		],
		icon: Scale,
		visible: false,
	},
];

export const SERVICIOS_VISIBLES = SERVICIOS.filter((s) => s.visible);
