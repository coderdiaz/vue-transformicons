<script>
export default {
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
      required: true,
      validator(value) {
        return Object.keys(value).length !== 0;
      },
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
      onClick={this.toggleStatus}>
      {this.$slots.default}
    </button>;
  },
  methods: {
    toggleStatus(e) {
      e.preventDefault();
      this.currentActive = !this.currentActive;
    },
  },
  watch: {
    active: {
      handler(val) {
        this.currentActive = val;
      },
    },
  },
};
</script>
<style src="../transformicons.css">
