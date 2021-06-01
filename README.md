## SETUP TAILWIND-CSS

Full set up guide here: https://tailwindcss.com/docs/guides/nextjs

Install

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Create cofngir files:
```
npx tailwindcss init -p
```

Set up to remove unused styles in production. In tailwind.config.js. Update "purge" prop to:
```
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

