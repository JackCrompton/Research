var customMediaConfig = require('./custom-media.config');

module.exports = ctx => ({
    plugins: [
        require('autoprefixer')({}), //can set browser scope here
        require('postcss-custom-media')({
            extensions: customMediaConfig
        })
    ]
})