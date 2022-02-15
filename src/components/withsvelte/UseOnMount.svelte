<!-- https://allround.io/articles/getting-started-with-svelte -->
<script>
    import { onMount } from 'svelte'
    let joke = "loading joke..."
    onMount(async () => {
        const res = await fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });
        let json = await res.json();
        joke = json.joke
    })		 
</script>
<h3 >Here's a random dad joke:<i style:color=blue>fetch one time only using onMount lifecycle hook</i></h3>
<p>{joke}</p>