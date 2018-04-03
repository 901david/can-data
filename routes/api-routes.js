const cansData = require('../candata/public/data/cans.json');
const cors = require('cors');

//API Route Implementation
module.exports = (app) => {
    app.get('/api/data', cors(), (req, res) => {
        console.log('route hit');
        res.json({cans: cansData, google: process.env.GOOGLE_KEY});
    });
};
