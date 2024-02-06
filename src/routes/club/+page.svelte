<script>
    import { db } from "/src/firebase.js";
    import { getDocs, collection } from "firebase/firestore";
    import { onMount } from "svelte";
    import ClubPreview from "../../components/ClubPreview.svelte";
    import { userInfoStore } from "../../store";
    import { regionsAndCounties } from "/src/regionsAndCounties.js";
    import { gauges } from "/src/gauges.js";
    import { base } from "$app/paths";

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));

    onMount(GetClubs);

    async function GetClubs() {
        let arr = [];

        (await getDocs(collection(db, "clubs"))).forEach((doc) => {
            arr.push({
                uid: doc.id,
                data: doc.data(),
            });
        });

        clubs = arr;
    }

    let clubs = null;

    let selectedRegions = {};
    let selectedGauges = {};
    $: noSelectedRegions = !Object.values(selectedRegions).some((v) => v);
    $: noSelectedGauges = !Object.values(selectedGauges).some((v) => v);

    $: filteredClubs = clubs?.filter((club) => {
        const gaugesArr = [];
        Object.keys(selectedGauges).forEach((gaugeKey) => {
            if (selectedGauges[gaugeKey]) {
                gaugesArr.push(gaugeKey);
            }
        });

        return (
            (noSelectedRegions || selectedRegions[club?.data?.region]) &&
            (noSelectedGauges ||
                (club?.data?.gauges || []).some((g) => gaugesArr.includes(g)))
        );
    });
</script>

<header>
    <h1>Klubbar</h1>

    <a href="{base}/club/create" class="button">Skapa en klubb</a>
</header>

<form>
    {#each regionsAndCounties.regions as region}
        <p>
            <label for={region.regionCode}>
                {region.name}
            </label>
            <input
                type="checkbox"
                id={region.regionCode}
                bind:checked={selectedRegions[region.name]}
            />
        </p>
    {/each}
</form>
<form>
    {#each gauges as gauge}
        <p>
            <label for={gauge}>
                {gauge}
            </label>
            <input
                type="checkbox"
                id={gauge}
                bind:checked={selectedGauges[gauge]}
            />
        </p>
    {/each}
</form>

{#if filteredClubs}
    <p>{filteredClubs?.length} klubbar matchar ditt urval</p>
    <ul>
        {#each filteredClubs as club}
            <li>
                <ClubPreview {club} />
            </li>
        {/each}
    </ul>
{:else}
    <p>Laddar klubbar...</p>
{/if}

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: 0.8rem;
    }

    form p {
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        align-items: center;
    }

    form p label {
        flex-grow: 1;
    }

    input {
        margin: 0.2rem;
    }
</style>
