# Configuración de Formspree

El formulario de contacto está configurado para usar Formspree, un servicio gratuito que permite enviar formularios sin necesidad de backend.

## Pasos para configurar:

1. **Crear una cuenta en Formspree:**
   - Ve a https://formspree.io/
   - Crea una cuenta gratuita (o inicia sesión)

2. **Crear un nuevo formulario:**
   - Una vez dentro de tu cuenta, haz clic en "New Form"
   - Asigna un nombre al formulario (ej: "Contacto Provia")
   - Formspree te dará un Form ID único

3. **Configurar el endpoint en el código:**
   - Abre el archivo: `src/components/contactanos.astro`
   - Busca la línea que dice:
     ```javascript
     const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
     ```
   - Reemplaza `YOUR_FORM_ID` con tu Form ID real de Formspree
   - Ejemplo: `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpzgkqyz';`

4. **Configurar el email de destino (opcional):**
   - En el panel de Formspree, puedes configurar a qué email quieres recibir los mensajes
   - También puedes configurar notificaciones, auto-respuestas, etc.

## Límites del plan gratuito:

- 50 envíos por mes
- Sin spam filtering avanzado
- Sin webhooks

Si necesitas más, puedes actualizar a un plan de pago.

## Campos del formulario:

El formulario envía los siguientes campos a Formspree:
- `nombre`: Nombre completo del usuario
- `email`: Email de contacto
- `telefono`: Número de contacto
- `mensaje`: Mensaje del usuario (opcional)

## Prueba el formulario:

Una vez configurado, puedes probar enviando un mensaje de prueba desde tu sitio web. Los mensajes aparecerán en tu panel de Formspree y se enviarán al email configurado.
