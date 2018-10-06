'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var BaseButton = {
  name: 'BaseButton',
  props: {
    animation: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    animations: {
      type: Object,
      default: {}
    }
  },
  data: function data() {
    return {
      currentActive: false
    };
  },
  mounted: function mounted() {
    this.currentActive = this.active;
  },
  computed: {
    currentClasses: function currentClasses() {
      var _ref;

      var currentAnimation = this.animations[this.animation].join(' ');
      return _ref = {
        tcon: true
      }, _defineProperty(_ref, "".concat(currentAnimation), true), _defineProperty(_ref, 'tcon-transform', this.currentActive), _ref;
    }
  },
  render: function render() {
    return React.createElement("button", {
      "aria-label": this.ariaLabel,
      class: this.currentClasses,
      onclick: this.toggleStatus
    }, this.$slots.default);
  },
  methods: {
    toggleStatus: function toggleStatus(e) {
      e.preventDefault();
      this.currentActive = !this.currentActive;
    }
  }
};
var IconMixin = {
  props: {
    animation: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};

var MenuIcon = {
  mixins: [IconMixin],
  data: function data() {
    return {
      defaultAnimation: 'butterfly',
      animations: {
        butterfly: ['tcon-menu--xbutterfly'],
        minus: ['tcon-menu--minus'],
        'x-cross': ['tcon-menu--xcross'],
        'arrow-up': ['tcon-menu--arrow', 'tcon-menu--arrowup'],
        'arrow-360-left': ['tcon-menu--arrow', 'tcon-menu--arrow360left'],
        'arrow-left': ['tcon-menu--arrow', 'tcon-menu--arrowleft']
      }
    };
  },
  mounted: function mounted() {
    this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
  },
  render: function render() {
    return React.createElement(BaseButton, {
      ariaLabel: "toggle menu",
      animation: this.defaultAnimation,
      animations: this.animations,
      active: this.active
    }, React.createElement("span", {
      "aria-hidden": "true",
      class: "tcon-menu__lines"
    }), React.createElement("span", {
      class: "tcon-visuallyhidden"
    }, "toggle menu"));
  },
  components: {
    BaseButton: BaseButton
  }
};

var GridIcon = {
  mixins: [IconMixin],
  data: function data() {
    return {
      defaultAnimation: 'rearrange',
      animations: {
        rearrange: ['tcon-grid', 'tcon-grid--rearrange'],
        collapse: ['tcon-grid', 'tcon-grid--collapse']
      }
    };
  },
  mounted: function mounted() {
    this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
  },
  render: function render() {
    return React.createElement(BaseButton, {
      ariaLabel: "toggle grid",
      animation: this.defaultAnimation,
      animations: this.animations,
      active: this.active
    }, React.createElement("span", {
      "aria-hidden": "true",
      class: "tcon-grid__item"
    }), React.createElement("span", {
      class: "tcon-visuallyhidden"
    }, "toggle grid"));
  },
  components: {
    BaseButton: BaseButton
  }
};

var AddIcon = {
  mixins: [IconMixin],
  data: function data() {
    return {
      defaultAnimation: 'minus',
      animations: {
        minus: ['tcon-plus', 'tcon-plus--minus'],
        check: ['tcon-plus', 'tcon-plus--check']
      }
    };
  },
  mounted: function mounted() {
    this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
  },
  render: function render() {
    return React.createElement(BaseButton, {
      ariaLabel: "add item",
      animation: this.defaultAnimation,
      animations: this.animations,
      active: this.active
    }, React.createElement("span", {
      class: "tcon-visuallyhidden"
    }, "add item"));
  },
  components: {
    BaseButton: BaseButton
  }
};

var MailIcon = {
  mixins: [IconMixin],
  data: function data() {
    return {
      defaultAnimation: 'mail',
      animations: {
        mail: ['tcon-mail--envelope']
      }
    };
  },
  mounted: function mounted() {
    this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
  },
  render: function render() {
    return React.createElement(BaseButton, {
      ariaLabel: "open mailbox",
      animation: this.defaultAnimation,
      animations: this.animations,
      active: this.active
    }, React.createElement("span", {
      "aria-hidden": "true",
      class: "tcon-mail--envelope__flap"
    }), React.createElement("span", {
      class: "tcon-visuallyhidden"
    }, "open mailbox"));
  },
  components: {
    BaseButton: BaseButton
  }
};

var ScrollIcon = {
  render: function render() {
    return React.createElement("svg", {
      class: "tcon-svgchevron",
      version: "1.1",
      viewBox: "0 0 30 36",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      class: "a3",
      d: "M0,0l15,16L30,0"
    }), React.createElement("path", {
      class: "a2",
      d: "M0,10l15,16l15-16"
    }), React.createElement("path", {
      class: "a1",
      d: "M0,20l15,16l15-16"
    }));
  }
};

