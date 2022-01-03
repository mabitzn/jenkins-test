// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
  config.set({
    customLaunchers: {
      Chrome_without_sandox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    browsers: ['Chrome']
  });
};