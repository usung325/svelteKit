<script>
    // import { showOverlay } from './Home.svelte';
    export const prerender = true;

    /** @type {import('./$types').PageLoad} */
    export async function load({ fetch }) {
        const res = await fetch("/my-server-route.json");
        return await res.json();
    }
</script>

<img alt="profile" src="/stickq/hoverStickq.png" />
