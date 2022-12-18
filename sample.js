import { mock, generate } from "./src/index.js";

const result = generate(
  {
    id: mock.autoIncrement(),
    name: mock.koreanName(),
    introduce: (current, loopIndex) => {
      return `Hello, my name is ${current.name}`;
    },
    hobby: {
      cost: mock.money(1000, 20000, 1000),
      introduce: (current, loopIndex) => {
        return `This hobby's cost is ${current.hobby.cost}`;
      },
    },
  },
  2
);

console.dir(result, { depth: null });
