# denofun
Small utility library for [Deno](https://deno.land) containing functions, monads and other fun stuff.

<image src="https://media.giphy.com/media/XOXdQszYm4I3m/giphy.gif" width="480" height="360">

## Documentation
Code samples assume [import map](https://deno.land/manual.html#importmaps) is configured like this (URL is still WIP, `denofun` like Deno is still under heavy development).

```
{
  "imports": {
    "std/": "https://deno.land/std/",
    "denofun/": "https://raw.githubusercontent.com/galkowskit/denofun/master/"
  }
}
```

### compose

```typescript
import compose from "denofun/lib/compose.ts";

function greet(name: string) {
    return `hello, ${name}!`;
}

function makeLoud(x) {
    return x.toUpperCase();
}

const greetLoudly = compose(makeLoud, greet);

greetLoudly('world'); // => HELLO, WORLD!
```

### curry

```typescript
import curry from "denofun/lib/curry.ts";

const greet = (name: string, age: number) => `hello, I'm Tomasz and I'm 26 years old`;
greet("Tomasz", 26); // => hello, I'm Tomasz and I'm 26 years old

const curriedGreet = curry(greet);
curriedGreet("Tomasz")(26) // => hello, I'm Tomasz and I'm 26 years old

// ===

const cars = [
    { make: 'Alfa Romeo', model: 'Giulia' },
    { make: 'Alfa Romeo', model: 'Stelvio' },
    { make: 'Ford', model: 'Mustang '},
    { make: 'Ford', model: 'Focus '},
    { make: 'Toyota', model: 'Mirai' },
    { make: 'Toyota', model: 'Yaris' },
    { make: 'Toyota', model: 'Supra' },
];

const filterCarsByMake = curry((make: string, car) => car.make === make);
const filterAlfas = filterCarsByMake('Alfa Romeo');
cars.filter(filterAlfas); // => [ { make: "Alfa Romeo", model: "Giulia" }, { make: "Alfa Romeo", model: "Stelvio" } ]
```

### filter

```typescript
import filter from "denofun/lib/filter.ts";

const cars = [
    { make: 'Alfa Romeo', model: 'Giulia' },
    { make: 'Alfa Romeo', model: 'Stelvio' },
    { make: 'Ford', model: 'Mustang '},
    { make: 'Ford', model: 'Focus '},
    { make: 'Toyota', model: 'Mirai' },
    { make: 'Toyota', model: 'Yaris' },
    { make: 'Toyota', model: 'Supra' },
];

filter(car => car.make === 'Ford', cars); // => [ { make: "Ford", model: "Mustang " }, { make: "Ford", model: "Focus " } ]
```

### head

```typescript
import head from "denofun/lib/head.ts";

const numbers = [1, 2, 3, 4, 5];
head(numbers); // => 1

// ===

head("hello world!"); // => "h"
```

### identity

```typescript
import identity from "denofun/lib/identity.ts";

const x = 5;
identity(x); // => 5
```

### map

```typescript
import map from "denofun/lib/map.ts";

const numbers = [1, 2, 3, 4, 5];

map(n => n * 2, numbers); // => [2, 4, 6, 8, 10]
```

### pipe

```typescript
import pipe from "denofun/lib/pipe.ts";

function greet(name: string) {
    return `hello, ${name}!`;
}

function makeLoud(x) {
    return x.toUpperCase();
}

const greetLoudly = pipe(greet, makeLoud);

greetLoudly('world'); // => HELLO, WORLD!
```

### reduce

```typescript
import reduce from "denofun/lib/reduce.ts";

const numbers = [1, 2, 3, 4, 5];

const add = (a, b) => a + b;
reduce(add, 0, numbers); // => 15
```

### reverse

```typescript
import reverse from "denofun/lib/reverse.ts";

reverse([1, 2, 3, 4, 5]); // => [5, 4, 3, 2, 1]

// ===

reverse("hello world!"); // => ["!dlrow olleh"]
```

### tail

```typescript
import tail from "denofun/lib/tail.ts";

tail([1, 2, 3, 4, 5]); // => [2, 3, 4, 5]

// ===

tail("hello world!"); // => "ello world!"
```

## Goals
- provide a good replacement for libraries like Ramda or Lodash with "native" Deno feel
- provide basic monads (Either, Maybe/Option)
- good, out-of-the-box typings

## Non-Goals
- get integrated into `deno_std` as `fun` module
- provide more monads (Future, Stream)
