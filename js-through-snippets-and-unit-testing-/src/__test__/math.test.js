import { 
    isEven,
    average,
    isDivisible,
    degreeesToRads
} from '../js/Math';

test('isEven suite', () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(10)).toBe(true);
}); 

test('average suite', () => {
    expect(average(...[1,2,3])).toEqual(2);
    expect(average(1,2,3,4,5)).toEqual(3);
});

test('isDivisible suite', () => {
    expect(isDivisible(49,7)).toBe(true);
    expect(isDivisible(49,2)).toBe(false);
});

test('degreeesToRads suite', () => {
    expect(degreeesToRads(90.0)).toBeCloseTo(1.57);
    expect(degreeesToRads(270.0)).toBeCloseTo(4.71);
});