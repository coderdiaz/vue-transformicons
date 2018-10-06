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
```html
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
import VueTransformicons from 'vue-transformicons';
Vue.use(Transformicons);
```

### Browser
In browser you can use Unpkg:
```
https://unpkg.com/vue-transformicons@latest/dist/vue-transformicons.min.css
https://unpkg.com/vue-transformicons@latest/dist/vue-transformicons.min.js
```

## Transformicons Components
- [Menu Icons](#menu-icons)
- [Grid Icons](#grid-icons)
- [Add Icons](#add-icons)
- [Remove Icons](#remove-icons)
- [Contact Icons](#contact-icons)
- [Form Icons](#form-icons)
- [Video Icons](#video-icons)
- [Scroll Icon](#scroll-icon)
- [Loader Icon](#loader-icon)

## Menu Icons
Provides with Menu icons.

#### Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `butterfly`. Values available:
  - `butterfly`
  - `minus`
  - `x-cross`
  - `arrow-up`
  - `arrow-360-left`
  - `arrow-left`
- `active` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```html
<menu-icon></menu-icon>
<menu-icon animation="minus"></menu-icon>
<menu-icon animation="x-cross"></menu-icon>
<menu-icon animation="arrow-up"></menu-icon>
<menu-icon animation="arrow-left"></menu-icon>
<menu-icon animation="arrow-left" :active="true"></menu-icon>
```

## Grid Icons
Provides with Grid icons.

#### Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `minus`. Values available:
  - `minus`
  - `check`
- `active` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```html
<grid-icon></grid-icon>
<grid-icon animation="rearrange"></grid-icon>
<grid-icon animation="collapse"></grid-icon>
<grid-icon animation="collapse" :active="true"></grid-icon>
```

## Add Icons
Provides with Add icons.

#### Parameters:
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `minus`. Values available:
  - `minus`
  - `check`
- `active` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

## Examples
```html
<add-icon></add-icon>
<add-icon animation="minus"></add-icon>
<add-icon animation="check"></add-icon>
<add-icon animation="minus" :active="true">
```

## Remove Icons
Provides with Remove icons.

#### Parameters
- `animation` - string, optional - Sets the menu animation type. In case this parameter is
  not provided, it will default to `check`. Values available:
  - `check`
  - `chevron-left`
  - `chevron-right`
  - `chevron-down`
  - `chevron-up`
- `active` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```html
<remove-icon></remove-icon>
<remove-icon animation="check"></remove-icon>
<remove-icon animation="chevron-left"></remove-icon>
<remove-icon animation="chevron-right"></remove-icon>
<remove-icon animation="chevron-down"></remove-icon>
<remove-icon animation="chevron-up"></remove-icon>
<remove-icon animation="check" :active="true"></remove-icon>
```

## Contact Icons
Provides with Contact icons.

#### Parameters:
- `animation` - string, optional - So far, the only available animation
  is `email`.
- `active` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```html
<contact-icon></contact-icon>
<contact-icon :active="true"></contact-icon>
<contact-icon animation="email" ></contact-icon>
```

## Form Icons
Provides with Form icons.

#### Parameters:
- `animation` - string, optional - So far, the only available animation
  is `search`.
- `active` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```html
<form-icon></form-icon>
<form-icon :active="true"></form-icon>
<form-icon animation="search"></form-icon>
```

## Video Icons
Provides with Video icons.

#### Parameters:
- `animation` - string, optional - So far, the only available animation
  is `play`.
- `active` - boolean, optional - Sets initial state for the button. Defaults to
  `false`.

#### Examples
```html
<video-icon></video-icon>
<video-icon :active="true"></video-icon>
<video-icon animation="play"></video-icon>
```

## Scroll Icon
Provides with a scroll icon.

#### Examples
```html
<scroll-icon></scroll-icon>
```

## Loader Icon
Provides with a Loader icon.

#### Examples
```html
<loader-icon</loader-icon>
```


## Contributions
All contributions are welcome send your PR and Issues.

## License
This is a open-source software licensed under the [MIT license](https://raw.githubusercontent.com/coderdiaz/vue-tiny-pagination/master/LICENSE)

### Crafted by Javier Diaz