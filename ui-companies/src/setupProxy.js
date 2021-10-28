const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log('Kuku')
    app.use('/company', createProxyMiddleware({
            target: 'https://mnebty5mk8.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
            pathRewrite: {
                '^/company' : '/dev/company'
            }
        })
    );
    app.use('/dev/companies', createProxyMiddleware({
            target: 'https://mnebty5mk8.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        })
    );
};
