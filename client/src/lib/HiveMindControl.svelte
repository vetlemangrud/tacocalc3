<script>
  import { roomStore } from "../stores/roomStore";
  import { createRoom, joinRoom } from "../util/socket";
  let roomToJoin = "";
  const makeRoomUpper = () => {
    roomToJoin = roomToJoin.toUpperCase();
  };
</script>

<div>
  <h2>Tacolink</h2>
  {#if $roomStore === ""}
    <button on:click={() => createRoom()}>Create room</button>
    <input type="text" bind:value={roomToJoin} on:input={makeRoomUpper} />
    <button on:click={() => joinRoom(roomToJoin)}>Join room</button>
  {:else}
    <p>Room: {$roomStore}</p>
  {/if}
</div>
