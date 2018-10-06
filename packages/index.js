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
  components.map(component => Vue.component(component.name, component));
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
