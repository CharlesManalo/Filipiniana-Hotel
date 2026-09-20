import type {Config} from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{background:'#faf7f0',foreground:'#263238','muted-foreground':'#64716a',brand:'#8E2433',forest:'#1F4A3D',gold:'#D7A84A'},fontFamily:{serif:['Cormorant Garamond','Georgia','serif'],sans:['Manrope','Arial','sans-serif']}}},plugins:[]} satisfies Config;
