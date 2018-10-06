import { BaseButton, IconMixin } from './BaseButton';

export default {
  name: 'MenuIcon',
  mixins: [IconMixin],
  data() {
    return {
      defaultAnimation: 'butterfly',
      animations: {
        butterfly: ['tcon-menu--xbutterfly'],
        minus: ['tcon-menu--minus'],
        'x-cross': ['tcon-menu--xcross'],
        'arrow-up': ['tcon-menu--arrow', 'tcon-menu--arrowup'],
        'arrow-360-left': ['tcon-menu--arrow', 'tcon-menu--arrow360left'],
        'arrow-left': ['tcon-menu--arrow', 'tcon-menu--arrowleft'],
      },
    };
  },
  mounted() {
    this.defaultAnimation = (this.animation) ? this.animation : this.defaultAnimation;
  },
  render() {
    return <BaseButton
      ariaLabel="toggle menu"
      animation={this.defaultAnimation}
      animations={this.animations}
      active={this.active}>
      <span aria-hidden="true" class="tcon-menu__lines" />
      <span class="tcon-visuallyhidden">toggle menu</span>
    </BaseButton>;
  },
  components: {
    BaseButton,
  },
};
