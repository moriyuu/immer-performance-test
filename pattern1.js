import produce from "immer";
import { baseState } from "./common";

function main(index) {
  //   console.log(index);
  //   console.log("baseState", baseState);
  //   console.log("-----");

  const nextState = produce(baseState, draft => {
    return {
      ...baseState,
      name: "moriyuu2",
      isEating: false,
      eatingFood: undefined,
      clothes: [
        {
          name: "onitsuka",
          color: "white and yellow"
        },
        {
          name: "the best pants",
          color: "full black"
        }
      ],
      hogehoge: "uhauha",
      foo: "piyo",
      index: 2,
      luckyNumber: 55,
      iLike: "battera",
      email: "(secret)"
    };
  });

  //   console.log("nextState", nextState);
}

for (let i = 0; i < 100000; i++) {
  main(i);
}
