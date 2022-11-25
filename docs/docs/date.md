# date

Generates a random date in the range of the given parameters.

```ts
function date(startDate: Date, endDate: Date): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const today = new Date();
const nextYear = new Date(today.getFullYear() + 1);
const schema = {
  createdAt: mock.date(today, nextYear),
};

const result = generate(schema, 5);
/*
[
  { createdAt: 2023-01-18T06:29:44.451Z },
  { createdAt: 2023-04-02T10:22:22.563Z },
  { createdAt: 2023-03-19T07:23:30.985Z },
  { createdAt: 2023-02-22T10:18:50.296Z },
  { createdAt: 2023-06-12T04:27:24.579Z }
]
*/
```
