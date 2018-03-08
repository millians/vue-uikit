import Element from './elements/subnav-item'
import mergeData from 'vuikit/src/util/vue-data-merge'
import { assign } from 'vuikit/src/util/lang'

export default {
  name: 'VkSubnavItem',
  functional: true,
  props: assign({}, Element.props, {
    name: {
      type: [Number, String]
    }
  }),
  render (h, { props, data, parent }) {

    if (data.rerendering) {
      delete data.class
    }

    return h(Element, mergeData(data, { props }, {
      rerender: true,
      on: {
        click: e => {
          e.preventDefault()
          parent.triggerUpdate(data.key)
        }
      }
    }))
  }
}