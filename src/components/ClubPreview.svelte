<script>
    import { userInfoStore } from "../store";

    export let club;

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));

    $: joined = club.data.members.map((m) => m.id).includes(userInfo?.uid);
</script>

<a href="/club/{club.uid}" class="blob hoverable">
    <header>
        <h2>{club.data.name}</h2>
        <div>
            {#if joined}
                <img src="/check.svg" alt="" />
            {/if}
            <img src="/group.svg" alt="" />
            <span>{club.data.members.length}</span>
        </div>
    </header>
    <p>{club.data.desc}</p>
    <p class="toned-down">{club.data.county}, {club.data.region}</p>
</a>

<style>
    img {
        height: 1rem;
    }

    div {
        display: flex;
        align-items: center;
    }

    header {
        display: flex;
        justify-content: space-between;
        gap: 0.8rem;
    }
</style>
