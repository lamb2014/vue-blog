var koa = require('koa');
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || '77PxmfN0u92YKssXPJp7eMoE-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'Ybzbn67OwpEFVEyBOQNhTywC',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'kCcBC6pOA7PA89a3xSwYCuKf'
});

var app = koa();
app.use(require('koa-static')('dist'))
app.use(AV.koa());
app.listen(process.env.LEANCLOUD_APP_PORT);