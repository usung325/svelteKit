<script>
    import FootSpace from "./FootSpace.svelte";
    import FsContainer from "./FsContainer.svelte";
    import ImageWrapper from "./ImageWrapper.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

    let stickers = ['cat', 'dog', 'frog4', 'mouse'];
    import isFull from "./FsContainer.svelte";

    let sB = Array.from({ length: 28 }, (_, i) => i + 1);

    
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
                            
                            <h1 class="text-gray-600" ><span class="" style="font-family:Arizona Bold;"> StickQ's </span> </h1>  

                                <div class='inline-flex text-slate-500 -mt-7 space-x-5'>
                                    <p class=" "> <i class="fa-regular fa-calendar"></i> Spring 2023 [14 weeks]</p>
                                    <p><i class="fa-solid fa-user-group"></i> 3 </p>
                                    
                                </div>
                                <div class='flex flex-col text-slate-500 -mt-8'>
                                    <p> <i class="fa-solid fa-toolbox"></i> Procreate, Photoshop, Illustrator, Figma </p>
                                    <p> <i class="fa-solid fa-wand-magic-sparkles"></i> Visual Identity, UIUX, Logo Design, Branding</p>
                                </div>

                        
                            
                        <ImageWrapper>
                            <img  alt="profile" src="/stickq/banner.png" width="2400" height="1260" class="rounded-sm"/>  
                        </ImageWrapper>

                            <h1>StickQ's is a interactive sticker based webapp that aims to help college students build consistent mindful practices.</h1>

                            <p> Using <a target="blank" alt="nfc forum" href="https://nfc-forum.org/#" class="text-white bg-blue-500 p-0.5 rounded-lg hover:bg-yellow-400 hover:transition">NFC</a>   powered stickers, users are able to track custom activities with a simple tap of the phone. Activities are then easily shared to the community calander.</p>

                            <img alt="other" src="/stickq/frog2.png" width=300em class="hover:transition ease-in-out hover:scale-110  duration-300 hover:-translate-y-10 mx-auto"/>

                            <div class="-mb-6 mt-6">
                                <h2 class=""><i class="fa-solid fa-spinner"></i> Process</h2>
                            </div>


                            <div class="grid grid-cols-6 gap-4">
                                {#each sB as num}
                                    <img alt="sketchbook page" src="/stickq/web/{num}.jpg">
                                {/each}
                            </div>

                            <p> After deciding on the color pallette as a team, I moved on to establish a brand system that works well with the theme of fun collaboration and activity tracking. </p>

                            <p> With some sketching, we decided on these animal characters with a strong shape language, and I created these illustrated assets for the application.  </p>
                            <img alt="other" src="/stickq/brandSketch.png" width=200em class="mx-auto w-full"/>
                            

                            <div class="max-w-[90%]">
                                <p> In order to scaffold the experience, we created our own learning model that focueses on the key learning experiences, including the 
                                    <a target ="blank" href="https://www.universityxp.com/blog/2020/7/9/what-is-the-magic-circle/" class="text-white bg-blue-500 p-0.5 rounded-lg hover:bg-yellow-400 hover:transition">Magic Circle</a>
                                and the 
                                <a target ="blank" href="https://elearningindustry.com/ccaf-instructional-design-model-interactive-learning" class="text-white bg-blue-500 p-0.5 rounded-lg hover:bg-yellow-400 hover:transition">CCAF Learning Model</a>.
                                </p>
                            </div>

                        <ImageWrapper>
                                <img alt="magic circle" src="/stickq/magicCircle.png" class="mx-atuo"/>
                        </ImageWrapper>

                        <ImageWrapper>

                            <img alt="other" src="/stickq/ux2.png" class="mx-auto"/>

                        </ImageWrapper>

                            <p> We included a notification system to nudge more activity and community engagement. </p>

                        <ImageWrapper>

                            <img alt="other" src="/stickq/ux1.png" class="mx-auto"/>
                        </ImageWrapper>

                            <div class="space-y-2">
                                
                                <p> The main user flow goes as follows: </p>

                                <!-- <div class=" px-5">
                                    <p> 1) You use the NFC sticker to log your activity</p>
                                    <p> 2) Rate your activty on a scale</p>
                                    <p> 3) Followed to the main calander page that loggs all of you and your community's activities</p>
                                    <p> 4) Find a sense of acheivement and engagement alongisde your community's efforts</p>
                                </div> -->

                                <ol class="list-decimal space-y-2 px-14">
                                    <li>You use the NFC sticker to log your activity</li>
                                    <li>Rate your activty on a scale</li>
                                    <li>Followed to the main calander page that loggs all of you and your community's activities</li>
                                    <li>Find a sense of acheivement and engagement alongisde your community's efforts</li>
                                </ol>

                            </div>
                            

                            <img alt="other" src="/stickq/thanks2.gif" width=300em class="hover:transition ease-in-out hover:scale-110  duration-300 hover:-translate-y-10 mx-auto"/>

                            <div class="-mb-6 mt-6">
                                <h2 class=""><i class="fa-solid fa-mug-hot"></i> Takeaways</h2>
                            </div>
                            

                            <p> This project was extremely meaningful in both learning to leverage each team member's skills and thinking critically about what it means to design an interaction.</p>


                            <div class="">
                                <div class="flex -space-x-14">
                                        {#each stickers as sticker}
                                            <img alt="other" src="/stickq/{sticker}.png" class="hover:transition ease-in-out hover:scale-110  duration-300 hover:-translate-y-10" width=140em/>
                                        {/each}
                                </div>
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
