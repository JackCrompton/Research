var customMediaConfig = require('./custom-media.config');
var customCssVariablesConfig = require('./custom-css-variables.config');

console.log(customCssVariablesConfig);

module.exports = ctx => ({
    plugins: [
        require('autoprefixer')({}), //can set browser scope here
        require('postcss-custom-media')({
            extensions: customMediaConfig
        }),
        require('postcss-variables')(customCssVariablesConfig)
    ]
})