<script>
  import ingredients from "../ingredients";
  import Ingredient from "./Ingredient.svelte";
</script>

<div>
  <h2>Ingredienser</h2>
  {#each ingredients.main as ingredient}
    <Ingredient {ingredient} />
  {/each}
  <h2>Guac</h2>
  {#each ingredients.guacamole as ingredient}
    <Ingredient {ingredient} />
  {/each}
</div>
