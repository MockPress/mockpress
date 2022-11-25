# image

Generates a random Image of the given size.
Utilizes the images created by https://picsum.photos/ .

```ts
function image(width: number, height: number): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  profileUrl: mock.image(200, 200),
};

const result = generate(schema, 5);
/*
[
  { profileUrl: 'https://picsum.photos/200/200?random=0' },
  { profileUrl: 'https://picsum.photos/200/200?random=1' },
  { profileUrl: 'https://picsum.photos/200/200?random=2' },
  { profileUrl: 'https://picsum.photos/200/200?random=3' },
  { profileUrl: 'https://picsum.photos/200/200?random=4' }
]
*/
```
