import { shallowMount } from '@vue/test-utils';
import FormIcon from '../../packages/src/FormIcon';

const vm = shallowMount(FormIcon);

// Helper function to create a component
const createComponent = propsData => shallowMount(FormIcon, { propsData });

describe('FormIcon', () => {
  let cmp;
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  it('has a mounted hook', () => {
    expect(typeof FormIcon.mounted).toBe('function');
  });

  describe('Properties', () => {
    it('should set the defaultAnimation if the prop animation isn\'t set', () => {
      cmp = createComponent();
      expect(cmp.vm.defaultAnimation).toBe('search');
    });

    it('should set the default active value', () => {
      cmp = createComponent();
      expect(cmp.vm.active).toBeFalsy();
    });

    it('should set the prop active value', () => {
      cmp = createComponent();
      expect(cmp.vm.active).toBeFalsy();
      cmp.setProps({ active: true });
      expect(cmp.vm.active).toBeTruthy();
    });
  });
});
