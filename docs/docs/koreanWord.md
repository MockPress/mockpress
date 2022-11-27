# koreanWord

Generates a random korean word

```ts
function koreanWord(): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  word: mock.koreanWord(),
};

const result = generate(schema, 5);
/*
[
  { word: '지방자치단체' },
  { word: '재직중' },
  { word: '내용' },
  { word: '인력' },
  { word: '항구적' }
]
*/
```
