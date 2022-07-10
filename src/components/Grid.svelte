<script>
    import Balloon from "./Balloon.svelte";
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
            column: 4    
        }
    ];

</script>

<style>

.contend {  
    position: static;;  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    row-gap: 5rem;
    }


/* Button {
    grid-column: 3;
    grid-row: 2;
    Place-self: center;
} */
</style>
 
<div class="contend">
    {#each positions as position}
    <Balloon {...position} />
    {/each}

</div>

