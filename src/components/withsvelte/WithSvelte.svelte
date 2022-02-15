<script>

	import Beranda from "./Beranda.svelte";
	import Profile from "./Profile.svelte";
	import Joke from "./Joke.svelte"
	export let menu = 1;
</script>

<style>
	ul#menu li{
		display : inline;
	}
</style>

<ul id="menu">
	<li><a href="/jokes/" on:click|preventDefault={() => (menu = 1)}>Beranda</a></li> |
	<li><a href="/jokes/" on:click|preventDefault={() => (menu = 2)}>Profile</a></li> |
	<li><a href="/jokes/" on:click|preventDefault={() => (menu = 3)}>Joke</a></li>
</ul>

{#if menu === 1}
<Beranda />
{:else if menu === 2}
<Profile />
{:else if menu === 3}
<Joke />
{:else}
<h1>
	Page Not Found
</h1>
{/if}


