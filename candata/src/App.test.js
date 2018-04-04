const Nightmare = require('nightmare');

describe('UI Affirmation Tests', function() {

    let nightmare = null;
    let page = null;

    beforeEach(() => {
        nightmare = new Nightmare();
        page = nightmare.goto('http://localhost:3002');

    });

    describe.skip('When page first loads', function () {

            test('it should render the h2 title', async function () {

                let text = await page.evaluate(() => document.body.querySelector('h2').textContent)
                    .end();

                expect(text).toContain('Can Data Display App')
            });

        test('it have the correct title', async function () {

            let text = await page.evaluate(() => document.title)
                .end();

            expect(text).toContain('React App');
        });

        test('it should apply the SelectedButton class to the All button', async function () {

            let text = await page.evaluate(() => document.body.querySelector('.selectedButton').textContent)
                .end();

            expect(text).toBe('All');
        });

        test('it should have six nav buttons', async function () {

            let textArray = await page.evaluate(() => {
                return document.querySelector('.nav-links .nav').innerHTML;

            })
                .end();

            expect(textArray.indexOf('All')).not.toBe(-1);
            expect(textArray.indexOf('Name')).not.toBe(-1);
            expect(textArray.indexOf('Serial')).not.toBe(-1);
            expect(textArray.indexOf('Size')).not.toBe(-1);
            expect(textArray.indexOf('Created On')).not.toBe(-1);
            expect(textArray.indexOf('Modified On')).not.toBe(-1);

        });

    });


    describe.skip('Interaction Tests', () => {

        test('it should apply the SelectedButton class to name button if Clicked', async function () {

            let newButton = await page
                .click('.name-test')
                .wait()
                .evaluate(() => document.body.querySelector('.selectedButton').textContent)
                .end();

            expect(newButton).toBe('Name');
        });

        test('it should apply the SelectedButton class to Serial button if Clicked', async function () {

            let newButton = await page
                .click('.serial-test')
                .wait()
                .evaluate(() => document.body.querySelector('.selectedButton').textContent)
                .end();

            expect(newButton).toBe('Serial');
        });

        test('it should apply the SelectedButton class to Size button if Clicked', async function () {

            let newButton = await page
                .click('.size-test')
                .wait()
                .evaluate(() => document.body.querySelector('.selectedButton').textContent)
                .end();

            expect(newButton).toBe('Size');
        });

        test('it should apply the SelectedButton class to Created On button if Clicked', async function () {

            let newButton = await page
                .click('.created-test')
                .wait()
                .evaluate(() => document.body.querySelector('.selectedButton').textContent)
                .end();

            expect(newButton).toBe('Created On');
        });

        test('it should apply the SelectedButton class to Modified On button if Clicked', async function () {

            let newButton = await page
                .click('.modified-test')
                .wait()
                .evaluate(() => document.body.querySelector('.selectedButton').textContent)
                .end();

            expect(newButton).toBe('Modified On');
        });

        test('it should apply the SelectedButton class to the appropriate button no matter hw many clicks you make', async function () {

            let newButton = await page
                .click('.modified-test')
                .wait()
                .click('.size-test')
                .wait()
                .click('.all-test')
                .wait()
                .click('.created-test')
                .wait()
                .evaluate(() => document.body.querySelector('.selectedButton').textContent)
                .end();

            expect(newButton).toBe('Created On');
        });


    });

    describe('UI should reflect correct sort', () => {

        test('it should show Can ID: 2521 first when sorted by Name', async function () {

            let firstCard = await page
                .click('.name-test')
                .wait()
                .evaluate(() => {
                    const card = document.body.querySelector('.card .card-body').innerHTML;
                    return card.indexOf('Can ID: 2521');
                })
                .end();

            expect(firstCard).not.toBe(-1);
        });

        test('it should show Can ID: 2310 first when sorted by Serial', async function () {

            let firstCard = await page
                .click('.serial-test')
                .wait()
                .evaluate(() => {
                    const card = document.body.querySelector('.card .card-body').innerHTML;
                    return card.indexOf('Can ID: 2310');
                })
                .end();

            expect(firstCard).not.toBe(-1);
        });

        test('it should show Can ID: 2521 first when sorted by Created On', async function () {

            let firstCard = await page
                .click('.created-test')
                .wait()
                .evaluate(() => {
                    const card = document.body.querySelector('.card .card-body').innerHTML;
                    return card.indexOf('Can ID: 2521');
                })
                .end();

            expect(firstCard).not.toBe(-1);
        });

        test('it should show Can ID: 2332 first when sorted by Modified On', async function () {

            let firstCard = await page
                .click('.created-test')
                .wait()
                .evaluate(() => {
                    const card = document.body.querySelector('.card .card-body').innerHTML;
                    return card.indexOf('Can ID: 2332');
                })
                .end();

            expect(firstCard).not.toBe(-1);
        });
    });



})
