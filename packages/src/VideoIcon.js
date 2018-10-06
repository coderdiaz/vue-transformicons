import { BaseButton, IconMixin } from './BaseButton';

export default {
  mixins: [IconMixin],
  data() {
    return {
      defaultAnimation: 'play',
      animations: {
        play: ['tcon-vid--play'],
      },
    };
  },
  mounted() {
    this.defaultAnimation = (this.animation) ? this.animation : this.defaultAnimation;
  },
  render() {
    return <BaseButton
      ariaLabel="play video"
      animation={this.defaultAnimation}
      animations={this.animations}
      active={this.active}>
      <span class="tcon-visuallyhidden">play video</span>
    </BaseButton>;
  },
  components: {
    BaseButton,
  },
};
