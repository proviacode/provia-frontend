/**
 * Isotipo de Provia (módulo isométrico), inline para poder colorearlo con `currentColor`.
 * Geometría tomada de `public/provia-new.svg`.
 *
 * Las líneas que separan las caras usan `gapColor`, que tiene que coincidir con el fondo
 * donde se apoya el logo (por defecto, el fondo de la página).
 */
export default function Logo({
	className,
	gapColor = 'rgb(var(--c-page))',
	title,
}: {
	className?: string;
	gapColor?: string;
	title?: string;
}) {
	return (
		<svg
			viewBox="30 22 140 156"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role={title ? 'img' : undefined}
			aria-hidden={title ? undefined : true}
			aria-label={title}
			fill="currentColor"
			stroke={gapColor}
			strokeWidth={3.5}
			strokeLinejoin="round"
		>
			{/* Cubo con el hueco */}
			<polygon points="130.3,82.5 160.6,65 100,30 39.4,65 69.7,82.5 100,65" />
			<polygon points="100,170 160.6,135 160.6,65 130.3,82.5 130.3,117.5 100,135" />
			<polygon points="100,170 39.4,135 39.4,65 69.7,82.5 69.7,117.5 100,135" />
			{/* Interior del hueco */}
			<polygon points="100,135 130.3,117.5 100,100 69.7,117.5" />
			<polygon points="130.3,117.5 100,100 100,65 130.3,82.5" />
			<polygon points="69.7,117.5 100,100 100,65 69.7,82.5" />
		</svg>
	);
}
