# Mockito

Let's make mock data easy!

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
  index: (current, loopIndex) => `${loopIndex + 1} 번째 Object`,
  name: mock.koreanName(),
  introduce: (current, loopIndex) =>
    `안녕하세요 제 이름은 ${current.name} 입니다!`,
  parents: {
    mother: {
      name: mock.koreanName(),
    },
  },
  parentIntroduce: (current, loopIndex) =>
    `저희 어머니 성함은 ${current.parents.mother.name} 입니다!`,
  profileImage: mock.image(200, 200),
  age: mock.integer(10, 20),
  address: mock.koreanAddress(),
  hobby: {
    id: mock.autoIncrement(),
    cost: mock.money(1000, 10000, 100),
  },
};

const result = generate(personSchema, 2);
console.dir(result, { depth: null });
```

the code above generate this.

```json
[
  {
    "id": 1,
    "index": "1 번째 Object",
    "name": "권민규",
    "introduce": "안녕하세요 제 이름은 권민규 입니다!",
    "parents": { "mother": { "name": "손선영" } },
    "parentIntroduce": "저희 어머니 성함은 손선영 입니다!",
    "profileImage": "https://picsum.photos/200/200?random=0",
    "age": 17,
    "address": "한울도 마루군 마카대로 11",
    "hobby": { "id": 1, "cost": 1000 }
  },
  {
    "id": 2,
    "index": "2 번째 Object",
    "name": "신정현",
    "introduce": "안녕하세요 제 이름은 신정현 입니다!",
    "parents": { "mother": { "name": "심해인" } },
    "parentIntroduce": "저희 어머니 성함은 심해인 입니다!",
    "profileImage": "https://picsum.photos/200/200?random=1",
    "age": 10,
    "address": "새나도 단미군 가카로 265",
    "hobby": { "id": 2, "cost": 7400 }
  }
]
```

# Maintainers

- [@airman5573](https://github.com/airman5573)
- [@uk960214](https://github.com/uk960214)
