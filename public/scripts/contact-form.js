// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
	const contactForm = document.getElementById('contactForm');
	const submitBtn = document.getElementById('submitBtn');
	const btnText = document.getElementById('btnText');
	const btnLoader = document.getElementById('btnLoader');
	const formMessage = document.getElementById('formMessage');

	function showMessage(message, isError) {
		if (formMessage) {
			formMessage.textContent = message;
			formMessage.className = 'p-4 rounded-[12px] text-sm font-medium ' + (isError ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200');
			formMessage.classList.remove('hidden');
			
			setTimeout(function() {
				formMessage.classList.add('hidden');
			}, 5000);
		}
	}

	function validateEmail(email) {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	}

	function validateField(field) {
		const errorSpan = field.parentElement.querySelector('.error-message');
		let isValid = true;
		let errorMessage = '';

		if (!field.value.trim()) {
			isValid = false;
			errorMessage = 'Este campo es requerido';
		} else if (field.type === 'email' && !validateEmail(field.value)) {
			isValid = false;
			errorMessage = 'Ingresa un correo electrónico válido';
		} else if (field.id === 'mensaje' && field.value.trim().length < 10) {
			isValid = false;
			errorMessage = 'El mensaje debe tener al menos 10 caracteres';
		}

		if (errorSpan) {
			if (!isValid) {
				errorSpan.textContent = errorMessage;
				errorSpan.classList.remove('hidden');
				field.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20');
				field.classList.remove('border-gray-200', 'focus:border-primary', 'focus:ring-primary/20');
			} else {
				errorSpan.classList.add('hidden');
				field.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20');
				field.classList.add('border-gray-200', 'focus:border-primary', 'focus:ring-primary/20');
			}
		}

		return isValid;
	}

	if (!contactForm) return;

	const formFields = contactForm.querySelectorAll('input, textarea');
	formFields.forEach(function(field) {
		field.addEventListener('blur', function() {
			validateField(field);
		});

		field.addEventListener('input', function() {
			const errorSpan = field.parentElement.querySelector('.error-message');
			if (errorSpan && !errorSpan.classList.contains('hidden')) {
				validateField(field);
			}
		});
	});

	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();

		let isFormValid = true;
		formFields.forEach(function(field) {
			if (!validateField(field)) {
				isFormValid = false;
			}
		});

		if (!isFormValid) {
			showMessage('Por favor, corrige los errores en el formulario', true);
			return;
		}

		const formData = new FormData(contactForm);
		const data = {
			nombre: formData.get('nombre'),
			email: formData.get('email'),
			asunto: formData.get('asunto'),
			mensaje: formData.get('mensaje')
		};

		if (submitBtn && btnText && btnLoader) {
			submitBtn.disabled = true;
			btnText.classList.add('hidden');
			btnLoader.classList.remove('hidden');
		}

		setTimeout(function() {
			console.log('Datos del formulario:', data);
			showMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', false);
			contactForm.reset();

			if (submitBtn && btnText && btnLoader) {
				submitBtn.disabled = false;
				btnText.classList.remove('hidden');
				btnLoader.classList.add('hidden');
			}
		}, 1500);
	});
});

