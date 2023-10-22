// RightMessageTopViewComponent.spec.ts
import { mount } from '@vue/test-utils';
import { expect, describe, test, vi, beforeEach } from 'vitest';
import RightMessageTopViewComponent from '@/components/layouts/RightMessageTopViewComponent.vue';

describe('RightMessageTopViewComponent', () => {
  // mount the component before each test case
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(RightMessageTopViewComponent);
  });

  // test that the component renders correctly
  test('renders the component', () => {
    expect(wrapper.html()).toContain('<div class="border-l border-green-500 w-full">');
    expect(wrapper.html()).toContain(
      '<div class="bg-[#f0f2f5] fixed z-10 min-w-[calc(100vw-420px)] sm:pl-[10px] w-full sm:w-auto pl-auto flex justify-between items-center px-1 py-2">'
    );
    expect(wrapper.html()).toContain(
      '<img v-if="userDataForChat[0] && userDataForChat[0].picture" class="rounded-full mx-1 w-10" src="userDataForChat[0].picture">'
    );
    expect(wrapper.html()).toContain(
      '<div v-if="userDataForChat[0] && userDataForChat[0].firstName" class="text-gray-700 ml-1">'
    );
    expect(wrapper.html()).toContain('<IconCamera></IconCamera>');
    expect(wrapper.html()).toContain('<IconSearch></IconSearch>');
    expect(wrapper.html()).toContain('<IconMenu @click="logout"></IconMenu>');
    expect(wrapper.html()).toContain(
      '<ConfirmationDialogComponent v-if="isLogout" headerText="Log out?" content="Are you sure want to log out?" buttonText="Log out" @on-cancel-handler="isLogout = false" @on-confirm-handler="logoutConfirm"></ConfirmationDialogComponent>'
    );
  });

  // test that the component has the correct data
  test('has the correct data', () => {
    expect(wrapper.vm.isLogout).toBe(false);
    expect(wrapper.vm.userStore).toBeDefined();
    expect(wrapper.vm.userDataForChat).toBeDefined();
  });

  // test that the component emits a logout event when the icon menu is clicked
  test('emits a logout event', async () => {
    // create a mock function for the logout method
    const mockLogout = vi.fn();
    wrapper.vm.logout = mockLogout;

    // find the icon menu element and trigger a click event
    const iconMenu = wrapper.find('iconmenu-stub');
    await iconMenu.trigger('click');

    // check that the mock function was called once
    expect(mockLogout).toHaveBeenCalledTimes(1);

    // check that the isLogout data is set to true
    expect(wrapper.vm.isLogout).toBe(true);
  });
});
