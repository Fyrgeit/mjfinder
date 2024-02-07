<script>
    import { doc, getDoc, updateDoc } from "firebase/firestore";
    import { db, auth } from "../../firebase";
    import { goto } from "$app/navigation";
    import { userInfoStore } from "../../store";
    import ClubPreview from "../../components/ClubPreview.svelte";
    import { base } from "$app/paths";

    let userInfo;
    let newDescription;

    userInfoStore.subscribe((val) => {
        userInfo = val;
        newDescription = val?.data.description;
    });
    
    $: same = newDescription == userInfo?.data.description;

    async function saveInfo() {
        let ref = doc(db, "users", userInfo.uid);
        await updateDoc(ref, { description: newDescription });
        userInfo.data.description = newDescription;
    }

    async function handleSignOut() {
        await auth.signOut();
        goto(base + "/");
    }

    async function getClubs(clubs) {
        return await Promise.all(
            (clubs || []).map(async (clubRef) => {
                const result = await getDoc(clubRef);

                if (result.data()) {
                    return {
                        uid: result.id,
                        data: result.data(),
                    };
                } else {
                    throw new Error("Kunde inte hitta klubb");
                }
            }),
        );
    }
</script>

<h1>Din profil</h1>

{#if userInfo}
    <form on:submit={saveInfo}>
        <p>
            Användarnamn
            <span>
                {userInfo.data.username}
            </span>
        </p>
        <p>
            E-mailadress
            <span>
                {userInfo.email}
            </span>
        </p>
        <p>
            <label for="input-description">Beskrivning</label>
            <textarea
                id="input-description"
                cols="40"
                rows="3"
                bind:value={newDescription}
            ></textarea>
        </p>
        <button disabled={same}>Spara ändringar</button>
    </form>

    <h2>Klubbar du har ansökt till</h2>
    {#await getClubs(userInfo.data.appliedClubs)}
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
            <p>Du har inte ansökt någon klubb</p>
        {/if}
    {:catch error}
        <p>Error: {error}</p>
    {/await}

    <h2>Klubbar du är medlem i</h2>
    {#await getClubs(userInfo.data.joinedClubs)}
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
            <p>Du är inte medlem i någon klubb</p>
        {/if}
    {:catch error}
        <p>Error: {error}</p>
    {/await}

    <h2>Klubbar du äger</h2>
    {#await getClubs(userInfo.data.ownedClubs)}
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
            <p>Du äger inte någon klubb</p>
        {/if}
    {:catch error}
        <p>Error: {error}</p>
    {/await}

    <button class="hollow" on:click={handleSignOut}>Logga ut</button>
{:else}
    <p>Du måste vara inloggad för att se din profil</p>
{/if}

<style>
    h2 {
        margin-top: 0.8rem;
    }
</style>
