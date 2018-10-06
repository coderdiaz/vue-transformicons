export const BaseButton = {
  name: 'BaseButton',
  props: {
    animation: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    animations: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      currentActive: false,
    };
  },
  mounted() {
    this.currentActive = this.active;
  },
  computed: {
    currentClasses() {
      const currentAnimation = this.animations[this.animation].join(' ');
      return {
        tcon: true,
        [`${currentAnimation}`]: true,
        'tcon-transform': (this.currentActive),
      };
    },
  },
  render() {
    return <button
      aria-label={this.ariaLabel}
      class={this.currentClasses}
      onclick={this.toggleStatus}>
      {this.$slots.default}
    </button>;
  },
  methods: {
    toggleStatus(e) {
      e.preventDefault();
      this.currentActive = !this.currentActive;
    },
  },
};

export const IconMixin = {
  props: {
    animation: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
