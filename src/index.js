import App from '../containers/App.svelte';

const app = new App({
    target: document.querySelector('main')
});

export default app;

var i = 2;
var x = 0;
var b = 1;
while (x < 128) {
    x = i ** 2;
    console.log(`${i} * 2 = ${x} (2^${i})  ${b}`)
    i++;   
    b++;
}