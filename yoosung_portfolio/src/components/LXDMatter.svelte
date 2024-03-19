<!-- <script>
    import { createPhysicsEngine } from '$lib/matter.js';
    import { onMount } from 'svelte';
    import { Matter } from 'matter-js';
  
    // Initialize the physics engine when the component mounts
    onMount(() => {
        createPhysicsEngine();
    });

</script> -->
<script>
    import { onMount, onDestroy } from "svelte";
    import { createPhysicsEngine } from "$lib/matter.js";

    let canvasContainer;

    onMount(() => {
        createPhysicsEngine(canvasContainer);
        
    });
</script>

<div id="canvas-container" bind:this={canvasContainer}>
    <!-- The canvas will be appended here by Matter.js -->
</div>
