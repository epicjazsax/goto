import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TitleCard from '../TitleCard.vue'

describe('MainPage', () => {
  it('renders properly', () => {
    const wrapper = mount(TitleCard, { props: { msg: 'GO-TO' } })
    expect(wrapper.text()).toContain('GO-TO')
  })
})
