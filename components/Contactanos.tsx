import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Contactanos() {
	return (
		<section id="contactanos" className="border-t border-gray-200 pt-6 sm:pt-8">
			<p className="text-muted text-[11px] font-medium tracking-[0.15em] uppercase mb-4">Contacto</p>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
				<div className="flex flex-col">
					<h2 className="text-[clamp(28px,4.5vw,48px)] font-bold leading-tight tracking-tight text-text mb-4 sm:mb-6 m-0">
						El aliado que tu gestión necesita.
					</h2>
					<p className="text-[rgb(19,19,19)] text-base sm:text-lg font-light leading-relaxed mb-6 sm:mb-8 max-w-[480px] m-0">
						Reunimos experiencia multidisciplinaria para poner la tecnología y la gestión a tu favor.
						Trabajamos junto a tu organización para diseñar soluciones a medida que cumplan con los más
						altos estándares.
					</p>
					<Link
						href="/contacto"
						className="group w-fit inline-flex items-center justify-between gap-8 pl-5 sm:pl-6 pr-2 py-2 rounded-[4px] bg-text text-white font-bold text-[17px] no-underline transition-colors hover:bg-black"
					>
						<span>Contáctanos</span>
						<span className="w-9 h-9 shrink-0 rounded-[4px] bg-white grid place-items-center text-text group-hover:bg-gray-200 transition-colors">
							<ArrowUpRight className="w-4 h-4" />
						</span>
					</Link>
				</div>

				<div>
					<img
						src="/Images/av2.avif"
						alt="Equipo multidisciplinario de Provia Consulting"
						className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
						width={800}
						height={420}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
