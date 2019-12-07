/**
 * **concat** adds two arrays or strings together
 * @param a first element
 * @param b second element
 * @returns concatenated array or string
 */

export default function concat<T>(a: T[], b: T[]): T[]
export default function concat(a: string, b: string): string;
export default function concat<T>(a: T[] | string, b: T[] | string): T[] | string {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    
    return [...<T[]>a, ...<T[]>b];
}
