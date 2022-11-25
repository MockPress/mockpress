# integer

Generates a random integer in the given range.

```ts
function integer(min: number, max: number): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  num: mock.integer(0, 1000),
};

const result = generate(schema, 5);
/*
[ { num: 808 }, { num: 778 }, { num: 838 }, { num: 364 }, { num: 927 } ]
*/
```
