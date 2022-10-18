<script>
  import IngredientList from "./lib/IngredientList.svelte";
  let personer = 0;
</script>

<header>
  <h1>Tacokalkulator 3</h1>
</header>
<main>
  <div>
    <h2>Hvor mange skal spise?</h2>
    <input type="text" bind:value={personer} />
  </div>
  <IngredientList {personer} />
</main>
