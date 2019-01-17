module.exports = function (api) {
  // api.cache(true)
  const platform = api.caller(caller => caller.platform);

  if (platform === 'android') {
    return {
      presets: [],
      plugins: ["@babel/plugin-transform-react-jsx",
        "@babel/plugin-transform-flow-strip-types",
        ["@babel/plugin-proposal-class-properties", {loose: true}],
        "@babel/proposal-object-rest-spread",
        "@babel/plugin-transform-destructuring",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-transform-modules-commonjs"]
    }
  }
  return {
    presets: ["module:metro-react-native-babel-preset"]
  }
}
