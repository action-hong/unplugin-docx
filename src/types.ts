// https://github.com/mwilliamson/mammoth.js/blob/master/lib/index.d.ts
export interface Options {
  styleMap?: string | Array<string>
  includeEmbeddedStyleMap?: boolean
  includeDefaultStyleMap?: boolean
  convertImage?: ImageConverter
  ignoreEmptyParagraphs?: boolean
  idPrefix?: string
}

interface ImageConverter {
  __mammothBrand: 'ImageConverter'
}
