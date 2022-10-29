<script>
  import { roomStore } from "../stores/roomStore";
  import { createRoom, joinRoom, leaveRoom } from "../util/socket";
  let roomToJoin = "";
  const makeRoomUpper = () => {
    roomToJoin = roomToJoin.toUpperCase();
  };
</script>

<div>
  <h2>Tacosingulariteten</h2>
  {#if $roomStore === ""}
    <button on:click={() => createRoom()}>Lag ny singularitet</button><br />
    <p>Eller</p>
    <input
      type="text"
      bind:value={roomToJoin}
      on:input={makeRoomUpper}
      placeholder="Skriv inn singularitetskode"
    />
    <button on:click={() => joinRoom(roomToJoin)}
      >Bli med i en singularitet</button
    >
  {:else}
    <p>Singularitetskode: {$roomStore}</p>
    <button on:click={() => leaveRoom()}>Forlat singulariteten</button>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    font-size: large;
    padding: 5px;
    margin-bottom: 10px;
  }
  button {
    font-size: large;
  }
</style>
