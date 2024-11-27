module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@composants": "./app/composants",
            "@hooks": "./app/hooks",
            "@ecrans": "./app/ecrans",
            "@navigation": "./app/navigation",
          },
        },
      ],
    ],
  };
};
