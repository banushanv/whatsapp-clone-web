import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import RightChatViewComponent from '@/components/RightChatViewComponent.vue';


describe('RightChatViewComponent', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(RightChatViewComponent, { props: { msg: 'RightChatViewComponent' } });
     expect(wrapper.text()).toContain('');
  });
});
