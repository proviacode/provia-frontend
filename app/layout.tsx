import type { Metadata } from 'next';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';

const siteUrl = 'https://proviaconsulting.com';

const title = 'Provia Consulting | Consultoría Estratégica';
const description =
	'Consultora integral especializada en educación vial, revisión técnica vehicular y desarrollo de estrategias de negocios. Acompañamos a empresas, organismos y municipios en la modernización de procesos, optimizando la operación para ganar eficiencia, fortalecer la transparencia y habilitar un crecimiento sostenible.';
const image = `${siteUrl}/Images/sean-pollock-PhYq704ffdA-unsplash.jpg`;

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	keywords:
		'consultoría estratégica, educación vial, revisión técnica vehicular, consultoría empresarial, modernización de procesos, gestión pública, transformación digital, optimización organizacional, asesoría legal, consultoría contable',
	authors: [{ name: 'Provia Consulting' }],
	generator: 'Next.js',
	robots: {
		index: true,
		follow: true,
		'max-image-preview': 'large',
		'max-snippet': -1,
		'max-video-preview': -1,
	},
	alternates: {
		canonical: '/',
	},
	icons: {
		icon: '/favicon.svg',
		apple: '/favicon.svg',
	},
	openGraph: {
		type: 'website',
		url: siteUrl,
		title,
		description,
		siteName: 'Provia Consulting',
		locale: 'es_CL',
		images: [
			{
				url: image,
				width: 1200,
				height: 630,
				alt: 'Provia Consulting - Consultoría Estratégica',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: [image],
		creator: '@proviaconsulting',
		site: '@proviaconsulting',
	},
	other: {
		language: 'Spanish',
		'revisit-after': '7 days',
		distribution: 'global',
		rating: 'general',
	},
};

const organizationJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Provia Consulting',
	alternateName: 'Provia',
	url: siteUrl,
	logo: `${siteUrl}/Images/provia-logo.svg`,
	description,
	address: {
		'@type': 'PostalAddress',
		addressCountry: 'CL',
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+54-341-596-4249',
		contactType: 'customer service',
		email: 'proviasoporte@gmail.com',
		availableLanguage: ['Spanish'],
	},
	sameAs: ['https://www.checkrto.com'],
	knowsAbout: [
		'Consultoría estratégica',
		'Educación vial',
		'Revisión técnica vehicular',
		'Transformación digital',
		'Gestión pública',
		'Asesoría legal',
		'Consultoría contable',
	],
};

const websiteJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'Provia Consulting',
	url: siteUrl,
	potentialAction: {
		'@type': 'SearchAction',
		target: {
			'@type': 'EntryPoint',
			urlTemplate: `${siteUrl}/?s={search_term_string}`,
		},
		'query-input': 'required name=search_term_string',
	},
};

const serviceJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: 'Consultoría Estratégica',
	provider: {
		'@type': 'Organization',
		name: 'Provia Consulting',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Consultoría',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Capacitaciones',
					description:
						'Programas formativos para fortalecer habilidades, profesionalizar equipos y mejorar la eficiencia operativa',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Implementación de talleres',
					description: 'Talleres prácticos enfocados en resolver desafíos específicos de tu organización',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Estrategias empresariales',
					description: 'Planes estratégicos alineados con la visión de tu organización',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Asistencia Legal y Contable',
					description: 'Soporte normativo, jurídico y financiero para asegurar proyectos sólidos',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Sistema Integral de Revisión Técnica Vehicular',
					description: 'Plataforma para talleres RTV que centraliza la operación y asegura trazabilidad',
				},
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className="scroll-smooth">
			<head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="preconnect" href="https://api.fontshare.com" />
				<link rel="dns-prefetch" href="https://formspree.io" />
				<link
					href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
					rel="stylesheet"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
				/>
			</head>
			<body className="min-h-screen bg-white text-text font-sans antialiased flex justify-center flex-col [overflow-x:clip]">
				<div className="flex-1">{children}</div>
				<CookieConsent />
			</body>
		</html>
	);
}
