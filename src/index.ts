/* eslint-disable no-console */
import { createUnplugin } from 'unplugin'
import mammoth from 'mammoth'
import type { Options } from './types'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-docx',
  enforce: 'pre',
  async load(id) {
    if (id.endsWith('.docx')) {
      const { value, messages } = await mammoth.convertToHtml({
        path: id,
      }, options)
      console.log('[unplugin-docx]', `converted ${id}`)
      messages.forEach((message) => {
        console.log('[unplugin-docx]', message)
      })
      return `export default ${JSON.stringify(value)}`
    }
    return null
  },
}))
