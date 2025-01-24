module.exports = function (api) {
    api.cache(true); // Enables caching for faster rebuilds
  
    return {
      presets: ["babel-preset-expo"], // Use the Expo preset
      plugins: [
        "react-native-reanimated/plugin", // Required for React Native Reanimated
      ],
    };
  };
  