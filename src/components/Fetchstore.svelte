<script>
	import { getNewCount, count, isFetching } from '../utils/store';
</script>

<button on:click={getNewCount}>
	Click to Load Data {#if $isFetching}🌀{/if}
</button>

<pre>
{$count}
</pre>