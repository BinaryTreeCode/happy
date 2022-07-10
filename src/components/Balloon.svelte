<script>
	export let row = 2;
    export let column = 2;

    import { state } from '../store/store.js';
</script>

<style>
    .baloon {
        grid-column: var(--column);
        grid-row: var(--row);
        Place-self: center;
    }
</style>

<div class="baloon" style="--column: {column}; --row: {row}">
    <img src="https://i.postimg.cc/vmwwSKTz/path830.png" alt="" >
</div>   

