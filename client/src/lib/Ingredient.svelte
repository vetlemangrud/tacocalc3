<script>
  import { personCount, checkedState } from "../stores/inputStatesStore";
  export let ingredient;
  $: antall = Math.ceil(ingredient.antall * $personCount);
</script>

<div>
  <input type="checkbox" bind:checked={$checkedState[ingredient.entallsform]} />
  {Math.floor(antall) || 0}
  <span
    on:click={() =>
      checkedState.update((state) => {
        state[ingredient.entallsform] = !state[ingredient.entallsform];
        return state;
      })}
    >{antall === 1 ? ingredient.entallsform : ingredient.flertallsform}</span
  >
</div>

<style>
  div {
    padding: 0.5rem;
    font-size: large;
  }
  input {
    transform: scale(1.5);
  }
</style>
