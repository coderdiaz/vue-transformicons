import { shallowMount } from '@vue/test-utils';
import IconMixin from '../../packages/src/IconMixin.vue';

const mockComponent = {
  template: '<div class="mock-component"></div>',
};

const vm = shallowMount(mockComponent, {
  mixins: [IconMixin],
});

describe('IconMixin', () => {
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  it('should set the mixin in the component', () => {
    const { animation, active } = vm.props();
    expect(animation).toBe('');
    expect(active).toBeFalsy();
  });
});
