import {
  autoIncrement,
  image,
  num,
  randomString,
  money,
} from "./mock-type.mjs";
import generate from "./generate.mjs";

const personSchema = {
  id: autoIncrement(),
  name: randomString(),
  introduce: (current, loop) => `안녕하세요 제 이름은 ${current.name} 입니다!`,
  profileImage: image(200, 200),
  age: num(10, 20),
  fingerCount: 5,
  hobby: {
    id: autoIncrement(),
    cost: money(1000, 10000, 100),
  },
  hobbyCost: (current, loop) => console.log(current.hobby),
};

const result = generate(personSchema);
