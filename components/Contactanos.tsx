import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Contactanos() {
	return (
		<section
			id="contactanos"
			className="relative overflow-hidden rounded-[20px] border border-line bg-bg px-6 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-24"
			data-reveal
		>
			{/* Isotipo grande de fondo */}
			<Logo
				className="pointer-events-none absolute -right-16 -bottom-24 sm:-right-10 sm:-bottom-20 w-[300px] sm:w-[440px] lg:w-[560px] text-white/[0.035]"
				gapColor="rgb(var(--c-bg))"
			/>

			<div className="relative">
				<h2 className="h-display m-0 text-[clamp(40px,6.4vw,92px)] max-w-[980px]">
					El aliado que tu gestión necesita.
				</h2>

				<p className="text-muted text-[17px] sm:text-[19px] leading-relaxed m-0 mt-8 max-w-[520px]">
					Reunimos experiencia multidisciplinaria para poner la tecnología y la gestión a tu favor. Contanos qué
					necesitás y lo resolvemos juntos.
				</p>

				<div className="flex flex-col sm:flex-row gap-3 mt-10">
					<Link href="/contacto" className="group btn-primary">
						Escribinos
						<span className="btn-icon">
							<ArrowUpRight className="w-4 h-4" />
						</span>
					</Link>
					<a
						href="https://wa.me/5493415964249"
						target="_blank"
						rel="noopener noreferrer"
						className="group btn-ghost"
						aria-label="Escribinos por WhatsApp"
					>
						WhatsApp
						<span className="btn-icon">
							<ArrowUpRight className="w-4 h-4" />
						</span>
					</a>
				</div>

				<a
					href="mailto:proviasoporte@gmail.com"
					className="inline-block mt-12 sm:mt-16 font-mono text-[13px] uppercase tracking-[0.06em] text-muted no-underline hover:text-text transition-colors break-all"
				>
					proviasoporte@gmail.com
				</a>
			</div>
		</section>
	);
}
