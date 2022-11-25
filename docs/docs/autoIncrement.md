# autoIncrement

Generates an auto incremented index, based on the loopIndex of the generator.

```ts
function autoIncrement(startPoint: number): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  id: mock.autoIncrement(),
};

const result = generate(schema, 5);
/*
  [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
*/
```
