# money

Generates a random amount of money in the given range.

```ts
function money(min: number, max: number, interval: number): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  cost: mock.money(),
};

const result = generate(schema, 5);
/*
[
  { cost: 0 },
  { cost: 3000 },
  { cost: 7000 },
  { cost: 5000 },
  { cost: 7000 }
]
*/
```
