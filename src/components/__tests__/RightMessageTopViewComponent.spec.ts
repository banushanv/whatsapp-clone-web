import { describe, test, expect } from 'vitest';
import RightMessageTopViewComponent from '@/components/layouts/RightMessageTopViewComponent.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconCamera from '@/components/icons/IconCamera.vue';
import ConfirmationDialogComponent from '@/components/common/ConfirmationDialogComponent.vue';
import { mount } from '@vue/test-utils';

describe('YourComponent', () => {
  test('renders properly', () => {
    // mount the component and get a wrapper object
    const wrapper = mount(RightMessageTopViewComponent);

    // check if the component has the expected classes
    expect(wrapper.classes()).toContain('border-l');
    expect(wrapper.classes()).toContain('border-green-500');

    // check if the component renders the user picture and name
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/picture.jpg');
    expect(wrapper.text()).toContain('Alice');

    // check if the component renders the icons
    expect(wrapper.findComponent(IconSearch).exists()).toBe(true);
    expect(wrapper.findComponent(IconMenu).exists()).toBe(true);
    expect(wrapper.findComponent(IconCamera).exists()).toBe(true);

    // check if the component does not render the confirmation dialog by default
    expect(wrapper.findComponent(ConfirmationDialogComponent).exists()).toBe(false);
  });

  test('shows confirmation dialog when clicking on menu icon', async () => {
    // mount the component and get a wrapper object
    const wrapper = mount(ConfirmationDialogComponent);

    // find the menu icon and trigger a click event
    const menuIcon = wrapper.findComponent(IconMenu);
    await menuIcon.trigger('click');

    // check if the confirmation dialog is rendered with the expected props
    const dialog = wrapper.findComponent(ConfirmationDialogComponent);
    expect(dialog.exists()).toBe(true);
    expect(dialog.props('headerText')).toBe('Log out?');
    expect(dialog.props('content')).toBe('Are you sure want to log out?');
    expect(dialog.props('buttonText')).toBe('Log out');
  });

  test('calls user store logout and router push when confirming logout', async () => {
    // mount the component and get a wrapper object
    const wrapper = mount(RightMessageTopViewComponent);

    // find the menu icon and trigger a click event
    const menuIcon = wrapper.findComponent(IconMenu);
    await menuIcon.trigger('click');

    // find the confirmation dialog and trigger the confirm handler
    const dialog = wrapper.findComponent(ConfirmationDialogComponent);
    await dialog.vm.$emit('on-confirm-handler');

    // check if the user store logout method is called
    expect(mockUserStore.logout).toHaveBeenCalled();

  });

  test('hides confirmation dialog when canceling logout', async () => {
    // mount the component and get a wrapper object
    const wrapper = mount(RightMessageTopViewComponent);

    // find the menu icon and trigger a click event
    const menuIcon = wrapper.findComponent(IconMenu);
    await menuIcon.trigger('click');

    // find the confirmation dialog and trigger the cancel handler
    const dialog = wrapper.findComponent(ConfirmationDialogComponent);
    await dialog.vm.$emit('on-cancel-handler');

    // check if the confirmation dialog is hidden
    expect(wrapper.findComponent(ConfirmationDialogComponent).exists()).toBe(false);
  });
});
