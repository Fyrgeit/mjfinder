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

<div id="main">
    <aside>
            <form>
                <p>Region</p>
                {#each regionsAndCounties.regions as region}
                <p>
                    <input
                    type="checkbox"
                    id={region.regionCode}
                    bind:checked={selectedRegions[region.name]}
                    />
                    <label for={region.regionCode}>
                        {region.name}
                    </label>
                </p>
                {/each}
            </form>
            <form>
                <p>Skala</p>
                {#each gauges as gauge}
                <p>
                    <input
                    type="checkbox"
                    id={gauge}
                    bind:checked={selectedGauges[gauge]}
                    />
                    <label for={gauge}>
                        {gauge}
                    </label>
                </p>
                {/each}
            </form>
    </aside>

    <section>
        <header>
            <h1>Klubbar</h1>
        
            <a href="{base}/club/create" class="button">Skapa en klubb</a>
        </header>

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
    </section>
</div>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;
    }

    aside {
        display: flex;
        flex-direction: column;
    }

    #main {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.8rem;
    }

    form p {
        display: flex;
    }

    input {
        margin: 0.2rem;
    }

    ul {
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        flex-wrap: wrap;
    }

    li {
        flex-grow: 1;
    }
</style>
