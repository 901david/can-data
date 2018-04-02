const cansData = require('../data/cans.json');


//API Route Implementation
module.exports = (app) => {
    app.get('/api/candata', (req, res) => {
        res.json(cansData);
    });
};
