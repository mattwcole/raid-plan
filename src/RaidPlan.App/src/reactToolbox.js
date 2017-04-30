// Can replace with css values and parse with modules-values-extract if
// support for webpack config promises is added to JavascriptServices.
// https://www.npmjs.com/package/modules-values-extract
// https://github.com/aspnet/JavaScriptServices/issues/907

// These values are not hot-reloaded.
module.exports = {
  'color-primary': 'var(--palette-red-500)',
  'button-height': '100px',
};
