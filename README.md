# denofun
    
<p align="center">
    <img src="logo.svg" width="256" height="256"></img>
    <p align="center">
        Small utility library for <a href="https://deno.land">Deno</a> containing functions, monads and other fun stuff.
    </p>
</p>
</br></br>

## Roadmap
⚠️ WATCH OUT!

Denofun, like Deno itself, is still under heavy development. Semver will likely NOT be strictly enforced until v1.0.0.
Denofun v1.0.0 will NOT be released until Deno v1.0.0 is released. In the meantime Denofun will try to stabilize, crush bugs and become as mature as possible. Until v1.0.0 treat this library as a curiosity. While early adopters and contributors are welcome, be wary if you want to use it somewhere you care about. For now.

### Goals
- provide a good replacement for libraries like Ramda or Lodash with "native" Deno feel
- provide basic monads (Either, Maybe/Option)
- good, out-of-the-box typings

## Documentation
Thanks to how Deno works, it's easy to start using this library.
```typescript
import compose from "https://raw.githubusercontent.com/galkowskit/denofun/master/lib/compose.ts";
```
Denofun is also present in [deno.land](https://deno.land/) so you can use it for easier links.
```typescript
import compose from "https://deno.land/x/denofun/lib/compose.ts";
```
You can even target specific versions or branches.
```typescript
import compose from "https://deno.land/x/denofun@v0.1.0/lib/compose.ts";
```
Or if you find yourself needing the transpiled JavaScript version:
```typescript
import compose from "https://deno.land/x/denofun/lib/compose.ts?js";
```
### compose
**compose** takes a list of functions and does right-to-left function composition.
```typescript
import compose from "https://deno.land/x/denofun/lib/compose.ts";

function greet(name: string) {
    return `hello, ${name}!`;
}

function makeLoud(x) {
    return x.toUpperCase();
}

const greetLoudly = compose(makeLoud, greet);

greetLoudly("world"); // => HELLO, WORLD!
```

### concat
**concat** adds two arrays or strings together.
```typescript
import concat from "https://deno.land/x/denofun/lib/concat.ts";

concat("hello", "world"); // => "helloworld"
concat([1, 2, 3], [3, 4, 5]); // => [1, 2, 3, 3, 4, 5]
```

### curry
**curry** returns a curried version of the provided n-arity function, it will return new 1-arity functions until all arguments are supplied.
```typescript
import curry from "https://deno.land/x/denofun/lib/curry.ts";

const greet = (name: string, age: number) => `hello, I'm Tomasz and I'm 26 years old`;
greet("Tomasz", 26); // => hello, I'm Tomasz and I'm 26 years old

const curriedGreet = curry(greet);
curriedGreet("Tomasz")(26) // => hello, I'm Tomasz and I'm 26 years old

// ===

const cars = [
    { make: "Alfa Romeo", model: "Giulia" },
    { make: "Alfa Romeo", model: "Stelvio" },
    { make: "Ford", model: "Mustang"},
    { make: "Ford", model: "Focus"},
    { make: "Toyota", model: "Mirai" },
    { make: "Toyota", model: "Yaris" },
    { make: "Toyota", model: "Supra" },
];

const filterCarsByMake = curry((make: string, car) => car.make === make);
const filterAlfas = filterCarsByMake("Alfa Romeo");
cars.filter(filterAlfas); // => [ { make: "Alfa Romeo", model: "Giulia" }, { make: "Alfa Romeo", model: "Stelvio" } ]
```

### equals
**equals** checks if two values are equal, **warning:** for non-primitives uses JSON parsing (for now).
```typescript
import equals from "https://deno.land/x/denofun/lib/equals.ts";

equals(1, 1); // => true
equals(1, 2); // => false
equals([1, 2, 3], [1, 2, 3]); // => true
equals([1, 2, 3], [2, 1, 3]); // => false
equals({ make: "Alfa Romeo", model: "Giulia" }, { make: "Alfa Romeo", model: "Giulia" }); // => true
```

### filter
**filter** runs filter function on every element of array and returns a new array with only those elements for which filter function returned true.
```typescript
import filter from "https://deno.land/x/denofun/lib/filter.ts";

const cars = [
    { make: "Alfa Romeo", model: "Giulia" },
    { make: "Alfa Romeo", model: "Stelvio" },
    { make: "Ford", model: "Mustang"},
    { make: "Ford", model: "Focus"},
    { make: "Toyota", model: "Mirai" },
    { make: "Toyota", model: "Yaris" },
    { make: "Toyota", model: "Supra" },
];

filter(car => car.make === "Ford", cars); // => [ { make: "Ford", model: "Mustang" }, { make: "Ford", model: "Focus" } ]
```

### find
**find** looks up first element of an array that matches the function passed.
```typescript
import find from "https://deno.land/x/denofun/lib/find.ts";

const cars = [
    { make: "Alfa Romeo", model: "Giulia" },
    { make: "Alfa Romeo", model: "Stelvio" },
    { make: "Ford", model: "Mustang"},
    { make: "Ford", model: "Focus"},
    { make: "Toyota", model: "Mirai" },
    { make: "Toyota", model: "Yaris" },
    { make: "Toyota", model: "Supra" },
];

function findToyota(car) {
    return car.make === 'Toyota';
}

find(findToyota, cars); // => { make: "Toyota", model: "Mirai" }
```

### flatten
**flatten** takes an array of elements and flattens it until all elements are on the root-level (`flat(Infinity)`).
```typescript
import flatten from "https://deno.land/x/denofun/lib/find.ts";

flatten([[1, 2, 3], [4, 5, 6]]); // => [1, 2, 3, 4, 5, 6]
flatten([[1, [2, 3], [4, [5, [6]]]]]); // => [1, 2, 3, 4, 5, 6]
flatten([]); // => []
```

### groupBy
**groupBy** accepts a selector function and a list of elements, the elements will be grouped by the return value of the selector function.
```typescript
import find from "https://deno.land/x/denofun/lib/group_by.ts";

const cars = [
    { make: "Alfa Romeo", model: "Giulia" },
    { make: "Alfa Romeo", model: "Stelvio" },
    { make: "Ford", model: "Mustang"},
    { make: "Ford", model: "Focus"},
    { make: "Toyota", model: "Mirai" },
    { make: "Toyota", model: "Yaris" },
    { make: "Toyota", model: "Supra" },
];

groupBy(car => car.name, cars); // => { "Alfa Romeo": [ { make: "Alfa Romeo", model: "Giulia" }, { make: "Alfa Romeo", model: "Stelvio" } ], "Ford": [ { make: "Ford", model: "Mustang" }, { make: "Ford", model: "Focus" }, ], "Toyota": [ { make: "Toyota", model: "Mirai" }, { make: "Toyota", model: "Yaris" }, { make: "Toyota", model: "Supra" } ] }
groupBy(x => x.length, ["a", "bb", "bb", "ccc"]); // => { 1: ["a"], 2: ["bb", "bb"], 3: ["ccc"] }
```

### has
**has** checks if a key exists inside an object (does NOT check the prototype's keys!).
```typescript
import has from "https://deno.land/x/denofun/lib/has.ts";

const car = { make: "Alfa Romeo", model: "Giulia" };
has('make', car); // => true
```

### head
**head** returns the first element of an array or a string.
```typescript
import head from "https://deno.land/x/denofun/lib/head.ts";

const numbers = [1, 2, 3, 4, 5];
head(numbers); // => 1

// ===

head("hello world!"); // => "h"
```

### identity
**identity** returns the provided element, otherwise does nothing.
```typescript
import identity from "https://deno.land/x/denofun/lib/identity.ts";

const x = 5;
identity(x); // => 5
```

### keys
**keys** returns key names from a provided object.
```typescript
import keys from "https://deno.land/x/denofun/lib/keys.ts";

const car = { make: "Alfa Romeo", model: "Giulia" };
keys(car); // => ['make', 'model']
```

### map
**map** applies a function to each element of the array, returns the array of results.
```typescript
import map from "https://deno.land/x/denofun/lib/map.ts";

const numbers = [1, 2, 3, 4, 5];
map(n => n * 2, numbers); // => [2, 4, 6, 8, 10]
```

### nth
**nth** returns element under given index, if negative index is provided element at (length + index) is returned.
```typescript
import nth from "https://deno.land/x/denofun/lib/map.ts";

nth(2, [1, 2, 3, 4, 5]); // => 3
nth(4, "hello world!"); // => "o"
```

### omit
**omit** returns a copy of an object but without specified keys.
```typescript
import omit from "https://deno.land/x/denofun/lib/omit.ts";

const car = { make: "Alfa Romeo", model: "Giulia" };
omit(["make"], car); // => { model: 'Giulia' }
```

### pipe
**pipe** takes a list of functions and does left-to-right function composition.
```typescript
import pipe from "https://deno.land/x/denofun/lib/pipe.ts";

function greet(name: string) {
    return `hello, ${name}!`;
}

function makeLoud(x) {
    return x.toUpperCase();
}

const greetLoudly = pipe(greet, makeLoud);

greetLoudly("world"); // => "HELLO, WORLD!"
```

###prop
**prop** returns a value from object under a specific key.
```typescript
import prop from "https://deno.land/x/denofun/lib/prop.ts";

const car = { make: "Alfa Romeo", model: "Giulia" };
prop("make", car); // => "Alfa Romeo"
```

### reduce
**reduce** applies a reductor function to all elements of the array while
keeping the aggragete of previous iterations. Returns a single value.
```typescript
import reduce from "https://deno.land/x/denofun/lib/reduce.ts";

const numbers = [1, 2, 3, 4, 5];

const add = (a, b) => a + b;
reduce(add, 0, numbers); // => 15
```

### reverse
**reverse** reverses the order of the elements in array or string.
```typescript
import reverse from "https://deno.land/x/denofun/lib/reverse.ts";

reverse([1, 2, 3, 4, 5]); // => [5, 4, 3, 2, 1]

// ===

reverse("hello world!"); // => ["!dlrow olleh"]
```

### sort
**sort** performs a sorting of array or string via provided sorting function.

Sorting function has to accept two arguments and retrun 1 if first argument
is bigger than second, 0 if equal and -1 if lesser.
```typescript
import sort from "https://deno.land/x/denofun/lib/sort.ts";

function sortNumbers (a, b) {
    if (a > b) {
        return 1;
    }

    if (a == b) {
        return 0;
    }

    if (a < b) {
        return -1;
    }
}

sort(sortNumbers, [5, 4, 2, 3, 1]); // => [1, 2, 3, 4, 5]
```

### split
**split** splits a string by a given deliminator/separator.
```typescript
import split from "https://deno.land/x/denofun/lib/split.ts";

split("/", "/usr/local/bin/deno"); // => ["", "usr", "local", "bin", "deno"]
```

### tail
**tail** returns all elements of the given array or string except the first.
```typescript
import tail from "https://deno.land/x/denofun/lib/tail.ts";

tail([1, 2, 3, 4, 5]); // => [2, 3, 4, 5]

// ===

tail("hello world!"); // => "ello world!"
```

### values
**values** returns values from a provided object
```typescript
import values from "https://deno.land/x/denofun/lib/values.ts";

const car = { make: "Alfa Romeo", model: "Giulia" };
values(car); // => ["make", "model"]
```

## For Developers
If you want to contribute to Denofun:

1. Clone this repository.
2. Make sure you have Deno installed.
3. You can run tests via `./bin/test.ts`.

Thanks!
