const path = require('path');

module.exports = {
    // ... outras configurações ...
    resolve: {
        fallback: {
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            zlib: require.resolve('browserify-zlib'),
            stream: require.resolve('stream-browserify'),
        },
    },
    // ... outras configurações ...
};
