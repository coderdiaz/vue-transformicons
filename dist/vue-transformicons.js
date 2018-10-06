(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueTransformicons = {})));
}(this, (function (exports) { 'use strict';

  const BaseButton = {
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

    data() {
      return {
        currentActive: false
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
          'tcon-transform': this.currentActive
        };
      }

    },

    render() {
      const h = arguments[0];
      return h("button", {
        attrs: {
          "aria-label": this.ariaLabel
        },
        "class": this.currentClasses,
        on: {
          "click": this.toggleStatus
        }
      }, [this.$slots.default]);
    },

    methods: {
      toggleStatus(e) {
        e.preventDefault();
        this.currentActive = !this.currentActive;
      }

    }
  };
  const IconMixin = {
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

    data() {
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

    mounted() {
      this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
    },

    render() {
      const h = arguments[0];
      return h(BaseButton, {
        attrs: {
          ariaLabel: "toggle menu",
          animation: this.defaultAnimation,
          animations: this.animations,
          active: this.active
        }
      }, [h("span", {
        attrs: {
          "aria-hidden": "true"
        },
        "class": "tcon-menu__lines"
      }), h("span", {
        "class": "tcon-visuallyhidden"
      }, ["toggle menu"])]);
    },

    components: {
      BaseButton
    }
  };

  var GridIcon = {
    mixins: [IconMixin],

    data() {
      return {
        defaultAnimation: 'rearrange',
        animations: {
          rearrange: ['tcon-grid', 'tcon-grid--rearrange'],
          collapse: ['tcon-grid', 'tcon-grid--collapse']
        }
      };
    },

    mounted() {
      this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
    },

    render() {
      const h = arguments[0];
      return h(BaseButton, {
        attrs: {
          ariaLabel: "toggle grid",
          animation: this.defaultAnimation,
          animations: this.animations,
          active: this.active
        }
      }, [h("span", {
        attrs: {
          "aria-hidden": "true"
        },
        "class": "tcon-grid__item"
      }), h("span", {
        "class": "tcon-visuallyhidden"
      }, ["toggle grid"])]);
    },

    components: {
      BaseButton
    }
  };

  var AddIcon = {
    mixins: [IconMixin],

    data() {
      return {
        defaultAnimation: 'minus',
        animations: {
          minus: ['tcon-plus', 'tcon-plus--minus'],
          check: ['tcon-plus', 'tcon-plus--check']
        }
      };
    },

    mounted() {
      this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
    },

    render() {
      const h = arguments[0];
      return h(BaseButton, {
        attrs: {
          ariaLabel: "add item",
          animation: this.defaultAnimation,
          animations: this.animations,
          active: this.active
        }
      }, [h("span", {
        "class": "tcon-visuallyhidden"
      }, ["add item"])]);
    },

    components: {
      BaseButton
    }
  };

  var MailIcon = {
    mixins: [IconMixin],

    data() {
      return {
        defaultAnimation: 'mail',
        animations: {
          mail: ['tcon-mail--envelope']
        }
      };
    },

    mounted() {
      this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
    },

    render() {
      const h = arguments[0];
      return h(BaseButton, {
        attrs: {
          ariaLabel: "open mailbox",
          animation: this.defaultAnimation,
          animations: this.animations,
          active: this.active
        }
      }, [h("span", {
        attrs: {
          "aria-hidden": "true"
        },
        "class": "tcon-mail--envelope__flap"
      }), h("span", {
        "class": "tcon-visuallyhidden"
      }, ["open mailbox"])]);
    },

    components: {
      BaseButton
    }
  };

  var ScrollIcon = {
    render() {
      const h = arguments[0];
      return h("svg", {
        "class": "tcon-svgchevron",
        attrs: {
          version: "1.1",
          viewBox: "0 0 30 36",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [h("path", {
        "class": "a3",
        attrs: {
          d: "M0,0l15,16L30,0"
        }
      }), h("path", {
        "class": "a2",
        attrs: {
          d: "M0,10l15,16l15-16"
        }
      }), h("path", {
        "class": "a1",
        attrs: {
          d: "M0,20l15,16l15-16"
        }
      })]);
    }

  };

  var FormIcon = {
    mixins: [IconMixin],

    data() {
      return {
        defaultAnimation: 'search',
        animations: {
          search: ['tcon-search--xcross']
        }
      };
    },

    mounted() {
      this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
    },

    render() {
      const h = arguments[0];
      return h(BaseButton, {
        attrs: {
          ariaLabel: "toggle search",
          animation: this.defaultAnimation,
          animations: this.animations,
          active: this.active
        }
      }, [h("span", {
        attrs: {
          "aria-hidden": "true"
        },
        "class": "tcon-search__item"
      }), h("span", {
        "class": "tcon-visuallyhidden"
      }, ["toggle search"])]);
    },

    components: {
      BaseButton
    }
  };

  var VideoIcon = {
    mixins: [IconMixin],

    data() {
      return {
        defaultAnimation: 'play',
        animations: {
          play: ['tcon-vid--play']
        }
      };
    },

    mounted() {
      this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
    },

    render() {
      const h = arguments[0];
      return h(BaseButton, {
        attrs: {
          ariaLabel: "play video",
          animation: this.defaultAnimation,
          animations: this.animations,
          active: this.active
        }
      }, [h("span", {
        "class": "tcon-visuallyhidden"
      }, ["play video"])]);
    },

    components: {
      BaseButton
    }
  };

  var LoaderIcon = {
    render() {
      const h = arguments[0];
      return h("span", {
        attrs: {
          "aria-label": "loading"
        },
        "class": "tcon-loader--spinner360"
      }, [h("span", {
        "class": "tcon-visuallyhidden"
      }, ["loading"])]);
    }

  };

  var RemoveIcon = {
    mixins: [IconMixin],

    data() {
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

    mounted() {
      this.defaultAnimation = this.animation ? this.animation : this.defaultAnimation;
    },

    render() {
      const h = arguments[0];
      return h(BaseButton, {
        attrs: {
          ariaLabel: "remove item",
          animation: this.defaultAnimation,
          animations: this.animations,
          active: this.active
        }
      }, [h("span", {
        "class": "tcon-visuallyhidden"
      }, ["remove item"])]);
    },

    components: {
      BaseButton
    }
  };

  const components = [MenuIcon, GridIcon, AddIcon, MailIcon, ScrollIcon, FormIcon, VideoIcon, LoaderIcon, RemoveIcon];
  function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    components.map(component => Vue.component(component.name, component));
  }
  const plugin = {
    install
  };
  let GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
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
  exports.default = plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
