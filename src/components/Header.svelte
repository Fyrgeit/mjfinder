<script>
    import { userInfoStore } from "/src/store.js";

    export const tabs = [
        { name: "Användare", path: "/users" },
        { name: "Klubbar", path: "/club" },
        { name: "Meddelande", path: "/chat" },
    ];

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));
</script>

<header>
    <a href="/">
        <img src="/logo.svg" alt="MJ finder" />
    </a>
    <nav>
        {#each tabs as tab}
            <a href={tab.path}>{tab.name}</a>
        {/each}
    </nav>
    <aside>
        {#if userInfo?.data}
            <a href="/profile" class="button">{userInfo.data.username}</a>
        {:else}
            <a href="/login" class="button hollow">Logga in</a>
            <a href="/signup" class="button">Skapa konto</a>
        {/if}
    </aside>
</header>

<style>
    img {
        height: 2.5rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        padding: 0.8rem;
        gap: 0.8rem;
        align-items: center;
        background-color: var(--color-background);
        box-shadow: var(--color-shadow) 0 0 0.8rem;
    }

    nav {
        flex-grow: 1;
        display: flex;
        gap: 0.8rem;
        align-items: center;
    }

    aside {
        display: flex;
        gap: 0.8rem;
    }
</style>
