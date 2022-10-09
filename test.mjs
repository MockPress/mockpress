import {
  autoIncrement,
  image,
  num,
  randomString,
  money,
  koreanName,
} from "./mock-type.mjs";
import generate from "./generate.mjs";

const personSchema = {
  id: autoIncrement(5),
  name: koreanName(),
  introduce: (current, loopIndex) =>
    `안녕하세요 제 이름은 ${current.name} 입니다!`,
  parents: {
    motherName: koreanName("female"),
  },
  parentIntroduce: (current, loopIndex) =>
    `저희 어머니는 ${current.parents.motherName}입니다!`,
  userName: randomString(),
  profileImage: image(200, 200),
  age: num(10, 20),
  hobby: {
    id: autoIncrement(),
    cost: money(1000, 10000, 100),
    userName: (current, loopIndex) => `${current.name} - ${loopIndex}`,
    secondName: {
      mySecondName: (current, loopIndex) => current.age + loopIndex,
    },
  },
  hobbyCost: (current, loopIndex) => current.hobby.cost + loopIndex,
};

const result = generate(personSchema);
console.dir(result, { depth: null });
