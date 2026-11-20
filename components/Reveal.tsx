'use client';

import { useEffect } from 'react';

/**
 * Aparición suave al hacer scroll para los elementos con `data-reveal`.
 * Sin JS (o con "reducir movimiento") el contenido se ve normal: el estado oculto
 * solo se aplica cuando este componente agrega `reveal-ready` al <html>.
 */
export default function Reveal() {
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const root = document.documentElement;
		root.classList.add('reveal-ready');

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add('is-in');
						io.unobserve(e.target);
					}
				});
			},
			{ rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
		);
		document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

		return () => {
			io.disconnect();
			root.classList.remove('reveal-ready');
		};
	}, []);

	return null;
}
