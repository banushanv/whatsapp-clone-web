import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import LeftContactsViewComponent from '@/components/LeftContactsViewComponent.vue';

describe('LeftContactsViewComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(LeftContactsViewComponent, { props: { msg: 'LeftContactsViewComponent' } });
    expect(wrapper.text()).toContain('LeftContactsViewComponent');
  });
});
