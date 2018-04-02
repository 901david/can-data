//HTML Route Implementation
module.exports = (app, path) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'build/index.html'));
    });
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'build/index.html'));
    // });
};
