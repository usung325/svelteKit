<script>
    import HoverStickQs from "./HoverStickQs.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

    export let showOverlay = false;
    import { fade } from 'svelte/transition';

</script>



<SectionWrapper>
    <body class="overscroll-behavior-x: auto;">
        
        <div id = 'main'>
            
            <!-- <div class="md:flex md:flex-row md:justify-center">
                <div class=" md:min-w-[512px] md:w-full md:max-w-xl">
                    <div class="flex flex-col justify-start max-w-xl px-8 py-24 "> -->

                        <div class="mb-4 z-20">
                            <p class="inline-block text-slate-600"><span class="text-xl text-black"> Hello! </span> <br> My name is <a target ="blank" href="https://www.instagram.com/yoosung_design/" class="text-blue-600">Yoo Sung Lee</a> and I'm a brand designer studying <a target ="blank"  class="text-blue-600" href="https://design.cmu.edu/">Design @CMU</a>. I bring ideas to life through illustration and code. </p>
                            <div class="grid py-1">
                                <a href="/design" class="text-sm text-blue-600 "> <i class="fa-solid fa-pen-nib fa-2xs"></i> Design </a>
                                <a href="/illustration" class="text-sm text-blue-600 "> <i class="fa-solid fa-pen fa-2xs"></i> Illustration </a> 
                                <a href="/photography" class="text-sm text-blue-600 "> <i class="fa-solid fa-camera fa-2xs"></i> Photography </a>
                                <a href="/code" class="text-sm text-blue-600 "> <i class="fa-solid fa-code fa-2xs"></i> Code </a>
                            </div>
                            
                        </div>
                            


                        <div class="flex flex-col gap-8 pb-8"> 
                            <!-- this is content -->
                            <div class="flex flex-col gap-6">
                                <div class="contentBlock">
                                    <div class="flex flex-col gap-2">
                                        <div class="flex flex-row justify-center bg-gray-50 rounded-sm md:-mx-24 p-0.5" >


                                            <a href="/projects/stickq" class="hover:z-10" on:mouseenter={() => showOverlay = true} on:mouseleave={() => showOverlay = false}>    
                                            <img alt='stickq thumbnail' width="2400" height="1260" class="object-contain rounded-sm" src="/stickq.png" ></a>
<!--                                             
                                            <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <HoverStickQs />
                                            </div> -->
                                            {#if showOverlay}
                                                <div class="fixed inset-0 z-1 -my-16 " transition:fade={{ delay: 0, duration: 300 }}>
                                                    <HoverStickQs />
                                                </div>
                                            {/if}


                                        </div>
                                        <div class="flex flex-col px-2">
                                            <div class="flex flex-row justify-between md:-mx-24">
                                                <p href="/projects"> StickQ's </p>
                                                <p class="text-gray-400"> Illustration, Branding, UIUX</p>
                                            </div>
                                            <p class="text-gray-400 md:-mx-24">2023</p>
    
                                        </div>
                                    </div>
    
                                </div>
    
                                <div class="contentBlock">
                                    <div class="flex flex-col gap-2">
                                        <div class="flex flex-row justify-center bg-gray-50 rounded-sm md:-mx-24 p-0.5">
                                            <a href="/projects/lxd"> <img alt='neek thumbnail' width="2400" height="1260" class="object-contain rounded-sm" src="/lxd.png"> </a>
    
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
    
                                <div class="contentBlock">
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
                            </div>
    
    
    
    
                         </div>
                    <!-- </div>
                </div>
            </div> -->
            
        </div>
    
        
    </body>

</SectionWrapper>
