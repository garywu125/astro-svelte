<!-- https://allround.io/articles/getting-started-with-svelte -->
<script>
	  import UseOnMount from './UseOnMount.svelte'
    async function fetchData() {
        const res = await fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });
        const data = await res.json();
        return data.joke;
    }

	
    let joke = fetchData();

    function handleClick() {
        joke = fetchData();
    }
</script>

<h2 style:color=green>
	use template #await block
</h2>
<button on:click={handleClick}>Get a random dad joke </button>

<h3>Here's a random dad joke:<i style:color=blue>fetch serval time using template #await block </h3>

<!-- await promise : a response from our async function fetchData() -->
{#await joke}
    <p>...waiting</p>
{:then joke}
    <p>{joke}</p>
{:catch error}
    <p style="color: red">Couldn't fetch a joke...</p>
{/await}

<h2 style:color=green>
	Use onMount lifecycle Hook
</h2>
<UseOnMount />