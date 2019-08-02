import { shallowMount } from '@vue/test-utils';
import AddIcon from '../../packages/src/AddIcon';

const vm = shallowMount(AddIcon);

// Helper function to create a component
const createComponent = propsData => shallowMount(AddIcon, { propsData });

describe('AddIcon', () => {
  let cmp;
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  it('has a mounted hook', () => {
    expect(typeof AddIcon.mounted).toBe('function');
  });

  describe('Properties', () => {
    it('should set the defaultAnimation if the prop animation isn\'t set', () => {
      cmp = createComponent();
      expect(cmp.vm.defaultAnimation).toBe('minus');
    });

    it('should set the defaultAnimation with the prop animation value', () => {
      cmp = createComponent({ animation: 'check' });
      expect(cmp.vm.defaultAnimation).toBe('check');
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
