import type { Config } from "tailwindcss"
import plugin from "tailwindcss"

const config: Config = {
	content: [
		"./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./@/**/*.{js,ts,jsx,tsx,mdx}",
		"./@/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				slidein: {
					from: {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				slidein: "slidein 1s ease var(--slidein-delay) forwards",
			},
			colors: {
				theme: "#D9B99B",
				theme_light: "#E0944E",
				primary: "#f8f7f3",
				dark: "#242424",
			},
			backgroundColor: {
				primary: "#f8f7f3",
				dark: "#242424",
				theme: "#D9B99B",
				theme_light: "#E0944E",
			},
			fontWeight: {
				bold: "700",
			},
			fontFamily: {
				code: "Space Mono, monospace",
			},
			maxWidth: {
				desktop: "1300px",
			},
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		fontSize: {
			sm: "12px",
			base_mobile: "14px",
			base: "18px",
			md: "20px",
			lg: "22px",
			xl: "24px",
			"2xl": "30px",
			"3xl": "38px",
			tab_hero: "54px",
			tab_sub_hero: "36px",
			hero: "60px",
			sub_hero: "42px",
		},
		maxWidth: {
			large: "1500px",
		},
		// screens: {
		// 	tablet: "640px",
		// 	laptop: "1024px",
		// 	desktop: "1280px",
		// },
	},
	plugins: [require("tailwindcss-animate")],
}
export default config
