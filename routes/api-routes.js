const cansData = require('../candata/public/data/cans.json');

//API Route Implementation
module.exports = (app) => {
    app.get('/api/data', (req, res) => {
        console.log('route hit');
        res.json(cansData);
    });
};
