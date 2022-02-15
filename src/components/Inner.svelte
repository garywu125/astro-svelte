<script>    
    let country="tAiwand"    
</script>

<p>{country.split('')
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase(),
    )
    .join('')} is a democratic country</p>

<p>{country[0].toUpperCase()+country.slice(1).toLowerCase()} is a democratic country</p>   
<h5>Tooltip inside client component ⤵️</h5>
<p>Tooltip  on a <a href="#" data-tooltip="Tooltip">link</a></p>
<!-- <p>Tooltip  on <em data-tooltip="Tooltip">inline element</em></p> -->
<p>Tooltip  on <b data-tooltip="Tooltip"><i>inline element</i></b></p>
   

<style>
	p {
		color: rgb(16, 144, 153);
		font-family: 'Comic Sans MS', cursive;
		font-size: 1em;
	}
</style>