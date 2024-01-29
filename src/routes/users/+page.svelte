<script>
    import { onMount } from "svelte";
    import { db } from "../../firebase.js";
    import { collection, getDocs } from "firebase/firestore";

    onMount(getUsers);

    async function getUsers() {
        (await getDocs(collection(db, "users"))).forEach((doc) => {
            users.push({
                uid: doc.id,
                username: doc.data().username,
            });
        });

        users = users;
    }

    export let users = [];
</script>

{#if users.length === 0}
    <p>Laddar användare...</p>
{:else}
    <p>{users.length} användare</p>
    <ul>
        {#each users as user}
            <li>
                <a href="/users/{user.uid}" class="blob hoverable">{user.username}</a>
            </li>
        {/each}
    </ul>
{/if}

<style>
</style>
