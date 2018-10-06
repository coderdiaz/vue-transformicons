import { BaseButton, IconMixin } from './BaseButton';

export default {
  mixins: [IconMixin],
  data() {
    return {
      defaultAnimation: 'mail',
      animations: {
        mail: ['tcon-mail--envelope'],
      },
    };
  },
  mounted() {
    this.defaultAnimation = (this.animation) ? this.animation : this.defaultAnimation;
  },
  render() {
    return <BaseButton
      ariaLabel="open mailbox"
      animation={this.defaultAnimation}
      animations={this.animations}
      active={this.active}>
      <span aria-hidden="true" class="tcon-mail--envelope__flap" />
      <span class="tcon-visuallyhidden">open mailbox</span>
    </BaseButton>;
  },
  components: {
    BaseButton,
  },
};
