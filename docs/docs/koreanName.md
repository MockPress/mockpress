# koreanName

Generates a random Korean name.
The options consist of popular male and female baby names between 2008-2021.

```ts
function koreanName(): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  name: mock.koreanName(),
};

const result = generate(schema, 5);
/*
[
  { name: '박성민' },
  { name: '조재희' },
  { name: '구승희' },
  { name: '엄시후' },
  { name: '윤채아' }
]
*/
```
