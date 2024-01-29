<script>
    import { db } from "/src/firebase.js";
    import { getDocs, collection } from "firebase/firestore";
    import { onMount } from "svelte";
    import ClubPreview from "../../components/ClubPreview.svelte";
    import { userInfoStore } from "../../store";

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));

    async function GetClubs() {
        let arr = [];

        (await getDocs(collection(db, "clubs"))).forEach((doc) => {
            arr.push({
                uid: doc.id,
                data: doc.data(),
            });
        });

        return arr;
    }
</script>

<h1>Alla klubbar</h1>

{#await GetClubs()}
    <p>Laddar klubbar...</p>
{:then clubs}
    {#if clubs.length > 0}
        <ul>
            {#each clubs as club}
                <li>
                    <ClubPreview {club} />
                </li>
            {/each}
        </ul>
    {:else}
        <p>Det finns inga klubbar :(</p>
    {/if}
{/await}

<br />
<a href="/club/create" class="button">Skapa en klubb</a>
