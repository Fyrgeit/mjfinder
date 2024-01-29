<script>
    import { db } from "/src/firebase";
    import {
        doc,
        getDoc,
        updateDoc,
        arrayUnion,
        arrayRemove,
        deleteDoc,
    } from "firebase/firestore";
    import { page } from "$app/stores";
    import { userInfoStore } from "/src/store.js";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { regionsAndCounties } from "/src/regionsAndCounties.js";

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));

    let uid = $page.params.uid;

    let refreshVar = false;

    onMount(GetClub);

    async function GetClub() {
        club = (await getDoc(doc(db, "clubs", uid))).data();

        formContent = {
            desc: club.desc,
            region: club.region,
            county: club.county,
        };
    }

    async function removeMember(memberRef) {
        await updateDoc(doc(db, "clubs", uid), {
            members: arrayRemove(memberRef),
        });

        await updateDoc(memberRef, {
            joinedClubs: arrayRemove(doc(db, "clubs", uid)),
        });

        await GetClub();
        refreshVar = !refreshVar;
    }
    
    async function addMember(memberRef) {
        await updateDoc(doc(db, "clubs", uid), {
            members: arrayUnion(memberRef),
            applicants: arrayRemove(memberRef),
        });
        
        await updateDoc(memberRef, {
            joinedClubs: arrayUnion(doc(db, "clubs", uid)),
            appliedClubs: arrayRemove(doc(db, "clubs", uid)),
        });
        
        await GetClub();
        refreshVar = !refreshVar;
    }
    
    async function denyMember(memberRef) {
        await updateDoc(doc(db, "clubs", uid), {
            applicants: arrayRemove(memberRef),
        });
        
        await updateDoc(memberRef, {
            appliedClubs: arrayRemove(doc(db, "clubs", uid)),
        });
        
        await GetClub();
        refreshVar = !refreshVar;
    }

    async function deleteClub() {
        await Promise.all(
            club.members.map(async (memberRef) => {
                await updateDoc(memberRef, {
                    joinedClubs: arrayRemove(doc(db, "clubs", uid)),
                });
            }),
        );

        await updateDoc(club.owner, {
            ownedClubs: arrayRemove(doc(db, "clubs", uid)),
        });

        await deleteDoc(doc(db, "clubs", uid));

        goto("/club");
    }

    async function saveChanges() {
        if (
            regionsAndCounties.counties.find(
                (c) => c.name === formContent.county,
            )?.regionCode !==
            regionsAndCounties.regions.find(
                (r) => r.name === formContent.region,
            )?.regionCode
        ) {
            throw new Error("dont match");
        }

        await updateDoc(doc(db, "clubs", uid), {
            desc: formContent.desc,
            region: formContent.region,
            county: formContent.county,
        });

        await GetClub();
    }

    async function getUser(memberRef) {
        return (await getDoc(memberRef)).data();
    }

    let formContent = {
        desc: "",
        region: "",
        county: "",
    };

    //$: console.log(formContent);

    $: same =
        JSON.stringify(formContent) ===
        JSON.stringify({
            desc: club?.desc,
            region: club?.region,
            county: club?.county,
        });

    $: invalid = formContent.region === "" || formContent.county === "";

    let club = null;
</script>

<h1>{club?.name}</h1>
<p>{club?.desc}</p>
<p class="toned-down">{club?.county}, {club?.region}</p>
<br />

<form on:submit|preventDefault={saveChanges}>
    <p>
        <label for="desc">Kort beskrivning</label>
        <input type="text" id="desc" bind:value={formContent.desc} />
    </p>
    <p>
        <label for="region">Plats (region)</label>
        <select
            id="region"
            bind:value={formContent.region}
            on:change={(formContent.county = "")}
        >
            {#each regionsAndCounties.regions as region}
                <option value={region.name}>{region.name}</option>
            {/each}
        </select>
    </p>
    <p>
        <label for="county">Plats (kommun)</label>
        <select id="county" bind:value={formContent.county}>
            {#each regionsAndCounties.counties.filter((c) => c.regionCode === regionsAndCounties.regions.find((r) => r.name === formContent.region)?.regionCode) as county}
                <option value={county.name}>{county.name}</option>
            {/each}
        </select>
    </p>
    <button disabled={same || invalid}>Spara ändringar</button>
</form>

{#key refreshVar}
    <h2>Medlemmar ({club?.members.length})</h2>
    {#if club?.members.length > 0}
        <ul>
            {#each club?.members as memberRef}
                <li>
                    {#await getUser(memberRef)}
                        <p>Laddar användare...</p>
                    {:then user}
                        <li>
                            <a href="/users/{memberRef.id}">{user.username}</a>
                            {#if memberRef.id != club?.owner.id}
                                <button
                                    on:click={removeMember(memberRef)}
                                    class="small">Sparka</button
                                >
                            {/if}
                        </li>
                    {:catch error}
                        <p>Error: {error}</p>
                    {/await}
                </li>
            {/each}
        </ul>
    {:else}
        <p>Inga medlemmar</p>
    {/if}

    <h2>Ansökande ({club?.applicants.length})</h2>
    {#if club?.applicants.length > 0}
        <ul>
            {#each club?.applicants as memberRef}
                <li>
                    {#await getUser(memberRef)}
                        <p>Laddar användare...</p>
                    {:then user}
                        <li>
                            <a href="/users/{memberRef.id}">{user.username}</a>

                            <button
                                on:click={addMember(memberRef)}
                                class="small">Godkänn</button
                            >
                            <button
                                on:click={denyMember(memberRef)}
                                class="small hollow">Neka</button
                            >
                        </li>
                    {:catch error}
                        <p>Error: {error}</p>
                    {/await}
                </li>
            {/each}
        </ul>
    {:else}
        <p>Inga ansökande</p>
    {/if}
{/key}

<button class="hollow" on:click={deleteClub}>Ta bort klubb</button>

<style>
    h2 {
        margin-top: 0.8rem;
    }
</style>
