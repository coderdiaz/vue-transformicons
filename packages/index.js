import './transformicons.css';
import MenuIcon from './src/MenuIcon';
import GridIcon from './src/GridIcon';
import AddIcon from './src/AddIcon';
import MailIcon from './src/MailIcon';
import ScrollIcon from './src/ScrollIcon';
import FormIcon from './src/FormIcon';
import VideoIcon from './src/VideoIcon';
import LoaderIcon from './src/LoaderIcon';
import RemoveIcon from './src/RemoveIcon';

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
