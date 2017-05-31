# @Deveodk/vue-toastr

<img src="https://cloud.githubusercontent.com/assets/7561792/26655854/e2ec2a7a-465c-11e7-946f-502c046903c0.png" width="100%" />


[![npm](https://img.shields.io/npm/v/@deveodk/vue-seo.svg)](https://www.npmjs.com/package/@deveodk/vue-seo) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Easy way to add seo to any vue based page, works without use of jquery. Based on the original idea by GuillaumeLeclerc/vue-seo

## Installation

```bash
npm install --save @deveodk/vue-seo
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import vueSeo from '@deveodk/vue-seo'

Vue.use(vueSeo)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="@deveodk/vue-seo/dist/@deveodk/vue-seo.css"></link>
<script src="@deveodk/vue-seo/dist/@deveodk/vue-seo.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/@deveodk/vue-seo/dist/@deveodk/vue-seo.css"></link>
<script src="https://unpkg.com/@deveodk/vue-seo"></script>
```

## Important disclaimer
> Due to the fact that facebook and twitter wont execute javascript when crawling.
The plugin will not work unless you use some sort of server side rendering.
Google however defaults to some of facebooks open graph tags.


## Usage
The api is very similar to the original vue-seo. Every content property is reactive

### Basic

```html
# Set the title
<seo-title content="title here"></seo-title>
```
```html
# Set the description
<seo-description content="description here"></seo-description>
```
```html
# Set the author
<seo-author content="author link here"></seo-author>
```
```html
# Set the keywords
<seo-keywords content="keywords list here"></seo-keywords>
```
```html
# set the canoncial link
<seo-canonical content="canoncial link here"></seo-canonical>
```

### Open Graph (facebook)

```html
# Set the title
<seo-og-title content="title here"></seo-og-title>
```
```html
# Set the description
<seo-og-description content="description here"></seo-og-description>
```
```html
# Set the site name
<seo-og-site-name content="site name here"></seo-og-site-name>
```
```html
# Set the image
<seo-og-image content="image link here"></seo-og-image>
```
```html
# set the see also
<seo-og-see-also content="see also link here"></seo-og-see-also>
```
```html
# set the url
<seo-og-url content="set the url"></seo-og-url>
```

### Google+

```html
# Set the name
<seo-google-name content="name here"></seo-google-name>
```
```html
# Set the description
<seo-google-description content="description here"></seo-google-description>
```
```html
# Set the image
<seo-google-image content="image link here"></seo-google-image>
```

### Twitter

```html
# Set the title
<seo-twitter-title content="title here"></seo-twitter-title>
```
```html
# Set the description
<seo-twitter-description content="description here"></seo-twitter-description>
```
```html
# Set the image
<seo-twitter-image content="image link here"></seo-twitter-image>
```
```html
# Set the card
<seo-twitter-card content="card description here"></seo-twitter-card>
```
```html
# Set the url
<seo-twitter-url content="url here"></seo-twitter-url>
```
```html
# Set the image
<seo-twitter-image content="image link here"></seo-twitter-image>
```

### Custom properties

This provides an easy way to set html tags, there is not included in the standard package

```html
# Set a custom propery
<seo-custom tag="meta" :attrName="'name'" :attrValue="'author'" contentName="'content'" content="image link here"></seo-twitter-image>
```

## License

[MIT](http://opensource.org/licenses/MIT)

![madewithloveandcofee](https://cloud.githubusercontent.com/assets/7561792/26640815/14beb45c-4629-11e7-89db-fbca538a6be5.png)
