<script>
  import HiveMindControl from "./lib/HiveMindControl.svelte";
  import IngredientList from "./lib/IngredientList.svelte";
  import { personCount } from "./stores/inputStatesStore";
  import spinningTaco from "./assets/spinningTaco.gif";
  import tacoStill from "./assets/tacoStill.gif";
  import { roomStore } from "./stores/roomStore";
  import { writable } from "svelte/store";
  import Modal, { bind } from "svelte-simple-modal";
  const modal = writable(null);
  const showModal = () => modal.set(bind(HiveMindControl, {}));

  let y;
  $: smallHeader = y > 100;
</script>

<header class:smallHeader>
  <Modal show={$modal}>
    <img
      src={$roomStore ? spinningTaco : tacoStill}
      alt="Taco"
      on:click={showModal}
    />
  </Modal>
  <p>
    {$roomStore || smallHeader
      ? ""
      : "Trykk på tacoen for å bli med i singulariteten"}
  </p>
  <h1>Tacokalkulator 3</h1>
</header>
<main>
  <div>
    <h2>Hvor mange skal spise?</h2>
    <input type="number" bind:value={$personCount} />
  </div>
  <IngredientList />
</main>
<svelte:window bind:scrollY={y} />
