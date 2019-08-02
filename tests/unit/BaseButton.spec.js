import { shallowMount } from '@vue/test-utils';
import BaseButton from '../../packages/src/BaseButton.vue';

const vm = shallowMount(BaseButton, {
  propsData: {
    animation: 'minus',
    ariaLabel: 'add item',
    animations: {
      minus: ['tcon-plus', 'tcon-plus--minus'],
    },
  },
});

// Helper function to create a component
const createComponent = (propsData, slots) => shallowMount(BaseButton, { propsData, slots });

describe('BaseButton.vue', () => {
  let cmp;

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  it('has a mounted hook', () => {
    expect(typeof BaseButton.mounted).toBe('function');
  });

  describe('Slots', () => {
    it('should insert the fake element in the default slot', () => {
      const component = createComponent({
        animation: 'minus',
        ariaLabel: 'add item',
        animations: {
          minus: ['tcon-plus', 'tcon-plus--minus'],
        },
      }, {
        default: '<div class="fake-element"></div>',
      });
      expect(component.findAll('.fake-element').length).toBe(1);
    });
  });

  describe('Properties', () => {
    it('should set the active prop when the component is mounted', () => {
      const component = createComponent({
        animation: 'minus',
        ariaLabel: 'add item',
        active: true,
        animations: {
          minus: ['tcon-plus', 'tcon-plus--minus'],
        },
      });

      expect(component.vm.currentActive).toBeTruthy();
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      cmp = createComponent({
        animation: 'minus',
        ariaLabel: 'add item',
        active: false,
        animations: {
          minus: ['tcon-plus', 'tcon-plus--minus'],
        },
      });
    });

    it('should change the current active status when toggleStatus method is triggered', () => {
      expect(cmp.vm.currentActive).toBeFalsy();
      cmp.find('button').trigger('click');
      expect(cmp.vm.currentActive).toBeTruthy();
    });
  });

  describe('Watchers', () => {
    beforeEach(() => {
      cmp = createComponent({
        animation: 'minus',
        ariaLabel: 'add item',
        active: false,
        animations: {
          minus: ['tcon-plus', 'tcon-plus--minus'],
        },
      });
    });

    it('should change the current active value when the prop value is updated', () => {
      cmp.setData({ active: false });
      expect(cmp.vm.active).toBeFalsy();
    });
  });
});
