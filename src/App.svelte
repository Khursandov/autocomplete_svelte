<script>
	import { onMount } from 'svelte';
	import { getUsers } from "../store/index"; // import our pokemon api calls
    
  let users = [];
  
  let list = []

  let selected;

	onMount(async () => {
    const res = await getUsers();
    users = res;
  });

  const handleInput = () => {
		list = users.filter((user) => user.name.toLowerCase().indexOf(selected.toLowerCase()) > -1);
  }
  const checkInput = () => {
    if (!(users.find(x => x.name == selected))) selected = ''
  }
  const setValue = (payload) => {
    selected = payload.name
    list = []
  }
</script>

<main>
	<div>
    <ul>
      <li>
      <input class="w-100" type="text" bind:value={ selected } on:input="{ handleInput }" on:blur="{ checkInput }">
      </li>
      <ul class="drop-down">
        {#each list as user}
      <li on:click="{ setValue(user) }">
            { user.name }
          </li>
        {/each}
      </ul>
    </ul>
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

  .w-100 {
    width: 100%;
  }

  ul { 
    width: 250px;
  }
  ul li {
    list-style: none;
  }
  ul .drop-down {
    box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.1);
    padding: 0;
  }
  .drop-down li {
    padding: 5px;
  }
  .drop-down li:hover {
    background: silver;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>