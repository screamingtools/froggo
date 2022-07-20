const fs = require('fs')
const cheerio = require('cheerio')
const prettier = require('prettier')

const prettierConfig = {
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  printWidth: 80,
  quoteProps: 'as-needed',
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
}

function buildIMT() {
  // strip contents of HTML
  const html = fs.readFileSync('dist/index.html', 'utf8')
  const $ = cheerio.load(html)
  const bodyContent = $('#extract-target')

  // add contents of dist/assets/app.css to style tags at top of bodyContent
  const styles = fs.readFileSync('dist/assets/app.css', 'utf8')
  bodyContent.prepend(`<style>${styles}</style>`)

  // add contents of dist/assets/app.js to script tags at bottom of bodyContent
  const scripts = fs.readFileSync('dist/bundle.js', 'utf8')
  bodyContent.append(`<script>${scripts}</script>`)

  // write bodyContent to inline.html
  fs.writeFileSync('dist/inline.html', bodyContent.html())
}

async function prettify() {
  fs.writeFileSync(
    'dist/inline.html',
    await prettier.format(fs.readFileSync('dist/inline.html').toString(), {
      ...prettierConfig,
      parser: 'html'
    })
  )
}

;(async () => {
  // create initial inline.html
  buildIMT()

  // run prettier on dist/inline.html
  // await prettify()
})()
