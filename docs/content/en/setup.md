---
title: 'Setup'
description: ''
position: 102
category: 'Getting started'
---

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

Add `@cusy/nuxt-attachment` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @cusy/nuxt-attachment
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @cusy/nuxt-attachment
  ```

  </code-block>
</code-group>

Then, add `@cusy/nuxt-attachment` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
  modules: [
    '@cusy/nuxt-attachment'
  ],
  attachment: {
    // Options
  }
}
```
