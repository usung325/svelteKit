<script>
    // import { showOverlay } from './Home.svelte';
    import { fade, fly } from "svelte/transition";

    ///////////////// ATTEMPT AT PRELOADING IMAGE BEFORE HOVER ///////////////////////
    export const prerender = true;

    /** @type {import('./$types').PageLoad} */
    export async function load({ fetch }) {
        const res = await fetch("/my-server-route.json");
        return await res.json();

        //////////////////////////////////////////////////////////////////////////////////
    }
    let width = window.innerWidth;
    let widthW = ((window.innerWidth - 700) / 2) - 10;
    let ratio = Math.floor((widthW / width) * 100)
    console.log(ratio);
</script>

<main class="flex flex-row h-full px-2 items-center">
    <div class="space-y-10">
        <img in:fade={{delay: 100}}  alt="profile" src="/mielgo2.gif" class="w-[35%]" />
        <img in:fade={{delay: 400}}  alt="profile" src="/mielgo2.gif" class="w-[35%]" />
        <img in:fade={{delay: 600}}  alt="profile" src="/mielgo2.gif" class="w-[35%]" />
    </div>

    <div class="space-y-10">
        <!-- <div class="space-y-2 flex flex-col "> -->
            <img in:fade={{delay: 300}}  alt="profile" src="/mielgo2.gif" class="w-[35%] ml-auto" />
            <img in:fade={{delay: 500}}  alt="profile" src="/mielgo2.gif" class="w-[35%] ml-auto" />
            <img in:fade={{delay: 200}}  alt="profile" src="/mielgo2.gif" class="w-[35%] ml-auto" />
        <!-- </div> -->
    </div>
</main>
