# text

Generates a text of a length in the given range.

```ts
function text(min: number, max: number): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  title: mock.text(),
};

const result = generate(schema, 5);
/*
[
  { title: 'iCeW' },
  { title: 'Xgu9-g7' },
  { title: '4uXecXd' },
  { title: '39gU' },
  { title: 'wLcBZ' }
]
*/
```
