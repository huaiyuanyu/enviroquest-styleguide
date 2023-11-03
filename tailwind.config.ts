import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    fontFamily: {
      'header': ['"Abril Fatface"', '"Times New Roman"', 'serif'],
      'body': ['"Open Sans"', 'Inter', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
}
export default config
