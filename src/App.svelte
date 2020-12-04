<script>
	import { onMount } from 'svelte';
	import { getUsers } from "../store/index"; // import our pokemon api calls
    
  let users = [];
  let selected = '';

	onMount(async () => {
    const res = await getUsers();
    users = res;
  });

  const handleInput = (event) => {
    console.log(event)
		selected = users.find((user) => event.target.value === user.value);
	}
</script>

<main>
	<div>
    { selected }
    <input list=text_editors>
    <button>▼</button>
    <datalist id="text_editors">
    <select multiple size=8 on:input="{handleInput}">
        {#each users as user}
          <option value={ user.id }>
            { user.name }
          </option>
        {/each}
      </select>
    </datalist>
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>