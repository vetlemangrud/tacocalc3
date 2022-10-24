<script>
  import { personCount, checkedState } from "../stores/inputStatesStore";
  export let ingredient;
  $: antall = Math.ceil(ingredient.antall * $personCount);
</script>

<div>
  <p>
    <input
      type="checkbox"
      bind:checked={$checkedState[ingredient.entallsform]}
    />
    {Math.floor(antall) || 0}
    {antall === 1 ? ingredient.entallsform : ingredient.flertallsform}
  </p>
</div>
