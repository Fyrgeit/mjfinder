import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let userInfoStore = writable(
    (browser && JSON.parse(localStorage.getItem("userInfo"))) || null
);

if (browser) {
    userInfoStore.subscribe(val => browser && localStorage.setItem("userInfo", JSON.stringify(val)));
}