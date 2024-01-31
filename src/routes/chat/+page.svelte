<script>
    import { doc, getDoc, getDocs, collection } from "firebase/firestore";
    import { db } from "../../firebase";
    import { userInfoStore } from "../../store";

    let userInfo;
    userInfoStore.subscribe((val) => {
        userInfo = val;
    });

    async function getChats(chatRefs) {
        const chats = await Promise.all(
            (chatRefs || []).map(async (chatRef) => {
                const result = await getDoc(doc(db, "chats", chatRef));

                if (result.data()) {
                    return {
                        uid: result.id,
                        data: result.data(),
                    };
                } else {
                    throw new Error("Kunde inte hitta chatt");
                }
            }),
        );

        chosenChat = chats[0];
        return chats;
    }

    async function getMessages(uid) {
        const ref = collection(db, "chats", uid, "messages");

        let messages = [];

        (await getDocs(ref)).forEach((doc) => {
            messages.push({
                uid: doc.id,
                data: doc.data(),
            });
        });

        return messages;
    }

    async function getUser(userRef) {
        const doc = await getDoc(userRef);

        return {
            uid: doc.id,
            data: await doc.data(),
        };
    }

    let chosenChat = null;
</script>

<main>
    <aside>
        <h2>Chattar</h2>
        <br />
        {#await getChats(userInfo?.data.chats)}
            <p>Hämtar chattar...</p>
        {:then chats}
            {#each chats as chat}
                <button on:click={() => (chosenChat = chat)}>
                    {chat.data.name}
                </button>
            {/each}
        {/await}
    </aside>
    <div>
        {#if chosenChat}
            {#await getMessages(chosenChat.uid)}
                <p>Hämtar chattar...</p>
            {:then messages}
                {#each messages as message}
                    {#await getUser(message.data.sender)}
                        <p>Hämtar meddelande...</p>
                    {:then user}
                        <p class="toned-down">
                            {user.data.username}
                        </p>
                        <p>
                            {message.data.content}
                        </p>
                    {/await}
                {/each}
            {/await}
        {:else}
            <p>Välj en chatt från listan till vänster</p>
        {/if}
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: auto 1fr;
        padding: 0;
        min-height: calc(100% - 70.69px);
    }

    aside {
        padding: 0.8rem;
        position: relative;
    }

    aside::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -2;
        box-shadow: var(--color-shadow) 0 0 0.8rem;
    }
</style>
