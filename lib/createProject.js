const { prompt } = require('inquirer')
const { bold, cyan, red } = require('kolorist')
const fs = require('fs-extra')
const path = require('path')
const spawn = require('cross-spawn')
const questions = require('./questions')

async function createProject(dir) {
  const { template, pm } = await prompt(questions)
  const templateDir = `../templates/${template}`

  try {
    console.log(`🐸 Creating project in ${cyan(dir)}...`)
    await fs.copy(path.resolve(__dirname, templateDir), dir)
    await fs.rename(path.join(dir, '/_.gitignore'), path.join(dir, '/.gitignore'))
  } catch (error) {
    console.log(`❌ ${red('There was an error copying the files.')}`)
    process.exit(1)
  }

  installPackages(pm, dir)

  if (template === 'tailwind') {
    generateTailwindConfig(pm, dir)
  }

  console.clear()

  outputCompletionMessage(pm, dir)
}

function installPackages(pm, dir) {
  console.log('⚙️  Installing packages (this may take a while)...')

  spawn.sync(pm, ['install'], { cwd: dir, stdio: 'inherit' })
}

function generateTailwindConfig(pm, dir) {
  console.log('📝 Generating `tailwind.config.cjs`...')

  const pmArgs = pm !== 'yarn' ? ['exec'] : []
  spawn.sync(pm, pmArgs.concat(['tailwind', 'init']), {
    cwd: dir,
    stdio: 'inherit'
  })
}

function outputCompletionMessage(pm, dir) {
  const isNewFolder = dir !== '.'
  const relativeDir = path.relative(process.cwd(), dir)
  const cdMessage = isNewFolder ? `  $ cd ${relativeDir}\n` : ''
  const pmRun = pm !== 'yarn' ? `${pm} run` : pm

  console.log(`🐸🎉 ${bold('Successfully created project!')}\n`)

  console.log(`To get started:`)
  console.log(cyan(`${cdMessage}  $ ${pmRun} dev\n`))

  console.log(`To build the project:`)
  console.log(cyan(`${cdMessage}  $ ${pmRun} build\n`))
}

module.exports = createProject
