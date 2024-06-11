import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

/* Teal */
--color-teal-50: #E6FFFA;
--color-teal-100: #B2F5EA;
--color-teal-200: #81E6D9;
--color-teal-300: #4FD8C6; 
--color-teal-400: #38C2B0; 
--color-teal-500: #38B2AC;
--color-teal-600: #319795;
--color-teal-700: #2C7A7B;
--color-teal-800: #285E61;
--color-teal-900: #234E52;

/* Coral */
--color-coral-50: #FFF5F0;
--color-coral-100: #FFE5D5;
--color-coral-200: #FFD1B8;
--color-coral-300: #FFA48C;
--color-coral-500: #FFA17C;
--color-coral-600: #FF8250;
--color-coral-700: #F66A35;
--color-coral-800: #DD4E1F;
--color-coral-900: #C43D15;

/* Beige */
--color-beige-50: #FAF9F6;
--color-beige-100: #F1EDE8;
--color-beige-200: #E8E1D9;
--color-beige-300: #D9D0C2;
--color-beige-400: #D3CABE;
--color-beige-500: #C1B7A7;
--color-beige-600: #B8ADA5;
--color-beige-700: #9E938A;
--color-beige-800: #857A72;
--color-beige-900: #716258;

--color-slate-50: #F8FAFC;
--color-slate-100: #E2E8F0;
--color-slate-200: #CBD5E1;
--color-slate-300: #A0AEC0;
--color-slate-500: #718096;
--color-slate-600: #4A5568;
--color-slate-700: #2D3748;
--color-slate-800: #1A202C;
--color-slate-900: #171923;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-400: #f87171;
  --color-red-500: #ef4444;
  --color-red-600: #dc2626;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;

  --gradient-teal-slate-1: linear-gradient(to right, var(--color-teal-300), var(--color-slate-300));
  --gradient-teal-slate-2: linear-gradient(to bottom, var(--color-teal-500), var(--color-slate-500));
  --gradient-teal-slate-3: linear-gradient(to right, var(--color-teal-200), var(--color-slate-200));
  --gradient-teal-slate-4: linear-gradient(to bottom, var(--color-teal-700), var(--color-slate-700));
  --gradient-teal-slate-5: linear-gradient(to right, var(--color-teal-400), var(--color-slate-400));
  --gradient-teal-slate-6: linear-gradient(to bottom, var(--color-teal-600), var(--color-slate-600));
  --gradient-teal-slate-7: linear-gradient(to right, var(--color-teal-900), var(--color-slate-900));
  --gradient-teal-slate-8: linear-gradient(to bottom, var(--color-teal-100), var(--color-slate-100));

  --gradient-slate-teal-1: linear-gradient(to right, var(--color-slate-300), var(--color-teal-300));
  --gradient-slate-teal-2: linear-gradient(to bottom, var(--color-slate-500), var(--color-teal-500));
  --gradient-slate-teal-3: linear-gradient(to right, var(--color-slate-200), var(--color-teal-200));
  --gradient-slate-teal-4: linear-gradient(to bottom, var(--color-slate-700), var(--color-teal-700));
  --gradient-slate-teal-5: linear-gradient(to right, var(--color-slate-400), var(--color-teal-400));
  --gradient-slate-teal-6: linear-gradient(to bottom, var(--color-slate-600), var(--color-teal-600));
  --gradient-slate-teal-7: linear-gradient(to right, var(--color-slate-900), var(--color-teal-900));
  --gradient-slate-teal-8: linear-gradient(to bottom, var(--color-slate-100), var(--color-teal-100));

  --gradient-slate-beige-1: linear-gradient(to right, var(--color-slate-300), var(--color-beige-300));
  --gradient-slate-beige-2: linear-gradient(to bottom, var(--color-slate-500), var(--color-beige-500));
  --gradient-slate-beige-3: linear-gradient(to right, var(--color-slate-200), var(--color-beige-200));
  --gradient-slate-beige-4: linear-gradient(to bottom, var(--color-slate-700), var(--color-beige-700));
  --gradient-slate-beige-5: linear-gradient(to right, var(--color-slate-400), var(--color-beige-400));
  --gradient-slate-beige-6: linear-gradient(to bottom, var(--color-slate-600), var(--color-beige-600));
  --gradient-slate-beige-7: linear-gradient(to right, var(--color-slate-900), var(--color-beige-900));
  --gradient-slate-beige-8: linear-gradient(to bottom, var(--color-slate-100), var(--color-beige-100));

  --gradient-beige-slate-1: linear-gradient(to right, var(--color-beige-300), var(--color-slate-300));
  --gradient-beige-slate-2: linear-gradient(to bottom, var(--color-beige-500), var(--color-slate-500));
  --gradient-beige-slate-3: linear-gradient(to right, var(--color-beige-200), var(--color-slate-200));
  --gradient-beige-slate-4: linear-gradient(to bottom, var(--color-beige-700), var(--color-slate-700));
  --gradient-beige-slate-5: linear-gradient(to right, var(--color-beige-400), var(--color-slate-400));
  --gradient-beige-slate-6: linear-gradient(to bottom, var(--color-beige-600), var(--color-slate-600));
  --gradient-beige-slate-7: linear-gradient(to right, var(--color-beige-900), var(--color-slate-900));
  --gradient-beige-slate-8: linear-gradient(to bottom, var(--color-beige-100), var(--color-slate-100));

  --gradient-teal-beige-1: linear-gradient(to right, var(--color-teal-300), var(--color-beige-300));
  --gradient-teal-beige-2: linear-gradient(to bottom, var(--color-teal-500), var(--color-beige-500));
  --gradient-teal-beige-3: linear-gradient(to right, var(--color-teal-200), var(--color-beige-200));
  --gradient-teal-beige-4: linear-gradient(to bottom, var(--color-teal-700), var(--color-beige-700));
  --gradient-teal-beige-5: linear-gradient(to right, var(--color-teal-400), var(--color-beige-400));
  --gradient-teal-beige-6: linear-gradient(to bottom, var(--color-teal-600), var(--color-beige-600));
  --gradient-teal-beige-7: linear-gradient(to right, var(--color-teal-900), var(--color-beige-900));
  --gradient-teal-beige-8: linear-gradient(to bottom, var(--color-teal-100), var(--color-beige-100));

  --gradient-beige-teal-1: linear-gradient(to right, var(--color-beige-300), var(--color-teal-300));
  --gradient-beige-teal-2: linear-gradient(to bottom, var(--color-beige-500), var(--color-teal-500));
  --gradient-beige-teal-3: linear-gradient(to right, var(--color-beige-200), var(--color-teal-200));
  --gradient-beige-teal-4: linear-gradient(to bottom, var(--color-beige-700), var(--color-teal-700));
  --gradient-beige-teal-5: linear-gradient(to right, var(--color-beige-400), var(--color-teal-400));
  --gradient-beige-teal-6: linear-gradient(to bottom, var(--color-beige-600), var(--color-teal-600));
  --gradient-beige-teal-7: linear-gradient(to right, var(--color-beige-900), var(--color-teal-900));
  --gradient-beige-teal-8: linear-gradient(to bottom, var(--color-beige-100), var(--color-teal-100));
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

/* input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-teal-600);
  outline-offset: -1px;
} */

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

    `;

export default GlobalStyles;
