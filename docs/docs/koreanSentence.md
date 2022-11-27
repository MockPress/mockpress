# koreanSentence

Generates a random korean sentence

```ts
function koreanSentence(size?: "short" | "medium" | "long"): LoopFn;
```

## Example

```js
import { mock, generate } from "mockpress";

const schema = {
  sentence: mock.koreanSentence(),
};

const result = generate(schema, 2);
/*
[
  { sentence: '행정각부의 설치·조직과 직무범위는 법률로 정한다.' },
  {
    sentence: '국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.'
  }
]
*/
```
