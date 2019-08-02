import { shallowMount } from '@vue/test-utils';
import GridIcon from '../../packages/src/GridIcon';

const vm = shallowMount(GridIcon);

// Helper function to create a component
const createComponent = propsData => shallowMount(GridIcon, { propsData });

describe('GridIcon', () => {
  let cmp;
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  it('has a mounted hook', () => {
    expect(typeof GridIcon.mounted).toBe('function');
  });

  describe('Properties', () => {
    it('should set the defaultAnimation if the prop animation isn\'t set', () => {
      cmp = createComponent();
      expect(cmp.vm.defaultAnimation).toBe('rearrange');
    });

    it('should set the defaultAnimation with the prop animation value', () => {
      cmp = createComponent({ animation: 'collapse' });
      expect(cmp.vm.defaultAnimation).toBe('collapse');
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
