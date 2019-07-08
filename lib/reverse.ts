import curry from "./curry.ts";

function reverse(x: any[] | string): any[] | string {
    if (Array.isArray(x)) {
        return x.reverse();
    }

    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

export default curry(reverse);
