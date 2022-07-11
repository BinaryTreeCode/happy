<script>
  import Grid from "./../src/components/Grid.svelte";
  import { fly } from "svelte/transition";
  import { Confetti } from "svelte-confetti";
  import { tick } from 'svelte'


  const music = new Audio(
    "https://binarytreecode.github.io/happy/src/assets/Cumplea%C3%B1os.mp3"
  );

  let state = 0;

  let state2 = 0;
  

  async function click() {
    music.play();
    // music.volume = 0.1;

    state++;

    state2 = 0;
	  await tick();
	  state2 = 1;
    // state2 = state2 === 0 ? 1 : 0;
    console.log(state2);
  }
</script>

<div class="contend">
  <div class="Grid">
    {#if state >= 1}
      <div id="viewport" transition:fly={{ y: 500, duration: 5000 }}>
        <div class="saludo" transition:fly={{ y: 400, duration: 4000 }}>
          Feliz Cumpleaños
        </div>
        <svelte:component this={Grid}>hola</svelte:component>
      </div>
    {/if}
  </div>
  <button on:click={click}>
    {#if state >= 1}
      <div>
        <div
          style="
            position: fixed;
            top: -50px;
            left: 0;
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            overflow: hidden;
            pointer-events: none;"
        >
          <Confetti
            x={[-5, 5]}
            y={[0, 0.1]}
            delay={[500, 2000]}
            infinite
            duration="5000"
            amount="200"
            fallDistance="100vh"
          />
        </div>
      </div>
    {/if}
    {#if state2 === 1}
      <Confetti destroyOnComplete={false} x={[-2, 3]} y={[2.7, 0]} amount=300 size=4 delay={[0, 250]} fallDistance=100px/>
    {/if}
    party! 🎉
  </button>
</div>

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
    background-color: #FFBEFF; /* Green */
    grid-column: 3;
    grid-row: 2;
    place-self: center;

    border: none;
    color: #F1FFF1;

    padding: 12px 26px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;

    border-radius: 8px;
    border: 2px solid #00bffff8; /* Green */
  }
  button:hover {
    background-color: #00BFFF; /* Green */
    border: 4px solid #FFBEFF; /* Green */
    color: #FFBEFF; /* Green */

    cursor: pointer;
  }
  .Grid {
    grid-column: 1 / 6;
    grid-row: 1 / 4;
  }

  @import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Roboto:ital,wght@1,100&display=swap');
  .saludo {
    grid-column: 3;
    grid-row: 1;
    place-self: end;

    font-size: 100px;
    text-align: center;

    position: relative;
    top: 180px;

    font-family: 'DotGothic16', sans-serif;
    font-family: 'Roboto', sans-serif;
  }
</style>
