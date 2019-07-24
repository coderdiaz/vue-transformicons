import MenuIcon from './packages/src/MenuIcon';
import GridIcon from './packages/src/GridIcon';
import AddIcon from './packages/src/AddIcon';
import MailIcon from './packages/src/MailIcon';
import ScrollIcon from './packages/src/ScrollIcon';
import FormIcon from './packages/src/FormIcon';
import VideoIcon from './packages/src/VideoIcon';
import LoaderIcon from './packages/src/LoaderIcon';
import RemoveIcon from './packages/src/RemoveIcon';

const components = [
  MenuIcon,
  GridIcon,
  AddIcon,
  MailIcon,
  ScrollIcon,
  FormIcon,
  VideoIcon,
  LoaderIcon,
  RemoveIcon,
];

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

const plugin = {
  install,
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

export {
  MenuIcon,
  GridIcon,
  AddIcon,
  MailIcon,
  ScrollIcon,
  FormIcon,
  VideoIcon,
  LoaderIcon,
  RemoveIcon,
};

export default plugin;
