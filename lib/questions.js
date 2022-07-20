const questions = [
  {
    type: 'list',
    name: 'pm',
    message: 'Package manager:',
    choices: [
      { name: 'yarn', value: 'yarn' },
      { name: 'pnpm', value: 'pnpm' },
      { name: 'npm', value: 'npm' }
    ],
    default: 'yarn'
  },
  {
    type: 'list',
    name: 'template',
    message: 'Template:',
    choices: [
      { name: 'Tailwind', value: 'tailwind' },
      { name: 'SASS', value: 'sass' }
    ],
    default: 'tailwind'
  }
]

module.exports = questions
