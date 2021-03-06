const express = require('express');
const path = require('path');
const ngApp = express();

ngApp.use(express.static('./dist/demo'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/demo/index.html'));
});

ngApp.listen(process.env.PORT || 4200);