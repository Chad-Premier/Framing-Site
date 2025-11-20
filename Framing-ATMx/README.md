```bash
# https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Restart Ubuntu 24.04 to enable NVM.

```bash
wsl.exe -t Ubuntu-24.04
````

```bash
wsl.exe -d Ubuntu-24.04
````

```bash
nvm ls-remote
```

```
nvm install 20.13.1
```



Astro

npm create astro@latest

Need to install the following packages:
create-astro@4.8.0
Ok to proceed? (y)

   dir   Where should we create your new project?
         ./astro-tailwind-mdx

  tmpl   How would you like to start your new project?
         ○ Include sample files (recommended)
         ○ Use blog template
         ● Empty

   ts   Do you plan to write TypeScript?
         ● Yes  ○ No

  use   How strict should TypeScript be?
         ● Strict (recommended)
         ○ Strictest
         ○ Relaxed

  deps   Install dependencies? (recommended)
         ● Yes  ○ No

 git   Initialize a new git repository? (optional)
         ● Yes  ○ No

# Install Astro Globally
npm install -g astro

### Tailwind

#### Add Tailwind

```bash
# install TailwindCSS
npm install -d tailwindcss
```

```bash
# Add Tailwind to Astro
npx astro add tailwind
```

```bash
  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭──────────────────────────────────────────────────────────╮
 │ npm install @astrojs/tailwind@^5.1.0 tailwindcss@^3.4.3  │
 ╰──────────────────────────────────────────────────────────╯

? Continue? › (Y/n)
```

```bash
  Astro will generate a minimal ./tailwind.config.mjs file.

? Continue? › (Y/n)
```

```bash
Astro will make the following changes to your config file:

 ╭ astro.config.mjs ─────────────────────────────╮
 │ import { defineConfig } from 'astro/config';  │
 │                                               │
 │ import tailwind from "@astrojs/tailwind";     │
 │                                               │
 │ // https://astro.build/config                 │
 │ export default defineConfig({                 │
 │   integrations: [tailwind()]                  │
 │ });                                           │
 ╰───────────────────────────────────────────────╯

? Continue? › (Y/n)
```

#### Custom Styles

To use custom styles amend the Astro Config file to exclude the default styles.

```mjs
// astro.config.mjs

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    //...
  ]
  //...
})
```

Import the custom styles into Astro documents as below, ideally into the Layout files.

```astro
---
  import '@styles/base.css';
---
```

Include the default tailwind styles first, custom declerations can be added to the bottom of the file.

```base.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

To ensure VSCode doesn't report errors [Unknown at rule @apply css(unknownAtRules)](https://github.com/tailwindlabs/tailwindcss/discussions/5258), create two files, after a restart these will create the necessary rules.

```json
// .vscode/settings.json

{
  "css.customData": [".vscode/tailwind.json"]
}
```

```json
// .vscode/tailwind.json

{
  "version": 1.1,
  "atDirectives": [
    {
      "name": "@tailwind",
      "description": "Use the `@tailwind` directive to insert Tailwind's `base`, `components`, `utilities` and `screens` styles into your CSS.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#tailwind"
        }
      ]
    },
    {
      "name": "@apply",
      "description": "Use the `@apply` directive to inline any existing utility classes into your own custom CSS. This is useful when you find a common utility pattern in your HTML that you’d like to extract to a new component.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#apply"
        }
      ]
    },
    {
      "name": "@responsive",
      "description": "You can generate responsive variants of your own classes by wrapping their definitions in the `@responsive` directive:\n```css\n@responsive {\n  .alert {\n    background-color: #E53E3E;\n  }\n}\n```\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#responsive"
        }
      ]
    },
    {
      "name": "@screen",
      "description": "The `@screen` directive allows you to create media queries that reference your breakpoints by **name** instead of duplicating their values in your own CSS:\n```css\n@screen sm {\n  /* ... */\n}\n```\n…gets transformed into this:\n```css\n@media (min-width: 640px) {\n  /* ... */\n}\n```\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#screen"
        }
      ]
    },
    {
      "name": "@variants",
      "description": "Generate `hover`, `focus`, `active` and other **variants** of your own utilities by wrapping their definitions in the `@variants` directive:\n```css\n@variants hover, focus {\n   .btn-brand {\n    background-color: #3182CE;\n  }\n}\n```\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#variants"
        }
      ]
    }
  ]
}
```

### Sitemap

```bash
npx astro add sitemap
```

```bash
  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭──────────────────────────────────────╮
 │ npm install @astrojs/sitemap@^3.1.4  │
 ╰──────────────────────────────────────╯

? Continue? › (Y/n)
```

```bash
  Astro will make the following changes to your config file:

 ╭ astro.config.mjs ─────────────────────────────╮
 │ import { defineConfig } from 'astro/config';  │
 │ import tailwind from "@astrojs/tailwind";     │
 │                                               │
 │ import sitemap from "@astrojs/sitemap";       │
 │                                               │
 │ // https://astro.build/config                 │
 │ export default defineConfig({                 │
 │   integrations: [tailwind({                   │
 │     applyBaseStyles: false                    │
 │   }), sitemap()]                              │
 │ });                                           │
 ╰───────────────────────────────────────────────╯

