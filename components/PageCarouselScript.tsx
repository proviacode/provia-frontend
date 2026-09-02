'use client';

import { useEffect } from 'react';

export default function PageCarouselScript() {
	useEffect(() => {
		// Carousel functionality
		const carousel = document.getElementById('servicesCarousel');
		const prevBtn = document.getElementById('prevBtn');
		const nextBtn = document.getElementById('nextBtn');
		const indicators = document.querySelectorAll('.carousel-indicator');

		let currentIndex = 0;
		const totalSlides = 3;

		function updateCarousel() {
			if (carousel) {
				const offset = -currentIndex * 100;
				(carousel as HTMLElement).style.transform = `translateX(${offset}%)`;
			}

			indicators.forEach((indicator, index) => {
				if (index === currentIndex) {
					indicator.classList.remove('bg-gray-300');
					indicator.classList.add('bg-primary');
				} else {
					indicator.classList.remove('bg-primary');
					indicator.classList.add('bg-gray-300');
				}
			});
		}

		const prevHandler = () => {
			currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
			updateCarousel();
		};
		const nextHandler = () => {
			currentIndex = (currentIndex + 1) % totalSlides;
			updateCarousel();
		};

		if (prevBtn) prevBtn.addEventListener('click', prevHandler);
		if (nextBtn) nextBtn.addEventListener('click', nextHandler);

		const indicatorHandlers: { el: Element; handler: () => void }[] = [];
		indicators.forEach((indicator) => {
			const handler = () => {
				const index = parseInt(indicator.getAttribute('data-index') || '0');
				currentIndex = index;
				updateCarousel();
			};
			indicator.addEventListener('click', handler);
			indicatorHandlers.push({ el: indicator, handler });
		});

		return () => {
			if (prevBtn) prevBtn.removeEventListener('click', prevHandler);
			if (nextBtn) nextBtn.removeEventListener('click', nextHandler);
			indicatorHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
		};
	}, []);

	return null;
}
