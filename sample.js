import { mock, generate } from "./src/index.js";

const result = generate(
  {
    id: mock.autoIncrement(),
    introduce: (current, loopIndex) => {
      return `Hello, my name is ${current.hobby.introduce}`;
    },
    hobby: {
      introduce: (current, loopIndex) => {
        return `This hobby's cost is ${current.introduce}`;
      },
    },
  },
  2
);

console.dir(result, { depth: null });
