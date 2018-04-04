import { nameSort, serialSort, modifiedSort, createdSort, sizeSort, convertDate } from "./SearchHelpers";
import _ from 'lodash';
import { testData } from "./testData";

describe('Search Functions', () =>{


test('Name sort should sort the the objects alphabetically by name', () => {
        expect(nameSort(_.shuffle(testData))).toEqual(testData);
});

test('Serial Sort should order the items from least to greatest based on a serial number', () => {
   expect(serialSort(_.shuffle(testData))).toEqual(testData);
});

test('Modified Sort should order the items from oldest to newest based on Last modified date', () => {
   expect(modifiedSort(_.shuffle(testData))).toEqual(testData);
});

test('Created Sort should order the items from oldest to newest based on Can Creation date', () => {
    expect(createdSort(_.shuffle(testData))).toEqual(testData);
});

test('Size Sort should order from least ot greatest the items by can size', () => {
    expect(sizeSort(_.shuffle(testData))).toEqual(testData);

});

test('convert date should take in a date and make it more readable', () => {
    expect(convertDate('2017-03-14T00:00:00.000Z')).toBe('Mon Mar-13-2017 at 6:00:00 p.m.');
});

});





