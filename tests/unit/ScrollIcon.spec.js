import { shallowMount } from '@vue/test-utils';
import ScrollIcon from '../../packages/src/ScrollIcon';

const vm = shallowMount(ScrollIcon);

describe('ScrollIcon', () => {
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
