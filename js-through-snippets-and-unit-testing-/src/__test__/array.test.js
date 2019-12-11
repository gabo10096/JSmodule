import { 
    allEqual,
    countOccurrences
} from '../array';

test('allEqual', () => {
    expect(allEqual([1, 2, 3, 4, 5, 6])).toBe(false);
    expect(allEqual([7, 7, 7, 7, 7, 7, 7])).toBe(true);
});

test('countOccurrences suite', () => {
    expect(countOccurrences([1,1,2,1,2,3], 1)).toEqual(3);
    expect(countOccurrences([4,1,2,4,2,4], 4)).toEqual(3);
    expect(countOccurrences([7,9,7,6,5,1], 7)).toEqual(2);
});