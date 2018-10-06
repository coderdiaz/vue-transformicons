import { BaseButton, IconMixin } from './BaseButton';

export default {
  mixins: [IconMixin],
  data() {
    return {
      defaultAnimation: 'check',
      animations: {
        check: ['tcon-remove', 'tcon-remove--check'],
        'chevron-left': ['tcon-remove', 'tcon-remove--chevron-left'],
        'chevron-right': ['tcon-remove', 'tcon-remove--chevron-right'],
        'chevron-down': ['tcon-remove', 'tcon-remove--chevron-down'],
        'chevron-up': ['tcon-remove', 'tcon-remove--chevron-up'],
      },
    };
  },
  mounted() {
    this.defaultAnimation = (this.animation) ? this.animation : this.defaultAnimation;
  },
  render() {
    return <BaseButton
      ariaLabel="remove item"
      animation={this.defaultAnimation}
      animations={this.animations}
      active={this.active}>
      <span class="tcon-visuallyhidden">remove item</span>
    </BaseButton>;
  },
  components: {
    BaseButton,
  },
};
