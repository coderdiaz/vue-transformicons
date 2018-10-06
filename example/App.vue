<template>
  <div id="app">
    <menu-icon></menu-icon>
    <menu-icon animation="minus"></menu-icon>
    <menu-icon animation="x-cross"></menu-icon>
    <menu-icon animation="arrow-up"></menu-icon>
    <menu-icon animation="arrow-left"></menu-icon>
    <menu-icon animation="arrow-360-left"></menu-icon>
    <grid-icon></grid-icon>
    <grid-icon animation="collapse"></grid-icon>
    <add-icon></add-icon>
    <add-icon animation="check"></add-icon>
    <remove-icon></remove-icon>
    <remove-icon animation="chevron-left"></remove-icon>
    <remove-icon animation="chevron-right"></remove-icon>
    <remove-icon animation="chevron-down"></remove-icon>
    <remove-icon animation="chevron-up"></remove-icon>
    <mail-icon></mail-icon>
    <scroll-icon></scroll-icon>
    <form-icon></form-icon>
    <video-icon></video-icon>
    <loader-icon></loader-icon>
  </div>
</template>
<script>
import { MenuIcon, GridIcon, AddIcon, MailIcon, ScrollIcon, FormIcon, VideoIcon, LoaderIcon, RemoveIcon } from '../packages/index.js';
export default {
  name: "App",
  components: {
    MenuIcon,
    GridIcon,
    AddIcon,
    MailIcon,
    ScrollIcon,
    FormIcon,
    VideoIcon,
    LoaderIcon,
    RemoveIcon,
  },
};
</script>
<style src="../packages/transformicons.css"></style>
<style src="./css/tailwind.min.css"></style>
