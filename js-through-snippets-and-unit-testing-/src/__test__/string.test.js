import { 
    capitalize
} from '../js/string';

test('capitalize suite', () => {
    expect(capitalize('js Rules !')).toEqual('Js Rules !');
    expect(capitalize('gabriel aguilar')).not.toEqual('Gabriel Aguilar');
    expect(capitalize('gabriel aguilar')).toEqual('Gabriel aguilar');
});