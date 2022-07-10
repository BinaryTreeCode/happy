<script>
    import Button from "./Button.svelte";
    // import { component } from "./store/store.js";

    // export let number = 0;

    export let img = 'url("https://imagen/y5g7vnrh")';
    export let url = "/";

    export let column = 1;
    export let row = 1;

    export let type = "contaminacion";
    export let title = "del aire";
    export let about = "La contaminación del aire se produce por pequeñas partículas o productos gaseosos que implican riesgo de daño o molestia para los seres vivos en el ambiente (procesos industriales, automóviles, etc.)."
    


</script>

<style>
    .card {
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 200px 210px 80px;
    grid-template-areas: "image" "text" "button";
    column-gap:1rem;
    grid-column: var(--column);
    grid-row: var(--row);
    

    font-family: roboto;
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0, 0.9);
    text-align: center;

    transition: 0.5s ease;
    cursor: zoom-in;
}

.card-image {
    grid-area: image;
    background-image: var(--image); 
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    background-size: cover;
}

.card-text {
    grid-area: text;
    margin: 25px;
    color: gray;
}

.card-text .type {
    color: rgb(red, green, blue);
    font-size: 15px;
}

.card-text h2 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 20px;
}


.card-text p{
    color: grey;
    font-size: 15px;
    font-weight: 300;
}


.card-button {
    grid-area: button; 
    display: grid;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: rgb(131, 123, 126);
}

.card:hover {
    transform: scale(1.2);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.6);
}
</style>

<div class="card" style="--row:{row}, --column:{column}" >
    <div class="card-image"  style="--image:{img}"></div>
    <div class="card-text">
        <span class="type">{type}</span>
        <h2>{title}</h2>
        <p>{about}</p>
    </div>
    <div class="card-button">
        <Button title={title} url={url} />
    </div>    
</div>

