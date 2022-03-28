module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@common": "./src/common",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@locale": "./src/locale/i18n",
            "@routes": "./src/navigation/Routes",
            "@screens": "./src/screens",
            "@store": "./src/store",
            "@services": "./src/services",
            "@apis": "./src/services/Apis",
            "@styles": "./src/styles",
          },
        },
      ],
    ],
  };
};
