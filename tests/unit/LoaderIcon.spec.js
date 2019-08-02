import { shallowMount } from '@vue/test-utils';
import LoaderIcon from '../../packages/src/LoaderIcon';

const vm = shallowMount(LoaderIcon);

describe('LoaderIcon', () => {
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
