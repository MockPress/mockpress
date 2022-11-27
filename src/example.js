import { mock, generate } from "./index";

const personSchema = {
  id: mock.autoIncrement(),
  index: (current, loopIndex) => `${loopIndex + 1} 번째 Object`,
  name: mock.koreanName(),
  introduce: mock.koreanSentence(),
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
    name: mock.koreanWord(),
    cost: mock.money(1000, 10000, 100),
  },
};

const result = generate(personSchema, 2);
console.dir(result, { depth: null });
