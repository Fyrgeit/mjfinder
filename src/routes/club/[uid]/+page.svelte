<script>
    import {
        doc,
        getDoc,
        updateDoc,
        arrayUnion,
        arrayRemove,
    } from "firebase/firestore";
    import { db, updateUserData } from "../../../firebase";
    import { userInfoStore } from "../../../store";
    import { page } from "$app/stores";

    let clubUid = $page.params.uid;

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));

    let refreshVar = false;

    async function getClub() {
        const club = (await getDoc(doc(db, "clubs", clubUid))).data();

        if (!club) {
            throw new Error("Kunde inte hitta klubb");
        } else {
            return club;
        }
    }

    async function leaveClub() {
        await updateDoc(doc(db, "clubs", clubUid), {
            members: arrayRemove(doc(db, "users", userInfo.uid)),
        });

        await updateDoc(doc(db, "users", userInfo.uid), {
            joinedClubs: arrayRemove(doc(db, "clubs", clubUid)),
        });

        updateUserData(userInfo.uid);

        refreshVar = !refreshVar;
    }

    async function apply() {
        await updateDoc(doc(db, "clubs", clubUid), {
            applicants: arrayUnion(doc(db, "users", userInfo.uid)),
        });

        await updateDoc(doc(db, "users", userInfo.uid), {
            appliedClubs: arrayUnion(doc(db, "clubs", clubUid)),
        });

        updateUserData(userInfo.uid);

        refreshVar = !refreshVar;
    }

    async function unapply() {
        await updateDoc(doc(db, "clubs", clubUid), {
            applicants: arrayRemove(doc(db, "users", userInfo.uid)),
        });

        await updateDoc(doc(db, "users", userInfo.uid), {
            appliedClubs: arrayRemove(doc(db, "clubs", clubUid)),
        });

        updateUserData(userInfo.uid);

        refreshVar = !refreshVar;
    }

    async function getUser(memberRef) {
        return (await getDoc(memberRef)).data();
    }
</script>

{#key refreshVar}
    {#await getClub()}
        <p>Laddar klubb...</p>
    {:then club}
        <h1>{club.name}</h1>
        <p>{club.desc}</p>
        <p class="toned-down">{club.county}, {club.region}</p>
        <br />

        {#if userInfo}
            {#if club.owner.id === userInfo?.uid}
                <a href="/club/{clubUid}/manage" class="button">Hantera klubb</a
                >
            {:else if club.members?.map((m) => m.id).includes(userInfo?.uid)}
                <button class="hollow" on:click={leaveClub}>Lämna klubb</button>
            {:else if club.applicants?.map((m) => m.id).includes(userInfo?.uid)}
                <button class="hollow" on:click={unapply}
                    >Dra tillbaka ansökan</button
                >
            {:else}
                <button on:click={apply}>Skicka ansökan om medlemsskap</button>
            {/if}
        {:else}
            <p>Logga in eller skapa konto för att gå med i klubbar</p>
        {/if}

        <h2>Medlemmar ({club.members.length})</h2>
        {#if club.members.length > 0}
            <ul>
                {#each club.members as memberRef}
                    <li>
                        {#await getUser(memberRef)}
                            <a href="/users/{memberRef.id}">Hämtar användare...</a>
                        {:then user}
                            <a href="/users/{memberRef.id}">{user.username}</a>
                        {/await}
                    </li>
                {/each}
            </ul>
        {:else}
            <p>Inga medlemmar :(</p>
        {/if}

        <h2>Ansökande ({club.applicants.length})</h2>
        {#if club.applicants.length > 0}
            <ul>
                {#each club.applicants as applicantRef}
                    <li>
                        {#await getUser(applicantRef)}
                            <a href="/users/{applicantRef.id}">Hämtar användare...</a>
                        {:then user}
                            <a href="/users/{applicantRef.id}">{user.username}</a>
                        {/await}
                    </li>
                {/each}
            </ul>
        {:else}
            <p>Inga ansökande :(</p>
        {/if}
    {:catch error}
        <p>{error}</p>
    {/await}
{/key}

<style>
    h2 {
        margin-top: 0.8rem;
    }
</style>
