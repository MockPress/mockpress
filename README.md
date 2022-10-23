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
import { mocks, generate } from "./index.js";

const personSchema = {
  id: mocks.autoIncrement(),
  name: mocks.koreanName(),
  introduce: (current, loopIndex) =>
    `안녕하세요 제 이름은 ${current.name} 입니다!`,
  parents: {
    motherName: mocks.koreanName("female"),
  },
  parentIntroduce: (current, loopIndex) =>
    `저희 어머니는 ${current.parents.motherName}입니다!`,
  userName: mocks.text(),
  profileImage: mocks.image(200, 200),
  age: mocks.integer(10, 20),
  address: mocks.koreanAddress(),
  hobby: {
    id: mocks.autoIncrement(),
    cost: mocks.money(1000, 10000, 100),
    userName: (current, loopIndex) => `${current.name} - ${loopIndex}`,
    secret: {
      content: (current, loopIndex) => current.age + loopIndex,
    },
  },
  other: (current, loopIndex) => current.hobby.cost + loopIndex,
};

const result = generate(personSchema);
console.dir(result, { depth: null });
```

# Maintainers

- [@airman5573](https://github.com/airman5573)
- [@uk960214](https://github.com/uk960214)
