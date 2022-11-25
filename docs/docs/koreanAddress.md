# koreanAddress

Generates a random South Korean address.
Generated address follow the basic rules of the South Korean address system.
However, generated addresses are fake and do not exist in the real world.

```ts
function koreanAddress(): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  address: mock.koreanAddress(),
};

const result = generate(schema, 5);
/*
[
  { address: '가람시 남동구 카라대로 391' },
  { address: '나래도 도담시 파자로 775' },
  { address: '소담도 헤윰시 자바대로 321' },
  { address: '소담도 초아군 마타로 312' },
  { address: '달구시 서구 바하대로 966' }
]
*/
```
