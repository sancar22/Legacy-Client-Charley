module.exports = {
  siteMetadata: {
    title: "Chef Share",
  },
  plugins: ["gatsby-plugin-netlify-cms",
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
      cleanupOnClient: true,
      windowKey: '__PRELOADED_STATE__',
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Chef Share`,
      short_name: `Chef Share`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: 'src/images/smallhat.png'
    },
  },
],
};
