<script>
    import { doc, getDoc } from "firebase/firestore";
    import { db } from "../../../firebase";
    import { page } from "$app/stores"
    import { onMount } from "svelte";

    let uid = $page.params.uid;

    onMount(GetProfile);

    async function GetProfile() {
        profile = (await getDoc(doc(db, "users", uid))).data();
    }

    let profile = {};
</script>

<h1>{profile.username}</h1>
<p>{profile.description}</p>
