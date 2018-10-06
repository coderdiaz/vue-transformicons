import { BaseButton, IconMixin } from './BaseButton';

export default {
  mixins: [IconMixin],
  data() {
    return {
      defaultAnimation: 'minus',
      animations: {
        minus: ['tcon-plus', 'tcon-plus--minus'],
        check: ['tcon-plus', 'tcon-plus--check'],
      },
    };
  },
  mounted() {
    this.defaultAnimation = (this.animation) ? this.animation : this.defaultAnimation;
  },
  render() {
    return <BaseButton
      ariaLabel="add item"
      animation={this.defaultAnimation}
      animations={this.animations}
      active={this.active}>
      <span class="tcon-visuallyhidden">add item</span>
    </BaseButton>;
  },
  components: {
    BaseButton,
  },
};
