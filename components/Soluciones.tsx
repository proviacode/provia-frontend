import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROYECTOS_VISIBLES, type Proyecto } from './proyectos';

const DATOS = [
	{ value: '15+', label: 'años de experiencia' },
	{ value: '+100', label: 'organizaciones acompañadas' },
	{ value: String(PROYECTOS_VISIBLES.length), label: 'plataformas funcionando hoy' },
];

/** Capturas que se muestran en el hero (ids de `proyectos.ts`): la primera va al frente. */
const VITRINA = ['checkrto', 'nubapay']
	.map((id) => PROYECTOS_VISIBLES.find((p) => p.id === id))
	.filter((p): p is Proyecto => Boolean(p));

const dominio = (url: string) => new URL(url).hostname.replace(/^www\./, '');

/** Captura con barra de navegador. */
function Ventana({ p, className }: { p: Proyecto; className?: string }) {
	return (
		<figure
			className={`m-0 overflow-hidden rounded-[12px] border border-line bg-card shadow-card ${className ?? ''}`}
		>
			<div className="flex items-center gap-1.5 h-8 px-3 border-b border-line">
				<span className="w-2 h-2 rounded-full bg-white/15" />
				<span className="w-2 h-2 rounded-full bg-white/15" />
				<span className="w-2 h-2 rounded-full bg-white/15" />
				<span className="ml-2 font-mono text-[11px] text-muted">{dominio(p.url)}</span>
			</div>
			<img
				src={p.image.src}
				alt={p.image.alt}
				className="block w-full aspect-[16/9] object-cover object-top"
				width={1600}
				height={900}
				loading="eager"
			/>
		</figure>
	);
}

export default function Soluciones() {
	const [frente, fondo] = VITRINA;

	return (
		<section id="hero" itemScope itemType="https://schema.org/Organization">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-10 sm:pt-16 lg:pt-16 pb-14 sm:pb-20">
				<div className="lg:col-span-6">
					<p className="eyebrow mb-6 sm:mb-8">Consultora de tecnología y gestión</p>

					<h1 className="h-display m-0 text-[clamp(38px,4.8vw,68px)]" itemProp="slogan">
						Modernizamos la gestión de tu organización.
					</h1>

					<p
						className="text-muted text-[17px] sm:text-[18px] leading-relaxed max-w-[500px] mt-6 sm:mt-8 mb-0"
						itemProp="description"
					>
						Software a medida, consultoría y acompañamiento para empresas, organismos y municipios que buscan
						ganar eficiencia y transparencia.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-10">
						<Link href="/contacto" className="group btn-primary">
							Consultar ahora
							<span className="btn-icon">
								<ArrowUpRight className="w-4 h-4" />
							</span>
						</Link>
						<a href="#nuestros-servicios" className="group btn-ghost">
							Ver servicios
							<span className="btn-icon">
								<ArrowUpRight className="w-4 h-4" />
							</span>
						</a>
					</div>
				</div>

				{/* Vitrina de proyectos */}
				{frente && (
					<Link
						href="/proyectos"
						aria-label="Ver proyectos de Provia"
						className="group relative block lg:col-span-6 no-underline pb-[18%] lg:pb-[22%] lg:pl-[8%]"
					>
						<Ventana
							p={frente}
							className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1"
						/>
						{fondo && (
							<Ventana
								p={fondo}
								className="absolute left-0 bottom-0 z-20 w-[58%] transition-transform duration-500 ease-out group-hover:translate-y-1"
							/>
						)}
						<span className="absolute right-0 bottom-0 z-20 hidden sm:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.06em] text-muted transition-colors group-hover:text-text">
							{[frente, fondo].filter(Boolean).map((p) => p!.name).join(' · ')}
							<ArrowUpRight className="w-3.5 h-3.5" />
						</span>
					</Link>
				)}
			</div>

			{/* Datos */}
			<dl className="relative grid grid-cols-1 sm:grid-cols-3 border-y border-line m-0">
				{DATOS.map((d, i) => (
					<div
						key={d.label}
						className={`flex items-baseline sm:block gap-4 py-5 sm:py-7 ${
							i > 0 ? 'border-t border-line sm:border-t-0 sm:border-l sm:pl-8' : ''
						}`}
					>
						<dd className="m-0 text-[32px] sm:text-[44px] font-medium leading-none tracking-[-0.04em] text-text sm:mb-3">
							{d.value}
						</dd>
						<dt className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted">{d.label}</dt>
					</div>
				))}
			</dl>
		</section>
	);
}
