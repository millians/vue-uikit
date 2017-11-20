import VkIcon from './icon'
import mergeData from '@vuikit/core/helpers/fn-data-merge'

export default {
  functional: true,
  props: mergeData(VkIcon.props, {
    reset: {
      type: Boolean,
      default: false
    }
  }),
  render: (h, { data, props, children }) =>

    h('a', mergeData(data, {
      class: ['uk-icon', {
        'uk-icon-link': props.reset
      }]
    }), [
      props.icon
        ? h(`icon-${props.icon}`, { props })
        : children
    ])

}