<script>
	import Keypad from './Keypad.svelte';

	let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}

</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
 <!-- component property binding (由上而下,雙向綁定) & component event (由下而上) -->
 <!-- custom event : submit -->
<Keypad bind:value={pin} on:submit={handleSubmit}/>
 
 