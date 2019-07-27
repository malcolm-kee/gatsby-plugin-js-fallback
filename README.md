# gatsby-plugin-js-fallback

Gatsby plugin to fallback gracefully when JS is disabled on client side

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
