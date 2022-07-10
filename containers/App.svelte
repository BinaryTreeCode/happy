
<script>
	import Grid from './../src/components/Grid.svelte';
    import { currentView } from '../src/store/store.js';
    import { fly } from 'svelte/transition';

	const views = [Grid]

	let viewportComponent = null
	let state;

	currentView.subscribe(value => {
		state = value;
	}); 


	function updateViewportComponent() {
		viewportComponent = Grid
	}
	updateViewportComponent()


    function toggleView() {
            currentView.update(n => n == 0 ? 1 : 0);
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
/* .npm {
    grid-column: 3;
    grid-row: 1;
    Place-self: end;
    font-size: 50px;
    text-align: center;
} */

</style>

<div class="contend">
    <button on:click={toggleView}>Toggle view</button>
    {#if viewportComponent == views[state]}
        <div id="viewport" on:outroend={updateViewportComponent} transition:fly="{{ y: 200, duration: 2000 }}">
            <svelte:component this={viewportComponent}>hola</svelte:component>
        </div>
    {/if}
    <!-- <div class="saludo"> feliz cumpleaños</div> -->
    <!-- <button on:click={change} >party! 🎉</button> -->
</div>