var FormIcon = {
  mixins: [IconMixin],
  data: function data() {
    return {
      defaultAnimation: 'search',
      animations: {
        search: ['tcon-search--xcross']
      }
    };
  },
  mounted: function mounted() {
    this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
  },
  render: function render() {
    return React.createElement(BaseButton, {
      ariaLabel: "toggle search",
      animation: this.defaultAnimation,
      animations: this.animations,
      active: this.active
    }, React.createElement("span", {
      "aria-hidden": "true",
      class: "tcon-search__item"
    }), React.createElement("span", {
      class: "tcon-visuallyhidden"
    }, "toggle search"));
  },
  components: {
    BaseButton: BaseButton
  }
};

var VideoIcon = {
  mixins: [IconMixin],
  data: function data() {
    return {
      defaultAnimation: 'play',
      animations: {
        play: ['tcon-vid--play']
      }
    };
  },
  mounted: function mounted() {
    this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
  },
  render: function render() {
    return React.createElement(BaseButton, {
      ariaLabel: "play video",
      animation: this.defaultAnimation,
      animations: this.animations,
      active: this.active
    }, React.createElement("span", {
      class: "tcon-visuallyhidden"
    }, "play video"));
  },
  components: {
    BaseButton: BaseButton
  }
};

var LoaderIcon = {
  render: function render() {
    return React.createElement("span", {
      "aria-label": "loading",
      class: "tcon-loader--spinner360"
    }, React.createElement("span", {
      class: "tcon-visuallyhidden"
    }, "loading"));
  }
};

var RemoveIcon = {
  mixins: [IconMixin],
  data: function data() {
    return {
      defaultAnimation: 'check',
      animations: {
        check: ['tcon-remove', 'tcon-remove--check'],
        'chevron-left': ['tcon-remove', 'tcon-remove--chevron-left'],
        'chevron-right': ['tcon-remove', 'tcon-remove--chevron-right'],
        'chevron-down': ['tcon-remove', 'tcon-remove--chevron-down'],
        'chevron-up': ['tcon-remove', 'tcon-remove--chevron-up']
      }
    };
  },
  mounted: function mounted() {
    this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
  },
  render: function render() {
    return React.createElement(BaseButton, {
      ariaLabel: "remove item",
      animation: this.defaultAnimation,
      animations: this.animations,
      active: this.active
    }, React.createElement("span", {
      class: "tcon-visuallyhidden"
    }, "remove item"));
  },
  components: {
    BaseButton: BaseButton
  }
};

var components = [MenuIcon, GridIcon, AddIcon, MailIcon, ScrollIcon, FormIcon, VideoIcon, LoaderIcon, RemoveIcon];
function install(Vue) {
  components.map(function (component) {
    return Vue.component(component.name, component);
  });
}

exports.install = install;
exports.MenuIcon = MenuIcon;
exports.GridIcon = GridIcon;
exports.AddIcon = AddIcon;
exports.MailIcon = MailIcon;
exports.ScrollIcon = ScrollIcon;
exports.FormIcon = FormIcon;
exports.VideoIcon = VideoIcon;
exports.LoaderIcon = LoaderIcon;
exports.RemoveIcon = RemoveIcon;
