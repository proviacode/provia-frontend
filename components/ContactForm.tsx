'use client';

import { useEffect } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykwpenz';

export default function ContactForm() {
	useEffect(() => {
		const mensajeField = document.getElementById('mensaje') as HTMLTextAreaElement | null;
		const charCount = document.getElementById('charCount');

		function updateCharCount() {
			if (!mensajeField || !charCount) return;
			const currentLength = mensajeField.value.length;
			charCount.textContent = String(currentLength);

			const parent = charCount.parentElement;
			if (!parent) return;
			if (currentLength >= 360) {
				parent.classList.add('text-orange-500');
				parent.classList.remove('text-muted');
			} else if (currentLength >= 400) {
				parent.classList.add('text-red-500');
				parent.classList.remove('text-orange-500', 'text-muted');
			} else {
				parent.classList.remove('text-orange-500', 'text-red-500');
				parent.classList.add('text-muted');
			}
		}

		if (mensajeField && charCount) {
			mensajeField.addEventListener('input', updateCharCount);
			updateCharCount();
		}

		const nombreField = document.getElementById('nombre') as HTMLInputElement | null;
		const emailField = document.getElementById('email') as HTMLInputElement | null;
		const telefonoField = document.getElementById('telefono') as HTMLInputElement | null;
		const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement | null;
		const btnText = document.getElementById('btnText');
		const btnLoader = document.getElementById('btnLoader');
		const formMessage = document.getElementById('formMessage');
		const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;

		function validateForm() {
			if (!nombreField || !emailField || !telefonoField || !submitBtn) return;
			const nombre = nombreField.value.trim();
			const email = emailField.value.trim();
			const telefono = telefonoField.value.trim();

			if (nombre && email && telefono) {
				submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
				submitBtn.classList.add('opacity-100', 'cursor-pointer', 'hover:bg-black');
			} else {
				submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
				submitBtn.classList.remove('opacity-100', 'cursor-pointer', 'hover:bg-black');
			}
		}

		function showMessage(message: string, isError = false) {
			if (!formMessage) return;
			formMessage.textContent = message;
			formMessage.classList.remove('hidden');

			if (isError) {
				formMessage.classList.remove('bg-green-50', 'text-green-700', 'border-green-200');
				formMessage.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200');
			} else {
				formMessage.classList.remove('bg-red-50', 'text-red-700', 'border-red-200');
				formMessage.classList.add('bg-green-50', 'text-green-700', 'border', 'border-green-200');
			}

			formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		}

		function hideMessage() {
			formMessage?.classList.add('hidden');
		}

		function setLoading(isLoading: boolean) {
			if (!submitBtn || !btnText || !btnLoader) return;
			if (isLoading) {
				submitBtn.disabled = true;
				submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
				submitBtn.classList.remove('opacity-100', 'cursor-pointer', 'hover:bg-black');
				btnText.classList.add('hidden');
				btnLoader.classList.remove('hidden');
			} else {
				submitBtn.disabled = false;
				btnText.classList.remove('hidden');
				btnLoader.classList.add('hidden');
				validateForm();
			}
		}

		if (nombreField && emailField && telefonoField && submitBtn) {
			nombreField.addEventListener('input', validateForm);
			emailField.addEventListener('input', validateForm);
			telefonoField.addEventListener('input', validateForm);
			validateForm();
		}

		const submitHandler = async (e: Event) => {
			e.preventDefault();

			hideMessage();

			const nombre = nombreField?.value.trim() ?? '';
			const email = emailField?.value.trim() ?? '';
			const telefono = telefonoField?.value.trim() ?? '';
			const mensaje = mensajeField?.value.trim() ?? '';

			if (!nombre || !email || !telefono) {
				showMessage('Por favor, completa todos los campos requeridos.', true);
				return;
			}

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				showMessage('Por favor, ingresa un email válido.', true);
				return;
			}

			setLoading(true);

			try {
				const mensajeCompleto = `Nombre: ${nombre}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje || '(Sin mensaje)'}`;

				const response = await fetch(FORMSPREE_ENDPOINT, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify({
						email: email,
						message: mensajeCompleto,
					}),
				});

				const data = await response.json();

				if (response.ok) {
					showMessage('¡Mensaje enviado con éxito! Nos comunicaremos contigo pronto.');
					contactForm?.reset();
					updateCharCount();
					validateForm();
				} else {
					if (data.error) {
						showMessage(`Error: ${data.error}`, true);
					} else {
						showMessage('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.', true);
					}
				}
			} catch (error) {
				console.error('Error al enviar formulario:', error);
				showMessage('Error de conexión. Por favor, verifica tu internet e intenta nuevamente.', true);
			} finally {
				setLoading(false);
			}
		};

		if (contactForm) {
			contactForm.addEventListener('submit', submitHandler);
		}

		return () => {
			if (mensajeField) mensajeField.removeEventListener('input', updateCharCount);
			if (nombreField) nombreField.removeEventListener('input', validateForm);
			if (emailField) emailField.removeEventListener('input', validateForm);
			if (telefonoField) telefonoField.removeEventListener('input', validateForm);
			if (contactForm) contactForm.removeEventListener('submit', submitHandler);
		};
	}, []);

	return (
		<div className="bg-white border border-gray-200 rounded-[4px] p-6 sm:p-8 lg:p-10">
			<form id="contactForm" className="space-y-6" method="POST" itemScope itemType="https://schema.org/ContactForm">
				<div id="formMessage" className="hidden p-4 rounded-[4px] text-sm font-medium"></div>

				<div>
					<label htmlFor="nombre" className="block text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-2">
						Nombre completo
					</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						required
						placeholder="Tu nombre completo"
						className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-text text-base focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400"
					/>
					<span className="error-message hidden text-xs text-red-500 mt-1"></span>
				</div>

				<div>
					<label htmlFor="email" className="block text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						placeholder="tu@email.com"
						className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-text text-base focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400"
					/>
					<span className="error-message hidden text-xs text-red-500 mt-1"></span>
				</div>

				<div>
					<label htmlFor="telefono" className="block text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-2">
						Número de contacto
					</label>
					<input
						type="tel"
						id="telefono"
						name="telefono"
						required
						placeholder="Tu número de contacto"
						className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-text text-base focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400"
					/>
					<span className="error-message hidden text-xs text-red-500 mt-1"></span>
				</div>

				<div>
					<label htmlFor="mensaje" className="block text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-2">
						Mensaje
					</label>
					<textarea
						id="mensaje"
						name="mensaje"
						rows={4}
						maxLength={400}
						placeholder="¿Cómo podemos ayudarte?"
						className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-text text-base focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-gray-400"
					></textarea>
					<div className="flex justify-end text-xs text-muted mt-1">
						<span id="charCount">0</span>/400
					</div>
					<span className="error-message hidden text-xs text-red-500 mt-1"></span>
				</div>

				<button
					type="submit"
					id="submitBtn"
					className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[4px] border border-transparent font-bold text-[15px] transition-all duration-[0.18s] bg-text text-white opacity-50 cursor-not-allowed"
				>
					<span id="btnText">Enviar mensaje</span>
					<span id="btnLoader" className="hidden">
						<svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					</span>
				</button>
			</form>
		</div>
	);
}
