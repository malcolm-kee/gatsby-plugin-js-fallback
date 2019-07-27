# gatsby-plugin-js-fallback

[![version](https://img.shields.io/npm/v/gatsby-plugin-js-fallback.svg)](https://www.npmjs.com/package/gatsby-plugin-js-fallback) ![license](https://img.shields.io/npm/l/gatsby-plugin-js-fallback.svg)

Gatsby plugin to fallback gracefully when JS is disabled on client side.

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-plugin-js-fallback`
    // ... other plugins
  ]
};
```

Then in the React components/page that you would like to provide a fallback when JavaScript is disabled on client side:

```jsx
import React from 'react';
import { useIsJsEnabled } from 'gatsby-plugin-js-fallback';

const GracefulPage = () => {
  const isJsEnabled = useIsJsEnabled();

  return isJsEnabled ? <MyFancyComponentThatNeedJs /> : <SimpleComponent />;
};
```

- During Gatsby prerender phase, `useIsJsEnabled` would returns `false`, thus the pre-rendered HTML will contain the fallback UI that does not rely on JavaScript.
- On client side, if JavaScript is enabled and your Gatsby site hydrate successfully, `useIsJsEnabled` would returns `true`, then the UI that relies on JavaScript will be displayed.

## API

### `useIsJsEnabled`

A custom hooks that only returns `true` when your Gatsby site hydrate successfully on client side.

## Motivation

Sometimes, you want to introduce some components in your Gatsby site that rely heavily on JavaScript. However, this would cause your site non-usable when JavaScript is disabled on client side.

There are two approaches to deal with this:

1. Show a "this site works best with JavaScript" message. This is the default Gatsby behavior.
1. Add a fallback UI that doesn't require JavaScript, probably less fancy but still display all the contents.

This plugin allows you to implement second approach.

## Limitations

There may be content flash from the fallback UI to the enhanced UI at initial page/page refresh. This is because the pre-rendered HTML (that contains the fallback UI) will be displayed while the page is downloading all the js files and then detect if JS is enabled.

There is no solution to avoid this content flash at the moment. If you have any suggestion, raise an issue at let me know!
