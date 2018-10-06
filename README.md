<p align="center">
  <a style="margin-right: 20px" href="https://github.com/transformicons/transformicons">
    <img src="example/img/transformicons-icon.svg" alt="Transformicons" width="100" />
  </a>
  <a href="https://github.com/coderdiaz/vue-transformicons">
    <img src="https://vuejs.org/images/logo.png" width="120">
  </a>
  <h2 style="font-weight: 700" align="center">&lt;vue-transformicons /&gt;</h2>
</p>

<p align="center">
    <a href="https://npmjs.com/package/vue-transformicons"><img src="https://img.shields.io/npm/dt/vue-transformicons.svg?style=flat-square"></a>
    <a href="https://github.com/coderdiaz/vue-transformicons/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>
    <a href="https://github.com/coderdiaz/vue-transformicons/stargazers"><img src="https://img.shields.io/github/stars/coderdiaz/vue-transformicons.svg?style=flat-square"></a>
    <a href="http://npmjs.com/package/vue-transformicons"><img src="https://img.shields.io/npm/v/vue-transformicons.svg?style=flat-square"></a>
    <a href="http://npmjs.com/package/vue-transformicons"><img src="https://img.shields.io/npm/dm/vue-transformicons.svg?style=flat-square"></a>
    <a href="https://www.paypal.me/coderdiaz"><img src="https://img.shields.io/badge/invite-coffee-red.svg?style=flat-square"></a>
    <a href="https://travis-ci.org/coderdiaz/vue-transformicons"><img src="https://travis-ci.org/coderdiaz/vue-transformicons.svg?branch=master&style=flat-square"></a>
</a>

---

## Introduction
[Transformicons](http://transformicons.com) for Vue.

## Installation

```sh
# Using npm
$ npm i -S vue-transformicons

# Using yarn
$ yarn add vue-transformicons
```

## Usage
### Local registration
```js
<template>
  <div id="#app">
    <menu-icon></menu-icon>
  </div>
</template>
<script>
import { MenuIcon } from 'vue-transformicons'
export default {
  components: {
    MenuIcon
  }
}
</script>
```

### Global registration
```js
import VueTransformicons from 'vue-transformicons;
Vue.use(Transformicons);
```

### Browser
In browser you can use Unpkg:
```
https://unpkg.com/vue-transformicons@latest/dist/vue-transformicons.min.css
https://unpkg.com/vue-transformicons@latest/dist/vue-transformicons.min.js
```

## Documentation
More docs is comming

## Contributions
All contributions are welcome send your PR and Issues.

## License
This is a open-source software licensed under the [MIT license](https://raw.githubusercontent.com/coderdiaz/vue-tiny-pagination/master/LICENSE)

### Crafted by Javier Diaz