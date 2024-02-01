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
        newMessage = "";

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
        {#await getChats(userInfo?.data.chats)}
            <p>Hämtar chattar...</p>
        {:then chats}
            {#each chats as chat}
                <button
                    on:click={async () => {
                        chosenChat = chat;
                        await handleChatChosen();
                    }}
                    class:hollow={chat.uid === chosenChat?.uid}
                >
                    {chat.data.name}
                </button>
            {/each}
        {/await}
        <button>Skapa ny chatt</button>
    </aside>
    <div id="chat">
        {#if chosenChat}
            <div id="title">
                <h1>{chosenChat.data.name}</h1>
            </div>
            <div id="messages">
                {#if messages}
                    {#key messages}
                        {#each messages as message}
                            <Message
                                {message}
                                user={chosenChat.cachedMembers[
                                    message.data.sender.id
                                ]}
                                currentUid={userInfo.uid}
                            />
                        {/each}
                    {/key}
                {/if}
            </div>
            <form on:submit={sendMessage(newMessage)}>
                <input
                    type="text"
                    id="message"
                    bind:value={newMessage}
                    autocomplete="off"
                />
                <button>Skicka</button>
            </form>
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
        height: calc(100% - 70.69px);
    }

    aside {
        padding: 0.8rem;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
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

    #chat {
        display: flex;
        flex-direction: column;
        max-height: 100%;
        justify-content: space-between;
    }

    #title {
        padding: 0.8rem;
    }

    #messages {
        margin: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        max-height: calc(100vh - 13.8rem);
        overflow-y: scroll;
    }

    form {
        box-shadow: none;
        border-radius: 0;
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
