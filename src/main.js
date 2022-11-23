import _ from 'lodash';
import { str } from './moduleA/a.ts';

const a = _.partition([1, 2, 3, 4], n => n % 2);


console.log('xxxxxxxxx', a, str)
export const test = () => {
    return 'haha';
}

// alert('xxxxxxxx')