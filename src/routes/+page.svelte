<script>
    import { userInfoStore } from "../store";

    let userInfo;
    userInfoStore.subscribe((val) => (userInfo = val));
</script>

<p>Hej och välkommen till MJ Finder</p>

<style>
</style>
