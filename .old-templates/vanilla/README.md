# Vanilla

This project was created using the [Vanilla](https://github.com/froggo-templates/vanilla) froggo template.

## Scripts

- `dev`: Starts the development server on `localhost:8888`.
- `start`: Alias for `dev`.
- `build`: Builds the website for production.
- `build:imt`: Builds the website for InsureMyTrip.

## Notes

- Any relative URLs in SCSS files must be made with reference to `src/scss/main.scss`.
- During development, CSS will be output in `<style>` tags in the `<head>`. When built, the CSS will be output to `dist/assets/app.css`.
- The `built:imt` command will output the results of a normal build, alongside an additional `inline.html` file.

## Project Structure

### Tree Diagram

```
project/
├─ src/
│  ├─ assets/
│  ├─ js/
│  ├─ public/
│  ├─ scss/
│  ├─ index.html
│  └─ main.js
├─ .babelrc
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ build-imt.js
├─ package.json
├─ postcss.config.js
├─ README.md
└─ webpack.config.js
```

### Key item(s)

- `src/public/`: Files placed in here will be served at `website.com/file`.
- `.babelrc`: Used for configuring Webpack's [babel-loader](https://webpack.js.org/loaders/babel-loader/).
- `postcss.config.js`: Used for configuring [PostCSS](https://postcss.org/).
- `webpack.config.js`: Used for configuring the [Webpack](https://webpack.js.org/) bundler.
