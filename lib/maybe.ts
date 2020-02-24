/**
 * Maybe<T> is a Functor (map), a Monad (flatMap), and a Filtrable (filter).
 * It contains a possibly empty value.
 * // TODO: implement the Applicative and Alternative interface
 */
export interface Maybe<T> {
    get(): T | undefined;
    default(t: T): T;
    toArray(): [] | [T];
    map<R>(f: (t: T) => R): Maybe<R>;
    flatMap<R>(f: (t: T) => Maybe<R>): Maybe<R>;
    filter(f: (t: T) => boolean): Maybe<T>;

    toJSON(): T | undefined;
    toString(): string;
}

// nothing is a function to avoid side effects due to mutations of a global object
function nothing<T>(): Maybe<T> {
    return {
        get() {
            return undefined;
        },
        default(t: T) {
            return t;
        },
        toArray() {
            return [];
        },
        map<R>(f: (t: T) => R) {
            return nothing<R>();
        },
        flatMap<R>(f: (t: T) => Maybe<R>) {
            return nothing<R>();
        },
        filter(f) {
            return this;
        },
        toJSON() {
            return undefined;
        },
        toString() {
            return '';
        }
    }
}

function just<T>(value: T): Maybe<T> {
    return {
        get() {
            return value;
        },
        default(t: T) {
            return value;
        },
        toArray() {
            return [value];
        },
        map<R>(f: (t: T) => R) {
            return just(f(value));
        },
        flatMap<R>(f: (t: T) => Maybe<R>) {
            return f(value);
        },
        filter(f: (t: T) => boolean) {
            if (f(value)) {
                return this;
            } else {
                return nothing();
            }
        },
        toJSON() {
            return value;
        },
        toString() {
            return String(value);
        }
    }
}


export default function maybe<T>(t?: T): Maybe<T> {
    if (t === undefined || t === null) {
        return nothing();
    } else {
        return just(t);
    }
}
