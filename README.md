# JSON Generator

Let's make json mock data easy!

# Features

- easy to use
- generate random(fake) data
- support korean name/address
- support custom data generator
- access to other data in current loop

# Quick Start

```javascript
import { autoIncrement, image, num, randomWord, money } from "./mock-type.mjs";
import generate from "./generate.mjs";

const personSchema = {
  id: autoIncrement(5),
  name: randomWord(),
  introduce: (current, loopIndex) => `Hello my name is ${current.name}`,
  profileImage: image(200, 200),
  age: num(10, 20),
  hobby: {
    id: autoIncrement(),
    cost: money(1000, 10000, 100),
    hobbyUser: {
      userName: (current, loopIndex) => current.name,
    },
  },
  hobbyCost: (current, loopIndex) => current.hobby.cost,
};

const result = generate(personSchema);
console.dir(result, { depth: null });
```

# Maintainers

- [@airman5573](https://github.com/airman5573)
- [@uk960214](https://github.com/uk960214)
