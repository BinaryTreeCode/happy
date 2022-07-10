
<script>
	import Grid from '../src/components/Grid.svelte';
	import Card from '../src/components/Card.svelte';
    import Balloon from "../src/components/Balloon.svelte";

    let positions = [
        {
            row: 1,
            column: 1,
        },
        {
            row: 1,
            column: 5,
        },
        {
            row: 2,
            column: 2,
        },
        {
            row: 2,
            colum: 4    
        },
    ]

    import confetti from 'canvas-confetti/confetti';

    function party() {
        confetti();
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
</style>


<h1>{oro}</h1>
<button on:click={click} >Click</button>
<div class="contend">
    {#each positions as position}
        <Balloon {...position}/>
    {/each}
</div>





