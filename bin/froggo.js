#!/usr/bin/env node

const fs = require('fs-extra')
const cli = require('commander')
const { bold, cyan, red } = require('kolorist')
const createProject = require('../lib/createProject')
const { version } = require('../package.json')

cli.version(`v${version}`, '-v --version').usage('<command> [options]')

cli
  .command('new <dir>')
  .alias('create')
  .description('create new froggo project')
  .action(async (dir) => {
    const dirContainsFiles = fs.existsSync(dir)
      ? Boolean(fs.readdirSync(dir).length)
      : false

    console.log(cyan(`\nfroggo v${version}`))

    if (dirContainsFiles) {
      // prettier-ignore
      console.log(red(`Could not create project in ${bold(dir)} because the directory is not empty.`))
      return
    }

    await createProject(dir)
  })

cli.parse(process.argv)

if (!process.argv.slice(2).length) {
  cli.outputHelp()
}
