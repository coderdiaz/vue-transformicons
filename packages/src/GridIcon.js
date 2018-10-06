import { BaseButton, IconMixin } from './BaseButton';

export default {
  name: 'GridIcon',
  mixins: [IconMixin],
  data() {
    return {
      defaultAnimation: 'rearrange',
      animations: {
        rearrange: ['tcon-grid', 'tcon-grid--rearrange'],
        collapse: ['tcon-grid', 'tcon-grid--collapse'],
      },
    };
  },
  mounted() {
    this.defaultAnimation = (this.animation) ? this.animation : this.defaultAnimation;
  },
  render() {
    return <BaseButton
      ariaLabel="toggle grid"
      animation={this.defaultAnimation}
      animations={this.animations}
      active={this.active}>
      <span aria-hidden="true" class="tcon-grid__item" />
      <span class="tcon-visuallyhidden">toggle grid</span>
    </BaseButton>;
  },
  components: {
    BaseButton,
  },
};
