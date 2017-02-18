// Leave this file intact.
var express = require('express');
var app = express();

app.use(
    express.static('./dist/')
);

console.log('Isteninglay onway ortpay 8080');
app.listen(8080);
