const React = require('react');

const JsEnabledContext = React.createContext(false);

function JsEnabledProvider({ children }) {
  const [isJsEnabled, setIsJsEnabled] = React.useState(false);

  React.useLayoutEffect(() => {
    setIsJsEnabled(true);
  }, []);

  return React.createElement(JsEnabledContext.Provider, { value: isJsEnabled }, children);
}

exports.wrapPage = function wrapPage({ element }) {
  return React.createElement(JsEnabledProvider, {}, element);
};

/**
 * React custom hooks to check JS is enabled
 * This should be used to show UI that is JS dependent and a fallback that is accessible without JS.
 * @returns {boolean}
 */
exports.useIsJsEnabled = function useIsJsEnabled() {
  return React.useContext(JsEnabledContext);
};
