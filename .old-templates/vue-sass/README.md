# Vue + SCSS

This project was created using the [Vue + SCSS](https://github.com/froggo-templates/vue-scss) froggo template.

## Scripts

+ `dev`: Starts the development server on `localhost:8888`.
+ `start`: Alias for `dev`.
+ `build`: Builds the website for production.
+ `preview`: Allows you to preview the production-built site.

## Project Structure

### Tree Diagram

```
project/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ hooks/
│  ├─ public/
│  ├─ scss/
│  ├─ App.vue
│  ├─ env.d.ts
│  ├─ index.html
│  └─ main.ts
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ postcss.config.js
├─ README.md
├─ tsconfig.json
└─ vite.config.ts
```

### Key item(s)

+ `src/components/`: Vue components placed in here will be automatically globally imported. **Creating new files may require a dev server restart.**
+ `src/hooks/`: Contains reusable Vue functionality ([read more](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api)).
+ `src/public/`: Files placed in here will be served at `website.com/file` and will skip hashing ([read more](https://vitejs.dev/guide/assets.html#the-public-directory)).
+ `src/App.vue`: Entry point to Vue application.
+ `src/env.d.ts`: Vue/Vite typings.
+ `tsconfig.json`: Used for tweaking TypeScript functionality, such as compilation targets and compilation versions (eg: ES2015).
+ `vite.config.ts`: Used for tweaking all other project functionality, such as minification, file hashing and the dev server.
