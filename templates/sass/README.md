# Vue / SASS

This project uses the **SASS** Froggo template.

## Scripts

+ `dev`: Starts the development server on `localhost:8888`.
+ `build`: Builds the website for production.

## Project Structure

### Tree Diagram

```
project/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ composables/
│  ├─ public/
│  ├─ scss/
│  ├─ App.vue
│  ├─ env.d.ts
│  ├─ index.html
│  └─ main.ts
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ postcss.config.cjs
├─ README.md
├─ tsconfig.json
└─ vite.config.ts
```

### Key item(s)

+ `src/components/`: Vue components placed in here will be automatically globally imported. **Creating new files may require a dev server restart.**
+ `src/composables/`: Contains reusable Vue functionality ([read more](https://vuejs.org/guide/extras/composition-api-faq.html)).
+ `src/public/`: Files placed in here will be served at `website.com/file` and will skip hashing ([read more](https://vitejs.dev/guide/assets.html#the-public-directory)).
+ `src/App.vue`: Vue application entry point.
+ `src/env.d.ts`: Typings for Vue/Vite.
+ `tsconfig.json`: Used for configuring TypeScript.
+ `vite.config.ts`: Used for tweaking all othewr project functionality, such as minification, file hashing and the dev server.
