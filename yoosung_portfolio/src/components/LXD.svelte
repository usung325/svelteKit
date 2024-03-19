<script>
    import FootSpace from "./FootSpace.svelte";
    import FsContainer from "./FsContainer.svelte";
    import ImageWrapper from "./ImageWrapper.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

    let stickers = ['cat', 'dog', 'frog4', 'mouse'];
    import isFull from "./FsContainer.svelte";
    // import LxdMatter from "./LXDMatter.svelte";

    // let iter = Array.from({ length: 5 }, (_, i) => i + 1);
    let iter = ['iter1', 'iter2', 'iter3', 'iter4'];
    let iter2 = ['iter1.1', 'iter2.1', 'iter3.1', 'iter4.1'];
    let iter3 = ['iter1.2', 'iter2.2', 'iter3.2', 'iter4.2'];

    
</script>

<SectionWrapper>
    <div id = 'stickq'>
        <!-- <div class="md:flex md:flex-row md:justify-center"> -->
            <!-- <div class=" md:min-w-[512px] md:w-full md:max-w-xl"> -->
                <!-- <div class="flex flex-col justify-start max-w-xl px-8 py-24 "> -->
                    <!-- <div class="flex flex-col gap-8 pb-8"> -->
                        <div class="z-10 col-start-1 row-start-1 mt-8 mb-3">
                            <a href="/" class="text-slate-200 text-xl hover:text-yellow-400"> <i class="fa-solid fa-house-chimney"></i> </a>
                        </div>

                        <div class="flex flex-col gap-8 pb-8">
                            
                            <h1 class="text-gray-600" ><span class="" style="font-family:Arizona Bold;"> LXD Conference </span> </h1>  

                                <div class='inline-flex text-slate-500 -mt-7 space-x-5'>
                                    <p class=" "> <i class="fa-regular fa-calendar"></i> Spring 2023 [5 weeks]</p>
                                    <p><i class="fa-solid fa-user-group"></i> 1 </p>
                                    
                                </div>
                                <div class='flex flex-col text-slate-500 -mt-8'>
                                    <p> <i class="fa-solid fa-toolbox"></i> Photoshop, Illustrator, Figma, AfterEffects </p>
                                    <p> <i class="fa-solid fa-wand-magic-sparkles"></i>  Event Identity, Branding,
                                        Logo Design, Motion Design </p>
                                </div>

                        
                            
                        <ImageWrapper>
                            <img  alt="profile" src="/lxd/posterMock2.png" width="2400" height="1260" class="rounded-sm"/>  
                        </ImageWrapper>

                            <h1><a target="blank" alt="nfc forum" href="https://lxd.org/" class="text-white bg-yellow-400 p-0.5 rounded-lg hover:bg-blue-500 hover:transition">Learning Experience Design Conference</a> is an annual design conference that hosts workshops and speaker events for educators around the world. It emphasizes themes like 'play' and 'empathy' in act of learning.</h1>


                            
                            <p> Following the premise of "redesign a conference identity", I decided to explore ways to visualize and encapsulate the creative spirit of LXD. </p>


                            <div class="-mb-6 mt-6 ">
                                <h2 class=""><i class="fa-solid fa-spinner"></i> Process</h2>
                            </div>
                            <p> Following the first pass, I created 4 different shape directions for the logos and type system.</p>
                            <div class="grid grid-cols-2 p-1 gap-1 bg-slate-200">
                                {#each iter as fileName}
                                    <img alt="sketchbook page" src="/lxd/{fileName}.png">
                                {/each}
                            </div>


                            <p> Afterwards, I applied the original color pallette of LXDCON to each design system.</p>
                            <div class="grid grid-cols-2 p-1 gap-1 bg-slate-200">
                                {#each iter2 as fileName}
                                    <img alt="sketchbook page" src="/lxd/{fileName}.png">
                                {/each}
                            </div>

                            <p> Being modular, I explored iconography and image treatment that could occur in each iteration.</p>
                            <div class="grid grid-cols-2 p-1 gap-1 bg-slate-200">
                                {#each iter3 as fileName}
                                    <img alt="sketchbook page" src="/lxd/{fileName}.png">
                                {/each}
                            </div>

                            <div class="grid grid-cols-2 gap-4 items-center">
                                <img alt="gif" src="/lxd/lxdLogo3.gif" />
                                <img alt="gif" src="/lxd/lxdLogo2.gif" />
                            </div>


                            <img alt="poster" src="/lxd/lxdPoster.png"  />



                            <ImageWrapper>
                                <img alt="website" src="/lxd/lxdWeb.png" />
                            </ImageWrapper>

                            <ImageWrapper>
                                <img alt="mockups" src="/lxd/posterMock1.png" />
                            </ImageWrapper>
                            <ImageWrapper>
                                <img alt="mockups" src="/lxd/posterMock2.png" />
                            </ImageWrapper>


                            <div class="-mb-6 mt-6">
                                <h2 class=""><i class="fa-solid fa-mug-hot"></i> Takeaways</h2>
                            </div>
                            

                            <p> This project has helped me realize in the power of iteration. Working with an idea but not being married to it helped me realize the project's fullest potential. I also realized the neatness that modular design is, and hope to incorporate more into my projects.</p>



                            <!-- <div class="flex -space-x-14 justify-center">
                                    {#each stickers as sticker}
                                        <img alt="other" src="/stickq/{sticker}.png" class="hover:transition ease-in-out hover:scale-110  duration-300 hover:-translate-y-10" width=130em/>
                                    {/each}
                            </div> -->
                            <div class="max-w-[50%]">
                                <!-- <LxdMatter /> -->
                            </div>
                        
                            <!-- <p class="">That's it!</p> -->
                            <div>
                                <p><a href="/" class=" hover:text-yellow-400"><i class="fa-solid fa-arrow-up fa-rotate-270"></i> Thank you! </a></p>
                            </div>
                            
                            <FootSpace>
                            </FootSpace>
                        </div>
    
                    <!-- </div> -->
                <!-- </div> -->
            <!-- </div> -->
        <!-- </div> -->
        
    </div>
</SectionWrapper>
