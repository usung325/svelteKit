<script>
    import HoverStickQs from "./HoverStickQs.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

    export let showOverlay = false;
    export let showOverlay2 = false;
    import { fade, fly } from 'svelte/transition';

    import { onMount } from 'svelte';
    import { createPhysicsEngine } from "$lib/matterHome.js";

    let canvasContainer;

    $: if (showOverlay2) {
    // Perform your action here
    console.log('Component mounted and showOverlay2 is TRUE');
    createPhysicsEngine(canvasContainer, 'init');
    }

    $: if (!showOverlay2) {
    // Perform your action here
    console.log('Component mounted and showOverlay2 is FALSE');
    // createPhysicsEngine(canvasContainer, 'clear');
    }

    let runTransition = false;
    onMount(() => runTransition = true);

   let shown = false;
    onMount(() => {
		setTimeout(() => {console.log('waiting'); shown = true}, 1000);
	});

    let isMouseOver = false;
    let isMouseOver2 = false;
</script>



<SectionWrapper>
    <body class="overscroll-behavior-x: auto;">
        
        
        <div id = 'main'>
            {#if showOverlay2}
                <div class="fixed inset-0 z-[-100] my-0" id="canvas-container" bind:this={canvasContainer}>
                </div>
            {/if}
            
            <!-- <div class="md:flex md:flex-row md:justify-center">
                <div class=" md:min-w-[512px] md:w-full md:max-w-xl">
                    <div class="flex flex-col justify-start max-w-xl px-8 py-24 "> -->
                        {#if runTransition}
                        <div in:fade = {{duration:1000, delay:0}} class="mb-4 z-20 max-w-[90%] ">
                            <h1 class="inline-block text-slate-700 "> My name is <a target ="blank" href="https://www.instagram.com/yoosung_design/" class="hover:text-blue-500"> <span style="font-family: Arizona Bold">Yoo Sung Lee</span></a> 
                                and I'm a brand designer studying <a target ="blank"  class="hover:text-blue-500" href="https://design.cmu.edu/"><span style="font-family: Arizona Bold">Design @CMU</span></a>. I bring ideas to life through
                                <span role="tooltip" style="font-family: Arizona Bold" on:mouseover={() => (isMouseOver = true)} on:mouseout={() => (isMouseOver = false)}> 
                                    
                                    {#if isMouseOver}
                                        <span class="text-blue-500">art</span>
                                    {:else}
                                    <i class="fa-solid fa-pencil"></i> 
                                    {/if}  
                                        
                                    </span> and 
                                    
                                <span role="tooltip" style="font-family: Arizona Bold"  on:mouseover={() => (isMouseOver2 = true)} on:mouseout={() => (isMouseOver2 = false)} class=""> 
                                    
                                    {#if isMouseOver2}
                                        <span class="text-blue-500">code.</span>
                                    {:else}
                                    <i class="fa-solid fa-bug"></i> <i class="fa-solid fa-terminal"></i> .
                                    {/if}  
                                     </span> </h1>








                            <div class="flex flex-row py-5 justify-between">
                                <div>
                                    <a href="/design" class=" hover:text-blue-500 "> <i class="fa-solid fa-pen-nib fa-2xs"></i> Design </a>
                                </div>
                                <div>
                                    <a href="/illustration" class=" hover:text-blue-500 "> <i class="fa-solid fa-pen fa-2xs"></i> Illustration </a> 
                                </div>
                                <div>
                                    <a href="/photography" class=" hover:text-blue-500 "> <i class="fa-solid fa-camera fa-2xs"></i> Photography </a>
                                </div>
                                <div>
                                    <a href="/code" class=" hover:text-blue-500"> <i class="fa-solid fa-code fa-2xs"></i> Code </a>
                                </div>
                            </div>
                            
                        </div>
                            





                        

                        <div class="flex flex-col gap-8 pb-8"> 
                            <!-- this is content -->
                            <div class="flex flex-col gap-6">
                                <div class="contentBlock">
                                    <div class="flex flex-col gap-2">

                                        <span in:fade = {{ duration:1000, delay:200}}>
                                        <div in:fly  = {{ y: 200 ,duration:800, delay:100 }} class="flex flex-row justify-center bg-gray-50 rounded-sm md:-mx-24 p-0.5" >










                                            
                                            <a href="/projects/stickq" class="hover:z-10" on:mouseenter={() => showOverlay = true} on:mouseleave={() => showOverlay = false}>    
                                            <img alt='stickq thumbnail' width="2400" height="1260" class="object-contain rounded-sm" src="/stickq.png" ></a>
<!--                                             
                                            <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <HoverStickQs />
                                            </div> -->
                                            {#if showOverlay && shown}
                                                <div class="fixed inset-0 z-1 my-0" transition:fade={{ delay: 0, duration: 300 }}>
                                                    <HoverStickQs />
                                                </div>
                                            {/if}
                                        </div>
                                        </span>

                                        

                                        <div in:fly = {{ y: 200 ,duration:800, delay:200 }} class="flex flex-col px-2">
                                            <div class="flex flex-row justify-between md:-mx-24">
                                                <p href="/projects"> StickQ's </p>
                                                <p class="text-gray-400"> Illustration, Branding, UIUX</p>
                                            </div>
                                            <p class="text-gray-400 md:-mx-24">2023</p>
    
                                        </div>
                                    </div>
    
                                </div>

                                <span in:fade = {{ duration:1000, delay:200}}>
                                <div in:fly = {{ y: 200, duration: 1000, delay:200}} class="contentBlock">
                                    <div class="flex flex-col gap-2">
                                        <div class="flex flex-row justify-center bg-gray-50 rounded-sm md:-mx-24 p-0.5">

                                            <a href="/projects/lxd" on:mouseenter={() => showOverlay2 = true} on:mouseleave={() => showOverlay2 = false}> 

                                                <img alt='neek thumbnail' width="2400" height="1260" class="object-contain rounded-sm" src="/lxd.png"> </a>
                                        </div>
                                            
                                        <div class="flex flex-col px-2">
                                            <div class="flex flex-row justify-between md:-mx-24">
                                                <p> LXD Conference Rebrand </p>
                                                <p class="text-gray-400"> Branding</p>
                                            </div>
                                            <p class="text-gray-400 md:-mx-24">2023</p>
    
                                        </div>
                                    </div>
    
                                </div>
                                </span>
    
                                <span in:fade = {{ duration:1000, delay:200}}>
                                <div in:fly = {{ y: 200, duration: 1000, delay:200}} class="contentBlock">
                                    <div class="flex flex-col gap-2">
                                        <div class="flex flex-row justify-center bg-gray-50 rounded-sm md:-mx-24 p-0.5">
                                            <a href="/projects/neek"> <img alt='neek thumbnail' width="2400" height="1260" class="object-contain rounded-sm" src="/g.png"> </a>
    
                                        </div>
                                        <div class="flex flex-col px-2">
                                            <div class="flex flex-row justify-between md:-mx-24">
                                                <p> NEEK Branding </p>
                                                <p class="text-gray-400"> Illustration</p>
                                            </div>
                                            <p class="text-gray-400 md:-mx-24">2023</p>
    
                                        </div>
                                    </div>
    
                                </div>
                                </span>
                            </div>
    
    
    
    
                         </div>
                        {/if}
                    <!-- </div>
                </div>
            </div> -->
            
        </div>
    
        
    </body>

</SectionWrapper>
