<script>
    export let message;
    export let user;
    export let currentUid;

    $: time = new Date(message.data.time.seconds * 1000).toTimeString();
</script>

<p class:own={currentUid === user?.uid}>
    <a class="toned-down" href="/users/{user?.uid}">
        {user?.data?.username}
    </a>
    <span class="message">
        {message.data.content}
    </span>
    <span class="toned-down">
        {time}
    </span>
</p>

<style>
    p {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .own {
        flex-direction: row-reverse;
    }

    .own .message {
        background-color: var(--color-primary);
    }

    .message {
        width: fit-content;
        padding: 0.4rem 0.6rem;
        box-shadow: var(--color-shadow) 0 0 0.4rem;
        border-radius: 1rem;
    }
</style>
