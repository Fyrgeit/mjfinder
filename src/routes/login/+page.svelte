<script>
    import { auth } from "../../firebase.js";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";

    let email;
    let password;

    let errorMessage = "";

    async function Submit() {
        errorMessage = "";

        try {
            await signInWithEmailAndPassword(auth, email, password);
            goto(base + "/");
        } catch (error) {
            errorMessage = error.code;
        }
    }
</script>

<h1>Logga in här</h1>

<form on:submit|preventDefault={Submit}>
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
    <button>Logga in</button>
    {#if errorMessage}
        <p class="error">
            Error: {errorMessage}
        </p>
    {/if}
</form>

<p style="margin: 0.8rem 0rem 0.4rem;">Inget konto än?</p>
<a href="{base}/signup" class="button">Skapa konto</a>