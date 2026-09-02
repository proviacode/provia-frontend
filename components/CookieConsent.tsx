'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'provia-cookie-consent';

type Consent = {
	necessary: true;
	analytics: boolean;
	marketing: boolean;
};

export default function CookieConsent() {
	const [visible, setVisible] = useState(false);
	const [customizing, setCustomizing] = useState(false);
	const [analytics, setAnalytics] = useState(true);
	const [marketing, setMarketing] = useState(true);

	useEffect(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (!stored) {
				setVisible(true);
			}
		} catch {
			setVisible(true);
		}
	}, []);

	function saveConsent(consent: Consent) {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, timestamp: Date.now() }));
		} catch {
			// ignore storage errors (private browsing, etc.)
		}
		setVisible(false);
	}

	function handleRejectAll() {
		saveConsent({ necessary: true, analytics: false, marketing: false });
	}

	function handleAcceptAll() {
		saveConsent({ necessary: true, analytics: true, marketing: true });
	}

	function handleSavePreferences() {
		saveConsent({ necessary: true, analytics, marketing });
	}

	if (!visible) return null;

	return (
		<div
			className="fixed inset-0 z-[9998] flex items-end justify-start pointer-events-none"
			style={{ height: '100dvh' }}
		>
			<div
				className="pointer-events-auto w-full max-w-full px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:w-[460px] sm:max-w-[calc(100vw-2rem)] sm:ml-4 sm:mb-4 sm:p-5 bg-card rounded-t-[20px] sm:rounded-[20px] shadow-card border border-primary/10 border-b-0 sm:border-b animate-[cookie-slide-up_0.4s_ease-out]"
				role="dialog"
				aria-live="polite"
				aria-label="Configuración de cookies"
			>
				<h2 className="text-lg font-semibold text-text mb-1.5">Configuración de cookies</h2>
			<p className="text-muted text-sm font-light leading-relaxed mb-4">
				Usamos cookies para personalizar el contenido, ofrecer funciones de redes sociales y analizar el
				tráfico del sitio.
			</p>

			{customizing && (
				<div className="mb-4 space-y-2">
					<label className="flex items-center justify-between gap-3 py-0.5">
						<span className="text-sm font-medium text-text">Necesarias</span>
						<input type="checkbox" checked disabled className="w-4 h-4 accent-primary/40" />
					</label>
					<label className="flex items-center justify-between gap-3 py-0.5 cursor-pointer">
						<span className="text-sm font-medium text-text">Analíticas</span>
						<input
							type="checkbox"
							checked={analytics}
							onChange={(e) => setAnalytics(e.target.checked)}
							className="w-4 h-4 accent-primary cursor-pointer"
						/>
					</label>
					<label className="flex items-center justify-between gap-3 py-0.5 cursor-pointer">
						<span className="text-sm font-medium text-text">Marketing</span>
						<input
							type="checkbox"
							checked={marketing}
							onChange={(e) => setMarketing(e.target.checked)}
							className="w-4 h-4 accent-primary cursor-pointer"
						/>
					</label>
				</div>
			)}

			{!customizing ? (
				<div className="grid grid-cols-3 gap-2">
					<button
						type="button"
						onClick={handleRejectAll}
						className="px-2 py-2.5 rounded-full bg-primary/10 text-primary-strong text-[13px] font-medium whitespace-nowrap hover:bg-primary/20 transition-colors"
					>
						Rechazar
					</button>
					<button
						type="button"
						onClick={() => setCustomizing(true)}
						className="px-2 py-2.5 rounded-full bg-primary/10 text-primary-strong text-[13px] font-medium whitespace-nowrap hover:bg-primary/20 transition-colors"
					>
						Personalizar
					</button>
					<button
						type="button"
						onClick={handleAcceptAll}
						className="px-2 py-2.5 rounded-full bg-primary text-white text-[13px] font-medium whitespace-nowrap shadow-[0_3px_10px_rgba(30,158,245,0.25)] hover:bg-primary-strong transition-colors"
					>
						Aceptar todo
					</button>
				</div>
			) : (
				<div className="grid grid-cols-2 gap-2">
					<button
						type="button"
						onClick={() => setCustomizing(false)}
						className="px-3 py-2.5 rounded-full bg-primary/10 text-primary-strong text-sm font-medium hover:bg-primary/20 transition-colors"
					>
						Volver
					</button>
					<button
						type="button"
						onClick={handleSavePreferences}
						className="px-3 py-2.5 rounded-full bg-primary text-white text-sm font-medium shadow-[0_3px_10px_rgba(30,158,245,0.25)] hover:bg-primary-strong transition-colors"
					>
						Guardar
					</button>
				</div>
			)}

			<style jsx global>{`
				@keyframes cookie-slide-up {
					from {
						opacity: 0;
						transform: translateY(16px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
			</div>
		</div>
	);
}
