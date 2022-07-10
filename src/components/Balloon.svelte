<script>
	export let row = 2;
    export let column = 2;

    export let visible = false;

    import { fly } from 'svelte/transition';

</script>

<style>
    .baloon {
        grid-column: var(--column);
        grid-row: var(--row);
        Place-self: center;
    }
</style>


{#if visible}
<div class="baloon" style="--column: {column}; --row: {row}" transition:fly="{{ y: 200, duration: 2000 }}">
    <img src="https://i.postimg.cc/vmwwSKTz/path830.png" alt="" >
</div>   
{/if}

