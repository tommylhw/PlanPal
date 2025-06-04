const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
  // transformer: {
  //   getTransformOptions: async () => ({
  //     transform: {
  //       experimentalImportSupport: false,
  //       inlineRequires: false,
  //     },
  //   }),
  // },
  // resolver: {
  //   sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json', 'wasm', 'svg'],
  // },
});

module.exports = withNativeWind(config, {input: './global.css'});
 