? Continue? › (Y/n) 
```

```bash
  success  Added the following integration to your project:
  - @astrojs/sitemap
```

Edit the astro.config.mjs
```mjs
export default defineConfig({
  site: 'https://premierimage.co.uk',
  //...
});
```

```html
<head>
  <link rel="sitemap" href="/sitemap-index.xml" />
  <!-- -->
</head>  
```

Add the following file to generate the robot.txt files as necessary.

```ts
// pages/robots.txt.ts

import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
```

### MDX
```bash
npx astro add mdx
```

```bash
✔ Resolving packages...

  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭──────────────────────────────────╮
 │ npm install @astrojs/mdx@^3.0.0  │
 ╰──────────────────────────────────╯

? Continue? › (Y/n)
```

```bash
✔ Installing dependencies...

  Astro will make the following changes to your config file:

 ╭ astro.config.mjs ─────────────────────────────╮
 │ import { defineConfig } from 'astro/config';  │
 │ import sitemap from "@astrojs/sitemap";       │
 │ import tailwind from "@astrojs/tailwind";     │
 │ import mdx from "@astrojs/mdx";               │
 │                                               │
 │ // https://astro.build/config                 │
 │ export default defineConfig({                 │
 │   site: 'https://premierimage.co.uk',         │
 │   i18n: {                                     │
 │     defaultLocale: "en",                      │
 │     locales: ["en", "es", "fr"],              │
 │     routing: {                                │
 │       prefixDefaultLocale: true               │
 │     }                                         │
 │   },                                          │
 │   integrations: [tailwind({                   │
 │     applyBaseStyles: false                    │
 │   }), sitemap({                               │
 │     i18n: {                                   │
 │       defaultLocale: 'en',                    │
 │       locales: {                              │
 │         en: 'en-US',                          │
 │         es: 'es-ES',                          │
 │         fr: 'fr-CA'                           │
 │       }                                       │
 │     }                                         │
 │   }), mdx()]                                  │
 │ });                                           │
 ╰───────────────────────────────────────────────╯

? Continue? › (Y/n)
```

```bash
 success  Added the following integration to your project:
  - @astrojs/mdx
```

Create a file <i>pages/[lang]/blog/[...slug].astro</i> to render MDX to pages.

Components are used to assign styling to avoid applying styles globally to non-MDX rendered pages and causing conflicts. This means that Astro doesn't gerenate header id's and ToC automatically.

```astro
---
import { getCollection } from 'astro:content';
import DefaultTemplate from '@layouts/default.astro';
import Heading1 from '@components/mdx/h1.astro';
import Heading2 from '@components/mdx/h2.astro';
import Para from '@components/mdx/p.astro';

export async function getStaticPaths() {
  const pages = await getCollection('blog');

  const paths = pages.map(page => {
    const [lang, ...slug] = page.slug.split('/');
    return { params: { lang, slug: slug.join('/') || undefined }, props: page };
  });

  return paths;
}

//const { lang, slug } = Astro.params;
const page = Astro.props;
//const formattedDate = page.data.date.toLocaleString(lang);

const SEO = {
  title: page.data.title,
  description: page.data.description,
  robots: page.data.robots,
}

//Parse headings from body
//console.log(page.body);
/*
# Primary header
## Secondary header
Write regular MDX here.
*/

const { Content } = await page.render();
---

<DefaultTemplate SEO={SEO}>
  <section class="atm-container">
    <Content components={{
      h1: Heading1,
      h2: Heading2,
      p: Para
    }}/>
  </section>
</DefaultTemplate>
```

Create a sample MDX file <i>src/content/blog/en/2025/05</i>.

'''mdx
---
title: 'The full title of your site'
author: 'Dude'
date: 2024-10-01
description: 'Landing Page Test'
robots: 'index,follow'
---

# Primary header
## Secondary header
Write regular MDX here.
'''

### Preline

```bash
npm install preline
```

Amend the Tailwind Config file to use Class for Dark Mode, and include the Preline javascript file.

```mjs
// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/preline/preline.js',
  ],
	theme: {
		extend: {
      colors: {
        'mauve': {
          950: '#252248',
          900: '#2c2956',
          800: '#333065',
          700: '#3a3673',
          600: '#423d82',
          500: '#494490',
          400: '#6d69a6',
          300: '#928fbc',
          200: '#b6b4d3',
          100: '#dbdae9',
          50: '#edecf4',
        },
      },
    },
	},
	plugins: [
    require('preline/plugin'),
  ],
}
```

Include  an import for the Preline javscript file to all required documents, ideally via a Layout file.

```astro
<script>import 'preline/preline.js';</script>
```

### CookieConsent & iFrameManger

[CookieConsent](https://cookieconsent.orestbida.com/)

An example of CookieConsent installed is available [here](https://stackblitz.com/edit/withastro-astro-mvdsyj?file=README.md).

```bash
npm install vanilla-cookieconsent
```

```bash
npm install @orestbida/iframemanager
```

Modify the Cookie Consent Astro file to run the following script to implement YouTube.

## Config
/src/components/*
astro.config.mjs
.env


rsync -avz -e 'ssh' ~/astro-tailwind-mdx/dist/ podman@192.168.0.13:~/pods/nginx/premier