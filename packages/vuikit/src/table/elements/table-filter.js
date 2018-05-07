import { mergeData } from '@vuikit/utils/vue'

export default {
  functional: true,
  render (h, { data, children }) {
    return h('div', mergeData(data, {
      class: 'uk-form uk-flex'
    }), [
      h('div', {
        class: 'uk-inline uk-width-expand'
      }, children)
    ])
  }
}
