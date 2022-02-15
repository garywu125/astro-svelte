<script>
    export let name;
	export let version;
	export let speed;
	export let website;
    export let lang;

    import Inner from './Inner.svelte'
    import Counter from './Counter.svelte'
    import Calculator from './Calculator.svelte'    
    import Things from './Things.svelte'
    import DynamicAttr from './Dynamics.svelte'    
    import Edittable from './Edittable.svelte';
    import Fetchstore from './Fetchstore.svelte'   
    import AudioList from './AudioList.svelte' 

    let string = `this string contains some <b><i><u>HTML!!!</u></i></b>`;
    let color = '#ff3e00';

</script>

<!-- link to other astro page -->
<section>
    <header>link to other astro page in <u>svelte component</u></header>
    <a href="/jokes">contact</a>
</section>

<section>
    <header>data passed from astro component</header>
    <DynamicAttr />
</section>    
<section>      
    <header>data passed from astro component</header>
    <ul>
        <li>name:{name}</li>
        <li>version:{version}</li>
        <li>speed:{speed}</li>
        <li>website:{website}</li>
        <li>language:{lang}</li>
    </ul>
</section>
<section>
    <header>inner component</header>
    <Inner />
</section>
<section>
    <header>counter component</header>
    <Counter>
        <p style="color:sandybrown">
            thanks paul, sorry it took a whole
            freaking year to release this
        </p>
        <!-- <p style:color >
            thanks paul, sorry it took a whole
            freaking year to release this
        </p> -->
    </Counter>    

</section>
<section>
    <header>Calculator component</header>
    <Calculator />
</section>
<!-- <section>
    <header>Calculator component 2</header>
    <Calculator2 />
</section> -->

<section >    
    <header>#each block</header>
    <Things data-tooltip="Tooltip"/>
</section>
<section >    
    <header>inner html content</header>
    <p>{@html string}</p>
</section>   
<section >       
    <header>pico tooltip</header>
    <p>Tooltip on a <a href="#" data-tooltip="Tooltip">link</a></p>
    <p>Tooltip on <em data-tooltip="Tooltip">inline element</em></p>
    <p><button data-tooltip="Tooltip">Tooltip on a button</button></p>
</section>
<section>
    <header>Simple CRUD Table in 50 LoC</header>
    <blockquote cite="https://svelte.dev/repl/e8443f6268eb430e8da6a122d5fe2f4d?version=3.45.0">
        Creating a simple CRUD table is too easy in Svelte. Exploding head Just bind:innerHTML and set contenteditable="true"        
        <hr>
        <a target="_blank" href="https://svelte.dev/repl/e8443f6268eb430e8da6a122d5fe2f4d?version=3.45.0">程式碼連結</a>
    </blockquote>
    <Edittable />
</section>    

<section>
    <header>Using Fetch to Consume APIs with Svelte</header>
    <blockquote cite="https://svelte.dev/repl/e8443f6268eb430e8da6a122d5fe2f4d?version=3.45.0">
        Fetching on Button Click in Svelte
        <hr>
        <a target="_blank" href="https://svelte.dev/repl/a6a33136735846a2aea991928db56d5a?version=3.46.0">程式碼連結</a>
    </blockquote>
    <Fetchstore />
</section>    


<section>
    <header>List of Audio</header>
    <blockquote cite="https://svelte.dev/repl/e8443f6268eb430e8da6a122d5fe2f4d?version=3.45.0">
        Fetching on Button Click in Svelte
        <hr>
        <a target="_blank" href="https://svelte.dev/repl/4f3c2fcfe1fc4a7b89b3857c9c4e4cee?version=3.46.2">程式碼連結</a>
    </blockquote>
    <AudioList client:visible/>
</section>    
<style>
	
   section>header {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
    
</style>