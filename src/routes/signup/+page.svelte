<script>
    import { auth, db } from "../../firebase.js";
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { doc, setDoc } from "firebase/firestore";
    import { goto } from "$app/navigation";

    let username;
    let email;
    let password;

    async function Submit() {
        try {
            let cred = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", cred.user.uid), {
                username: username,
            });
            goto("/");
        } catch (error) {
            console.error(error.code);
        }
    }
</script>

<h1>Skapa konto här</h1>

<form on:submit|preventDefault={Submit}>
    <p>
        <label for="input-username">Användarnamn</label>
        <input
        type="text"
        id="input-username"
        autocomplete="username"
        bind:value={username}
        />
    </p>
    <p>
        <label for="input-email">E-mailadress</label>
        <input
        type="email"
        id="input-email"
        autocomplete="email"
        bind:value={email}
        />
    </p>
    <p>
        <label for="input-password">Lösenord</label>
        <input
        type="password"
        id="input-password"
        autocomplete="current-password"
        bind:value={password}
        />
    </p>
    <button>Skapa</button>
</form>
