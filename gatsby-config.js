module.exports = {
  siteMetadata: {
    title: "Chef Share",
  },
  plugins: ["gatsby-plugin-netlify-cms",
  // {
  //   resolve: `gatsby-plugin-react-redux`,
  //   options: {
  //     pathToCreateStoreModule: './src/state/store',
  //     serialize: {
  //       space: 0,

  //       isJSON: true,
  //       unsafe: false,
  //       ignoreFunction: true,
  //     },
  //     // [optional] - if true will clean up after itself on the client, default:
  //     cleanupOnClient: true,
  //     // [optional] - name of key on `window` where serialized state will be stored, default:
  //     windowKey: '__PRELOADED_STATE__',
  //   },
  // },
  {
    resolve: `gatsby-plugin-react-redux-persist`,
    options: {
      pathToCreateStoreModule: './src/state/store',
      serialize: {
        space: 0,
        isJSON: true,
        unsafe: false,
        ignoreFunction: true,
      },
      // [optional] - if true will clean up after itself on the client, default:
      cleanupOnClient: true,
      // [optional] - name of key on `window` where serialized state will be stored, default:
      windowKey: '__PRELOADED_STATE__',
    },
  },
],
};
