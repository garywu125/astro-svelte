<script>
	let counter=1
	let name = 'world';	
	let user={}	
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
    }

    async function fetchPost(id) {
    const apiURL = `${baseUrl}/posts/${id}`;
    return fetchJSON(apiURL);
    }

    async function fetchUser(id) {
    const apiURL = `${baseUrl}/users/${id}`;
    return fetchJSON(apiURL);
    }

    async function main(id) {
        try {
            const postId = id;
            const post = await fetchPost(postId);
            
            const userId = post.userId;
            user = await fetchUser(userId);		
            counter=counter+1
        }  catch (e) {
        console.log("error:",e)
        }
    }     
 	
</script>

<h1>Hello {name.toUpperCase()}!</h1>
{#if counter >1 }
    <h1>{user.username}</h1> 
{/if}


<button on:click={main(counter)}>
	Click {counter} {counter === 1 ? 'time' : 'times'}
	change value
</button>