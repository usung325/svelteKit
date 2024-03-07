<script>
    export let src;
    export let isFull = false;

    const fsToggle = () => {
       if (!isFull) return;
   
       if (isFull) {
         exitFullscreen();
       } else {
         requestFullscreen();
       }
   
       isFull = !isFull;
    };


</script>

<section class="max-w-screen max-h-full bg-slate-950">
    <div class="content-center items-center max-w-2" on:click={fsToggle}>
        <img src={src} alt="Fullscreen Image" />
    </div>
</section>