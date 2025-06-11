module.exports = {
  packagerConfig: {
    icon: 'icon',
    name: "League of memories",
    executableName: "LeagueOfMemories"
  },
  rebuildConfig: {},
  plugins: [
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/templates/index.html.twig',
              js: './src/js/renderer.js',
              name: 'main_window',
              preload: {
                js: './src/js/preload.js',
              },
            },
          ],
          devServer: {
            overlay: false, // Disable webpack error overlay
          },
        },
      },
    },
  ]
};
