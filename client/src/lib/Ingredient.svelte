<script>
  export let ingredient;
  export let personer;
  $: antall = Math.ceil(ingredient.antall * personer);
</script>

<div>
  <p>
    <input type="checkbox" />
    {Math.floor(antall)}
    {antall === 1 ? ingredient.entallsform : ingredient.flertallsform}
  </p>
</div>
