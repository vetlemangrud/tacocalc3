import ingredients from "../ingredients";
import { writable } from "svelte/store";

export const personCount = writable(0);

const noneChecked = {};
Object.keys(ingredients).forEach((key) => {
  ingredients[key].forEach((ingredient) => {
    noneChecked[ingredient.entallsform] = false;
  });
});

export const checkedState = writable(noneChecked);
