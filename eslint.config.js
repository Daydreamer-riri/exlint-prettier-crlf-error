import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    prettierOptions: {
      endOfLine: 'auto',
    },
    html: true,
  },
})
