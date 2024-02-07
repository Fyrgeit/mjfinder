<script>
    import { userInfoStore } from "../store";
    import { base } from "$app/paths";

    export let club;

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));

    $: joined = club.data.members.map((m) => m.id).includes(userInfo?.uid);
</script>

<a href="{base}/club/{club.uid}" class="blob hoverable">
    <header>
        <h2>{club.data.name}</h2>
        <div>
            {#if joined}
                <img src="{base}/check.svg" alt="" />
            {/if}
            <img src="{base}/group.svg" alt="" />
            <span>{club.data.members.length}</span>
        </div>
    </header>
    <section>
        <article>
            <p>{club.data.desc}</p>
            <p class="toned-down">{club.data.county}, {club.data.region}</p>
        </article>
        {#if club.data.gauges}
            <article class="tags">
                {#each club.data.gauges as gauge}
                    <span class="tag">
                        {gauge}
                    </span>
                {/each}
            </article>
        {/if}
    </section>
</a>

<style>
    img {
        height: 1rem;
    }

    div {
        display: flex;
        align-items: center;
    }

    header, section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.8rem;
    }

    .tags {
        display: flex;
        gap: 0.4rem;
    }
</style>
