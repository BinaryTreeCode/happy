
<script>
	import Grid from './../src/components/Grid.svelte';
    import { fly } from 'svelte/transition';
    import { Confetti } from "svelte-confetti"

	let state = 0;

	// let state2 = ;

function click() {

  if (state == 1) {
    state = 0;
  } else {
    state = 0;
    state = 1;
  }
  console.log(state)
  // state2++;
}
</script>


<style>
    .contend {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    row-gap: 5rem;
    }
    button {
    grid-column: 3;
    grid-row: 2;
    Place-self: center;
}

.Grid {
    grid-column: 1 / 6;
    grid-row: 1 / 4;
}
.saludo {
    grid-column: 3;
    grid-row: 1;
    Place-self: end;

    font-size: 100px;
    text-align: center;

    position: relative;
    top: 180px;
}
</style>

<div class="contend">
  hola
  <div class="Grid">
    {#if 2 == 1}
        <div id="viewport" transition:fly="{{ y: 500, duration: 5000 }}">
                  <div class="saludo" transition:fly="{{ y: 400, duration: 4000 }}"> feliz cumpleaños</div>
            <svelte:component this={Grid}>hola</svelte:component>
        </div>
    {/if}
  </div>
  <button on:click={click}>
    {#if state == 1}
      <div>
        <Confetti />
     </div>
    {/if}
    party! 🎉
  </button>

</div>