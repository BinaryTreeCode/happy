
<script>
	import Grid from './../src/components/Grid.svelte';
    import { currentView } from '../src/components/store/store.js';
    import { fly } from 'svelte/transition';
    import { Confetti } from "svelte-confetti"

	const views = [Grid]

	let viewportComponent = null
	let state;

	let state2 = 0;

	currentView.subscribe(value => {
		state = value;
	}); 


	function updateViewportComponent() {
		viewportComponent = Grid
	}
	updateViewportComponent()


    function toggleView() {
            currentView.update(n => n == 0 ? 1 : 0);
            state2 = state2 == 0 ? 1 : 0;
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
  <div class="Grid">
    {#if viewportComponent == views[state]}
        <div id="viewport" on:outroend={updateViewportComponent} transition:fly="{{ y: 500, duration: 5000 }}">
                  <div class="saludo" transition:fly="{{ y: 400, duration: 4000 }}"> feliz cumpleaños</div>
            <svelte:component this={viewportComponent}>hola</svelte:component>
        </div>
    {/if}
  </div>
  <button on:click={toggleView}>
    {#if state == 1}
    <Confetti />
    {/if}
    party! 🎉
  </button>

</div>