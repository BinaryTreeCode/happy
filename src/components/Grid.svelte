<script>
    import Balloon from "./Balloon.svelte";
    import { currentView } from "../store/store.js";

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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    row-gap: 5rem;
    }
    .saludo {
    grid-column: 3;
    grid-row: 1;
    Place-self: end;

    font-size: 50px;
    text-align: center;
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

    <div class="saludo"> feliz cumpleaños</div>
</div>

