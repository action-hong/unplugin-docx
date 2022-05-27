/* eslint-disable no-console */
import { createUnplugin } from 'unplugin'
import mammoth from 'mammoth'
import type { Options } from './types'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-docx-html',
  enforce: 'pre',
  async load(id) {
    if (id.endsWith('.docx')) {
      const { value, messages } = await mammoth.convertToHtml({
        path: id,
      }, options)
      console.log('[unplugin-docx-html]', `converted ${id}`)
      messages.forEach((message) => {
        console.log('[unplugin-docx-html]', message)
      })
      return value
    }
    return null
  },
  transform(code, id) {
    if (id.endsWith('docx'))
      return `export default ${JSON.stringify(code)}`
  },
}))
