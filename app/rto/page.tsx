import type { Metadata } from 'next';
import Link from 'next/link';
import {
	ArrowUpRight,
	ClipboardCheck,
	BadgeCheck,
	GraduationCap,
	MonitorCog,
	Handshake,
	Award,
	TrendingUp,
	HeartHandshake,
	ShieldCheck,
	ListOrdered,
	ClipboardList,
	Tag,
	Printer,
	FolderOpen,
	BarChart3,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const seoTitle = 'Talleres RTO llave en mano | Provia Consulting';
const seoDescription =
	'Desarrollamos, implementamos y ponemos en marcha talleres de Revisión Técnica Obligatoria para concesionarias, talleres mecánicos e importadores. Habilitación en 3 meses bajo la Resolución 32/2026.';

export const metadata: Metadata = {
	title: seoTitle,
	description: seoDescription,
	alternates: {
		canonical: '/rto',
	},
	openGraph: {
		title: seoTitle,
		description: seoDescription,
		url: '/rto',
	},
	twitter: {
		title: seoTitle,
		description: seoDescription,
	},
};

const AUDIENCIAS = ['Concesionarias', 'Talleres mecánicos', 'Importadores'];

const DATOS = [
	{ value: '+15 M', label: 'vehículos obligados a realizar la RTO en Argentina' },
	{ value: '3 meses', label: 'desde la planificación hasta la habilitación comercial' },
	{ value: '15 años', label: 'de experiencia en revisión técnica vehicular' },
];

const CAMBIOS = [
	{ aspecto: 'Registro de talleres', antes: 'Cerrado desde 2023', despues: 'Abierto, gratuito y digital' },
	{ aspecto: 'Tipos de vehículos', antes: 'Segmentado por categoría', despues: 'Todos los tipos en un mismo taller' },
	{ aspecto: 'Precios', antes: 'Regulados o condicionados', despues: 'Libres: decide el mercado' },
	{ aspecto: 'Certificado', antes: 'Solo físico', despues: 'Digital y físico, con igual validez' },
	{ aspecto: 'Autoridad', antes: 'Ministerio de Transporte', despues: 'Secretaría de Transporte (MEC)' },
];

const VENTAJAS = [
	{
		icon: TrendingUp,
		title: 'Nuevos ingresos',
		text: 'La RTO suma una fuente de ingresos recurrente aprovechando las instalaciones y la infraestructura que ya tenés.',
	},
	{
		icon: HeartHandshake,
		title: 'Confianza y fidelización',
		text: 'Que el cliente haga la revisión en el mismo lugar donde hace el service genera confianza, comodidad y transparencia.',
	},
	{
		icon: ShieldCheck,
		title: 'Seguridad vial',
		text: 'Cada vehículo verificado como "apto" ayuda a prevenir siniestros causados por fallas mecánicas y a reducir la contaminación.',
	},
];

const EXPERIENCIA = [
	{
		icon: ClipboardCheck,
		title: 'Protocolos operativos probados',
		text: 'Procedimientos optimizados para vehículos particulares, comerciales, de carga y especiales. Certificación técnica bajo Disposición E-26 ANSV y Manual 101/2019.',
	},
	{
		icon: BadgeCheck,
		title: 'Talleres registrados ante ANSV',
		text: 'Contamos con el primer taller inscripto en el Registro Nacional bajo la nueva normativa: un respaldo institucional que diferencia a toda la red.',
	},
	{
		icon: GraduationCap,
		title: 'Know-how técnico transferible',
		text: 'Manual operativo completo y capacitación técnica certificada para inspectores y personal administrativo.',
	},
	{
		icon: MonitorCog,
		title: 'Sistema de gestión propio',
		text: 'CheckRTO, nuestra plataforma de gestión de inspecciones, compatible con la base centralizada de la Subsecretaría. Te la mostramos más abajo.',
	},
	{
		icon: Handshake,
		title: 'Red de proveedores negociada',
		text: 'Condiciones preferenciales con proveedores de equipamiento técnico: frenómetros, fosas, opacímetros y analizadores de gases.',
	},
	{
		icon: Award,
		title: 'Marca y reputación',
		text: '15 años de presencia en el mercado, una cartera de clientes fidelizados y reputación como referente técnico en el país.',
	},
];

const ETAPAS = [
	{ mes: 'Mes 1', title: 'Planificación del proyecto', text: 'Relevamiento del espacio, diseño y layout de la planta y marco normativo.' },
	{ mes: 'Mes 2', title: 'Equipamiento y tecnología', text: 'Adquisición del equipamiento homologado, puesta en marcha de CheckRTO e integración con los sistemas oficiales.' },
	{ mes: 'Mes 3', title: 'Capacitación y habilitación', text: 'Formación técnica del personal y habilitación comercial del taller.' },
];

const FLUJO = [
	{ paso: 'Ingreso', text: 'Se registra el vehículo y su titular.' },
	{ paso: 'Cola', text: 'Se prioriza y se asigna un técnico.' },
	{ paso: 'Inspección', text: 'Checklist configurable por tipo de vehículo.' },
	{ paso: 'Oblea y CRT', text: 'Se asigna la oblea y se emite el certificado.' },
	{ paso: 'Legajo', text: 'Todo queda en el historial digital del vehículo.' },
];

const MODULOS = [
	{
		icon: ClipboardList,
		title: 'Gestión de revisiones',
		text: 'Todo el proceso de revisión en un solo lugar, con estados claros y sin perder información.',
	},
	{
		icon: ListOrdered,
		title: 'Cola de revisiones',
		text: 'La fila de vehículos en espera, con prioridades y asignación dinámica de técnicos.',
	},
	{
		icon: Tag,
		title: 'Asignación de obleas',
		text: 'Control de stock y asignación de obleas a cada vehículo, con registro exacto y sin duplicidades.',
	},
	{
		icon: Printer,
		title: 'Reimpresión de CRT',
		text: 'Reimpresiones de Certificados de Revisión Técnica ágiles y con control de versiones.',
	},
	{
		icon: FolderOpen,
		title: 'Legajos digitales',
		text: 'Documentos y datos de cada vehículo en un legajo digital, con acceso rápido al historial.',
	},
	{
		icon: BarChart3,
		title: 'Estadísticas',
		text: 'Tiempos, productividad y fallas recurrentes para tomar decisiones. Exportación a Excel y PDF.',
	},
];

const MODELOS = [
	{
		letra: 'A',
		title: 'Inversión propia',
		text: 'La concesionaria, el taller o el importador asume la totalidad de la inversión: obra civil, equipamiento, sistemas y personal.',
	},
	{
		letra: 'B',
		title: 'Inversión mixta',
		text: 'Se conforma una sociedad con inversores externos que aportan capital. Ambas partes participan de la gestión.',
	},
	{
		letra: 'C',
		title: 'UTE',
		text: 'El operador aporta la infraestructura y la empresa especializada aporta el equipamiento y el personal. La operación y las ganancias se comparten.',
	},
];

const eyebrow = 'text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4';
const h2 = 'text-[clamp(28px,4.5vw,48px)] font-bold leading-tight tracking-tight text-text m-0';
const lead = 'text-text text-base sm:text-lg font-light leading-relaxed m-0 max-w-[520px]';

function CtaButton({ children }: { children: React.ReactNode }) {
	return (
		<Link href="/contacto" className="group btn-primary shrink-0">
			{children}
			<span className="btn-icon">
				<ArrowUpRight className="w-4 h-4" />
			</span>
		</Link>
	);
}

export default function RtoPage() {
	return (
		<>
			<main className="w-full px-6 sm:px-8 md:px-12 lg:px-[120px] pt-0 pb-14">
				<Header isHomePage={false} activeSection="rto" />

				{/* Intro */}
				<section className="mb-20 sm:mb-28 md:mb-32" itemScope itemType="https://schema.org/Service">
					<p className={eyebrow}>Revisión Técnica Obligatoria</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 lg:items-end">
						<h1
							className="text-[clamp(34px,5.5vw,58px)] font-bold leading-[1.1] tracking-tight text-text m-0 max-w-[480px]"
							itemProp="name"
						>
							Convertí tu infraestructura en un taller de RTO/VTV.
						</h1>
						<div className="flex flex-col gap-6">
							<p className={lead} itemProp="description">
								Desarrollamos, implementamos y ponemos en marcha talleres de verificación técnica: marco
								normativo, equipamiento homologado, diseño de la planta y nuestra plataforma de gestión
								CheckRTO.
							</p>
							<ul className="list-none p-0 m-0 flex flex-wrap gap-2">
								{AUDIENCIAS.map((a) => (
									<li key={a} className="px-3 py-1.5 rounded-[4px] bg-bg text-text text-sm font-medium">
										{a}
									</li>
								))}
							</ul>
							<CtaButton>Quiero mi taller</CtaButton>
						</div>
					</div>

					<dl className="grid grid-cols-1 sm:grid-cols-3 border-y border-line m-0 mt-12 sm:mt-16">
						{DATOS.map((d, i) => (
							<div
								key={d.label}
								className={`py-6 sm:pr-6 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-line sm:pl-6' : ''}`}
							>
								<dd className="m-0 text-[clamp(28px,4vw,40px)] font-bold leading-none text-text mb-3">{d.value}</dd>
								<dt className="text-muted text-[15px] font-light leading-snug max-w-[260px]">{d.label}</dt>
							</div>
						))}
					</dl>
				</section>

				{/* Mercado */}
				<section id="mercado" className="border-t border-line pt-6 sm:pt-8 mb-20 sm:mb-28">
					<p className={eyebrow}>Resolución 32/2026</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-14 lg:items-end mb-10 sm:mb-14">
						<h2 className={h2}>Un mercado que acaba de abrirse.</h2>
						<p className={lead}>
							La Resolución RESOL-2026-32-APN-ST#MEC reabrió el Registro Nacional de Talleres RTO: ahora es
							abierto, gratuito y digital, y un solo taller puede inspeccionar todo tipo de vehículo.
						</p>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full min-w-[560px] border-collapse text-left">
							<thead>
								<tr className="border-b border-line">
									<th className="py-3 pr-4 text-muted text-[13px] font-medium w-1/4" scope="col">
										<span className="sr-only">Aspecto</span>
									</th>
									<th className="py-3 pr-4 text-muted text-[13px] font-medium uppercase tracking-[0.1em]" scope="col">
										Antes
									</th>
									<th className="py-3 text-primary text-[13px] font-medium uppercase tracking-[0.1em]" scope="col">
										Ahora
									</th>
								</tr>
							</thead>
							<tbody>
								{CAMBIOS.map((c) => (
									<tr key={c.aspecto} className="border-b border-line">
										<th scope="row" className="py-4 pr-4 text-text text-[15px] font-bold">
											{c.aspecto}
										</th>
										<td className="py-4 pr-4 text-muted text-[15px] font-light">{c.antes}</td>
										<td className="py-4 text-text text-[15px] font-medium">{c.despues}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className="relative mt-10 overflow-hidden rounded-[16px] border border-line bg-bg">
						{/* Halo y grilla sutiles */}
						<div
							aria-hidden
							className="pointer-events-none absolute -left-24 -bottom-40 w-[560px] h-[560px] rounded-full blur-3xl"
							style={{ background: 'radial-gradient(closest-side, rgba(58,168,247,0.16), transparent)' }}
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 opacity-40"
							style={{
								backgroundImage:
									'linear-gradient(rgb(var(--c-line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--c-line)) 1px, transparent 1px)',
								backgroundSize: '56px 56px',
								maskImage: 'radial-gradient(ellipse at 0% 100%, black, transparent 65%)',
								WebkitMaskImage: 'radial-gradient(ellipse at 0% 100%, black, transparent 65%)',
							}}
						/>

						<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 p-6 sm:p-10 lg:p-14 lg:items-end">
							<div className="lg:col-span-5">
								<p className="eyebrow mb-6">Mercado cautivo</p>
								<p
									aria-hidden
									className="m-0 text-[clamp(80px,11vw,168px)] font-medium leading-[0.82] tracking-[-0.06em] text-text"
								>
									+15<span className="text-primary">M</span>
								</p>
								<p className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted m-0 mt-5">
									vehículos en Argentina
								</p>
							</div>

							<div className="lg:col-span-6 lg:col-start-7">
								<p className="m-0 text-[clamp(22px,2.4vw,32px)] font-medium leading-[1.2] tracking-[-0.02em] text-text [text-wrap:balance]">
									Más de 15 millones de vehículos en Argentina deben realizar la RTO.
								</p>
								<p className="text-muted text-[16px] sm:text-[17px] leading-relaxed m-0 mt-4 max-w-[480px]">
									Un mercado cautivo, con renovación periódica obligatoria por ley y precios ahora libres.
								</p>
								<ul className="list-none p-0 m-0 mt-8 flex flex-wrap gap-2">
									{['Renovación periódica', 'Obligatoria por ley', 'Precios libres'].map((t) => (
										<li key={t} className="px-3 py-1.5 rounded-full border border-line text-text text-[13px]">
											{t}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<ul className="list-none p-0 m-0 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
						{VENTAJAS.map(({ icon: Icon, title, text }) => (
							<li key={title}>
								<Icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
								<h3 className="text-[18px] font-bold text-text m-0 mb-2">{title}</h3>
								<p className="text-muted text-[15px] font-light leading-relaxed m-0">{text}</p>
							</li>
						))}
					</ul>
				</section>

				{/* Experiencia */}
				<section id="experiencia" className="border-t border-line pt-6 sm:pt-8 mb-20 sm:mb-28">
					<p className={eyebrow}>15 años de experiencia</p>
					<h2 className={`${h2} mb-10 sm:mb-14 max-w-[760px]`}>
						Todo lo que necesitás para operar, desde el primer día.
					</h2>
					<ul className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
						{EXPERIENCIA.map(({ icon: Icon, title, text }) => (
							<li key={title} className="border-r border-b border-line p-6 sm:p-8">
								<Icon className="w-6 h-6 text-text/40 mb-6" strokeWidth={1.5} />
								<h3 className="text-[18px] sm:text-[20px] font-bold leading-snug text-text m-0 mb-3">{title}</h3>
								<p className="text-muted text-[15px] font-light leading-relaxed m-0">{text}</p>
							</li>
						))}
					</ul>
				</section>

				{/* CheckRTO */}
				<section id="checkrto" className="border-t border-line pt-6 sm:pt-8 mb-20 sm:mb-28">
					<p className={eyebrow}>Tecnología incluida en el modelo</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-14 lg:items-end mb-10 sm:mb-14">
						<h2 className="text-[clamp(26px,4vw,40px)] font-bold leading-tight tracking-tight text-text m-0">
							Tu taller opera con CheckRTO desde el primer día.
						</h2>
						<p className={lead}>
							CheckRTO es la plataforma de gestión para talleres de RTO que desarrollamos en Provia. La
							implementamos durante el armado del taller y capacitamos a tu equipo, así la habilitación llega
							con el sistema funcionando.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 lg:items-center mb-12 sm:mb-16">
						<div className="lg:col-span-7 rounded-[6px] bg-bg p-2 sm:p-3 border border-line">
							<img
								src="/Images/checkrto/revisiones.webp"
								alt="Pantalla de revisiones de CheckRTO, con el listado de inspecciones y su estado"
								className="w-full h-auto rounded-[4px]"
								width={1920}
								height={1080}
								loading="lazy"
							/>
						</div>

						<div className="lg:col-span-5">
							<h3 className="text-[18px] sm:text-[20px] font-bold text-text m-0 mb-6">
								Cómo se integra en la operación
							</h3>
							<ol className="list-none p-0 m-0 border-l border-line">
								{FLUJO.map((f, i) => (
									<li key={f.paso} className="relative pl-6 pb-5 last:pb-0">
										<span
											aria-hidden
											className="absolute left-[-5px] top-[7px] w-[9px] h-[9px] rounded-full bg-primary"
										/>
										<p className="text-text text-[15px] font-bold m-0">
											<span className="text-muted font-medium tabular-nums mr-2">{String(i + 1).padStart(2, '0')}</span>
											{f.paso}
										</p>
										<p className="text-muted text-[15px] font-light leading-relaxed m-0">{f.text}</p>
									</li>
								))}
							</ol>
						</div>
					</div>

					<ul className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
						{MODULOS.map(({ icon: Icon, title, text }) => (
							<li key={title} className="border-r border-b border-line p-6 sm:p-8">
								<Icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.5} />
								<h3 className="text-[18px] font-bold leading-snug text-text m-0 mb-2">{title}</h3>
								<p className="text-muted text-[15px] font-light leading-relaxed m-0">{text}</p>
							</li>
						))}
					</ul>

					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-8 sm:mt-10">
						<div className="flex items-start gap-3 border-l-2 border-primary bg-bg rounded-r-[4px] px-4 py-3 max-w-[620px]">
							<ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-primary" strokeWidth={1.75} />
							<p className="text-text text-[15px] font-light leading-snug m-0">
								<span className="font-bold">Cumplimiento normativo:</span> diseñado según el Decreto 196/25, con
								trazabilidad completa de cada operación y compatible con la base centralizada de la
								Subsecretaría.
							</p>
						</div>
						<a
							href="https://www.checkrto.com"
							target="_blank"
							rel="noopener noreferrer"
							className="group shrink-0 w-fit inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-[4px] border border-line bg-card text-text font-medium text-sm no-underline transition-colors hover:border-muted/50"
						>
							Conocer CheckRTO
							<span className="w-7 h-7 shrink-0 rounded-[4px] bg-bg grid place-items-center group-hover:bg-line transition-colors">
								<ArrowUpRight className="w-3.5 h-3.5" />
							</span>
						</a>
					</div>
				</section>

				{/* Etapas */}
				<section id="etapas" className="border-t border-line pt-6 sm:pt-8 mb-20 sm:mb-28">
					<p className={eyebrow}>Etapas de armado</p>
					<h2 className={`${h2} mb-10 sm:mb-14`}>Tu taller habilitado en 3 meses.</h2>
					<ol className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
						{ETAPAS.map((e, i) => (
							<li key={e.mes} className="relative md:pr-8">
								<div className="flex items-center mb-5">
									<span className="shrink-0 px-3 py-1.5 rounded-[4px] bg-primary text-white text-[13px] font-bold">
										{e.mes}
									</span>
									{i < ETAPAS.length - 1 && <span aria-hidden className="hidden md:block flex-1 h-px bg-line ml-4" />}
								</div>
								<h3 className="text-[18px] sm:text-[20px] font-bold text-text m-0 mb-2">{e.title}</h3>
								<p className="text-muted text-[15px] font-light leading-relaxed m-0 max-w-[320px]">{e.text}</p>
							</li>
						))}
					</ol>
				</section>

				{/* Modelos */}
				<section id="modelos" className="border-t border-line pt-6 sm:pt-8 mb-16 sm:mb-20">
					<p className={eyebrow}>Modelos de negocio</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-14 lg:items-end mb-10 sm:mb-14">
						<h2 className={h2}>Tres modelos, un mismo estándar.</h2>
						<p className={lead}>Elegí cómo querés invertir. La calidad técnica y operativa es la misma en los tres.</p>
					</div>
					<ul className="list-none p-0 m-0 grid grid-cols-1 lg:grid-cols-3 gap-4">
						{MODELOS.map((m) => (
							<li key={m.letra} className="bg-bg rounded-[4px] p-6 sm:p-8">
								<span className="w-10 h-10 rounded-[4px] bg-primary text-white grid place-items-center font-bold mb-6">
									{m.letra}
								</span>
								<h3 className="text-[20px] font-bold text-text m-0 mb-3">{m.title}</h3>
								<p className="text-muted text-[15px] font-light leading-relaxed m-0">{m.text}</p>
							</li>
						))}
					</ul>

					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-10 sm:mt-14">
						<p className="text-text text-base sm:text-lg font-light leading-relaxed m-0 max-w-[560px]">
							Contanos sobre tu concesionaria, taller o importadora y armamos juntos el modelo que mejor te
							conviene.
						</p>
						<CtaButton>Hablar con un asesor</CtaButton>
					</div>
				</section>
			</main>
			<Footer isHomePage={false} />
		</>
	);
}
