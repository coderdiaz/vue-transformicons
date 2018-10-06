import { BaseButton, IconMixin } from './BaseButton';

export default {
  name: 'FormIcon',
  mixins: [IconMixin],
  data() {
    return {
      defaultAnimation: 'search',
      animations: {
        search: ['tcon-search--xcross'],
      },
    };
  },
  mounted() {
    this.defaultAnimation = (this.animation) ? this.animation : this.defaultAnimation;
  },
  render() {
    return <BaseButton
      ariaLabel="toggle search"
      animation={this.defaultAnimation}
      animations={this.animations}
      active={this.active}>
      <span aria-hidden="true" class="tcon-search__item" />
      <span class="tcon-visuallyhidden">toggle search</span>
    </BaseButton>;
  },
  components: {
    BaseButton,
  },
};
