---
slug: /
title: Quick Start
sidebar_position: 1
---

# Quick Start

## Install

```
npm install mockpress
```

You can use this with CJS or ESM

## Example

```javascript
import { mock, generate } from "mockpress";

const personSchema = {
  id: mock.autoIncrement(),
  index: (current, loopIndex) => `${loopIndex + 1} 번째 Object`,
  name: mock.koreanName(),
  introduce: (current, loopIndex) =>
    `안녕하세요 제 이름은 ${current.name} 입니다!`,
  parents: {
    mother: {
      name: mock.koreanName("female"),
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
/*
[
  {
    id: 1,
    index: "1 번째 Object",
    name: "주동준",
    introduce: "안녕하세요 제 이름은 주동준 입니다!",
    parents: { mother: { name: "문다윤" } },
    parentIntroduce: "저희 어머니 성함은 문다윤 입니다!",
    profileImage: "https://picsum.photos/200/200?random=0",
    age: 18,
    address: "은가람시 동구 바하대로 991",
    hobby: { id: 1, cost: 1000 },
  },
  {
    id: 2,
    index: "2 번째 Object",
    name: "양가빈",
    introduce: "안녕하세요 제 이름은 양가빈 입니다!",
    parents: { mother: { name: "지송현" } },
    parentIntroduce: "저희 어머니 성함은 지송현 입니다!",
    profileImage: "https://picsum.photos/200/200?random=1",
    age: 14,
    address: "은가람시 남구 가나로 126",
    hobby: { id: 2, cost: 6700 },
  },
];
*/
```
