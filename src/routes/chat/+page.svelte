<script>
    import {
        doc,
        getDoc,
        getDocs,
        collection,
        addDoc,
        Timestamp,
    } from "firebase/firestore";
    import { db } from "../../firebase";
    import { userInfoStore } from "../../store";
    import Message from "../../components/Message.svelte";
    import { onMount } from "svelte";

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
        handleChatChosen();
        return chats;
    }

    async function getMessages(uid) {
        const ref = collection(db, "chats", uid, "messages");

        messages = [];

        (await getDocs(ref)).forEach((doc) => {
            messages = [
                ...messages,
                {
                    uid: doc.id,
                    data: doc.data(),
                },
            ];
        });

        messages.sort((a, b) => a.data.time.seconds - b.data.time.seconds);
    }

    async function getMember(memberRef) {
        const userDoc = await getDoc(memberRef);

        chosenChat.cachedMembers[memberRef.id] = {
            uid: memberRef.id,
            data: await userDoc.data(),
        };
    }

    async function sendMessage(message) {
        const collectionRef = collection(
            db,
            "chats",
            chosenChat.uid,
            "messages",
        );

        const messageData = {
            content: message,
            sender: doc(db, "users", userInfo.uid),
            time: Timestamp.now(),
        };

        const docRef = await addDoc(collectionRef, messageData);

        messages = [
            ...messages,
            {
                uid: docRef.id,
                data: messageData,
            },
        ];

        newMessage = "";
    }

    async function handleChatChosen() {
        if (chosenChat) {
            chosenChat.cachedMembers = {};
            for (let member of chosenChat.data.members) {
                await getMember(member);
            }

            getMessages(chosenChat.uid);
        }
    }

    let chosenChat = null;
    let newMessage = "";

    let messages = [];
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
    <div id="chat">
        <div id="messages">
            {#if chosenChat}
                {#key messages}
                    {#each messages as message}
                        {console.log(chosenChat.cachedMembers)}
                        {console.log(JSON.stringify(chosenChat.cachedMembers))}
                        {console.log(message.data.sender.id)}
                        {console.log(chosenChat.cachedMembers[message.data.sender.id])}
                        <Message
                            {message}
                            user={chosenChat.cachedMembers[message.data.sender.id]}
                            currentUid={userInfo.uid}
                        />
                    {/each}
                {/key}
            {:else}
                <p>Välj en chatt från listan till vänster</p>
            {/if}
        </div>
        <form on:submit={sendMessage(newMessage)}>
            <input type="text" id="message" bind:value={newMessage} />
            <button>Skicka</button>
        </form>
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

    #messages {
        margin: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    #chat {
        display: grid;
        grid-template-rows: 1fr auto;
    }

    form {
        box-shadow: none;
        border-radius: 0;
        border-top: 1px black solid;
        width: auto;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.4rem;
    }

    form input {
        margin: 0;
    }

    form button {
        padding: 0.4rem;
    }
</style>
