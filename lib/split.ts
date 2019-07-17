import curry from "./curry.ts";

function split(d: string, s: string): string[] {
    return s.split(d);
}

export default curry(split);
