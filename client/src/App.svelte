<script>
  import HiveMindControl from "./lib/HiveMindControl.svelte";
  import IngredientList from "./lib/IngredientList.svelte";
  import { personCount } from "./stores/inputStatesStore";
</script>

<header>
  <h1>Tacokalkulator 3</h1>
  <HiveMindControl />
</header>
<main>
  <div>
    <h2>Hvor mange skal spise?</h2>
    <input type="text" bind:value={$personCount} />
  </div>
  <IngredientList />
</main>
