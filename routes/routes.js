const path = require('path');
module.exports = (app) => {
    app.get('/', (req, res, next) => {
        const pathName = path.join(__dirname, '../index.html');
        res.sendFile(pathName);
    });
}