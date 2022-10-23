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
import { mock, generate } from "./index.js";

const personSchema = {
  id: mock.autoIncrement(),
  name: mock.koreanName(),
  introduce: (current, loopIndex) =>
    `안녕하세요 제 이름은 ${current.name} 입니다!`,
  parents: {
    motherName: mock.koreanName("female"),
  },
  parentIntroduce: (current, loopIndex) =>
    `저희 어머니는 ${current.parents.motherName}입니다!`,
  userName: mock.text(),
  profileImage: mock.image(200, 200),
  age: mock.integer(10, 20),
  address: mock.koreanAddress(),
  hobby: {
    id: mock.autoIncrement(),
    cost: mock.money(1000, 10000, 100),
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
