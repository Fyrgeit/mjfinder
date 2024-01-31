<script>
    import { userInfoStore } from "../store";

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));
</script>

<main>
    <p>Hej och välkommen till MJ Finder</p>
</main>

<style>
</style>
