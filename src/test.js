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
