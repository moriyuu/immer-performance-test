import produce from "immer";
import { baseState } from "./common";

function main(index) {
  //   console.log(index);
  //   console.log("baseState", baseState);
  //   console.log("-----");

  const nextState = produce(baseState, draft => {
    draft.name = "moriyuu2";
    draft.isEating = false;
    draft.eatingFood = undefined;
    draft.clothes[0].name = "onitsuka";
    draft.clothes[0].color = "white and yellow";
    draft.clothes[1].name = "the best pants";
    draft.clothes[1].color = "full black";
    draft.hogehoge = "uhauha";
    draft.foo = "piyo";
    draft.index = 2;
    draft.luckyNumber = 55;
    draft.iLike = "battera";
    draft.email = "(secret)";
  });

  //   console.log("nextState", nextState);
}

for (let i = 0; i < 100000; i++) {
  main(i);
}
