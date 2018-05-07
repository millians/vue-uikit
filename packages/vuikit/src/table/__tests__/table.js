import { mount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import 'vuikit/dev-env'
import Test from '../__dev__/table.vue'

describe('VkTable', () => {

  it('matches snapshot', async () => {
    const renderer = createRenderer()
    const wrapper = mount(Test)

    const str = await renderer.renderToString(wrapper.vm)
    expect(str).toMatchSnapshot()
  })

})
