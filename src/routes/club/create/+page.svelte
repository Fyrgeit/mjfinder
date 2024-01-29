<script>
    import { userInfoStore } from "/src/store.js";
    import { db } from "/src/firebase";
    import { collection, addDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
    import { regionsAndCounties } from "/src/regionsAndCounties.js";
    import { goto } from "$app/navigation";

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));

    let formContent = {
        name: "",
        desc: "",
        region: "",
        county: "",
    };

    async function Submit() {
        formContent.applicants = [];
        formContent.members = [doc(db, "users", userInfo.uid)];
        formContent.owner = doc(db, "users", userInfo.uid);
        const ref = await addDoc(collection(db, "clubs"), formContent);

        await updateDoc(doc(db, "users", userInfo.uid), {
            joinedClubs: arrayUnion(ref),
        });
        await updateDoc(doc(db, "users", userInfo.uid), {
            ownedClubs: arrayUnion(ref),
        });

        goto("/club");
    }
</script>

<h1>Skapa en klubb</h1>

{#if userInfo}
    <form on:submit|preventDefault={Submit}>
        <p>
            <label for="name">Klubbnamn</label>
            <input
            type="text"
            id="name"
            bind:value={formContent.name}
            />
        </p>
        <p>
            <label for="desc">Kort beskrivning</label>
            <input
                type="text"
                id="desc"
                bind:value={formContent.desc}
            />
        </p>
        <p>
            <label for="region">Plats (region)</label>
            <select id="region" bind:value={formContent.region}>
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
        <button>Skapa klubb</button>
    </form>
{:else}
    <p>Då måste vara inloggad för att skapa en klubb</p>
{/if}
