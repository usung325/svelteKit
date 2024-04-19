<script>
    import SectionWrapper from "./SectionWrapper.svelte";


</script>


<SectionWrapper>
    <body class="overscroll-behavior-x: auto;">
        <div id = 'codePage'>
            <div class="z-10 col-start-1 row-start-1 mt-8 mb-3">
                <a href="/" class="text-slate-200 text-xl hover:text-yellow-400"> <i class="fa-solid fa-house-chimney"></i> </a>
            </div>

                
                
                    
                <div class="flex flex-col gap-8 pb-8">
                    
                    <h1 class="text-gray-600" ><span class="" style="font-family:Arizona Bold;"> Creative Coding </span> </h1>  

                    <p class="text-gray-600 -mt-8"> Here are coding skecthes that I created to both learn and explore the power of <span class="font-bold"> Generative </span> and <span class="font-bold"> Interactive </span> design.</p>  
                    
                    <div class="bg-black p-10">
                        <div>
                            <p class="text-white"> Pattern Generator</p>
                            <img alt='pattern gif' src="/coding/pattern.gif"/>

                            <div class="grid grid-cols-2 py-2 gap-2">
                                <img alt='pattern gif' src="/coding/sc2.png"/>
                                <img alt='pattern gif' src="/coding/sc1.png"/>
                                <img alt='pattern gif' src="/coding/sc3.png"/>
                                <img alt='pattern gif' src="/coding/sc4.png"/>
                            </div>
                            <br>

                            <p class="text-white"> Following the first assignment on Golan Levin’s book, I created a random pattern gen using triangles and grayscale values </p>
                        </div>
                    </div>


                    <div class="bg-black p-10">



                            <p class="w-full text-white"> Living Pattern Generator</p>

    
                            <img alt="living pattern" src="/coding/livePattern.gif" class="py-5"/>

                            <div class="grid grid-cols-2 gap-4 py-2">
                                <img alt='pattern gif' src="/coding/gen1.png"/>
                                <img alt='pattern gif' src="/coding/gen2.png"/>
                                <img alt='pattern gif' src="/coding/gen3.png"/>
                                <img alt='pattern gif' src="/coding/gen4.png"/>

                            </div>
                            
                            <p class="w-full text-white"> When learning cellular automata through thecodingtrain, I created different sets of rules that would allow them to generate interesting patterns based on random noise.</p>
                            


                    </div>


                    <div class="bg-black p-10 space-y-3">
                        <div>
                            <p class="w-full text-white"> Tangram Program</p>
                        </div>

                        <div>
                            <video width=600 height=auto controls>
                                <source src="/lxd/lxdDemo.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                              <track kind="captions" /> 
                            </video>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <img alt='pattern gif' src="/coding/lxd1.gif"/>
                            <img alt='pattern gif' src="/coding/lxd2.gif"/>
                        </div>

                        <div>
                            <p class="text-white">Using Matter js, I’ve revisited a branding project I did in junior fall and created an interactive tool for making tangrams out of the brand logo. It’s features include freezing shapes you’re not clicking, rotation, locking all shapes into one, and releasing them to edit.</p>
                        </div>
                        
                        <div>
                            <img alt='lxd logo' src="/lxd/lxdLogo2.gif">
                        </div>
                    </div>

                    <div class="bg-black p-10 space-y-3">
                        <div>
                            <p class="text-white"> CameraDraw: </p>
                        </div>

                        <div>
                            <img alt="gif of cameraDraw" src="/coding/CameraDraw.gif">
                        </div>

                        <div>
                            <p class="text-white">I wanted to create a drawing tool that uses non-static inputs for it’s brush strokes. Inspired by this video, I created a drawing tool that uses either your computer or your phone’s camera input. In this way, you are able to “draw” compositions that can’t be done outside of photoshop.</p>
                        </div>

                        <div>
                            <div class="grid grid-cols-2 gap-2">

                                <div class="grid grid-cols-2 gap-2">
                                    <img alt='pattern gif' src="/coding/bit1.png"/>
                                    <img alt='pattern gif' src="/coding/bit2.png"/>
                                    <img alt='pattern gif' src="/coding/bit3.png"/>
                                    <img alt='pattern gif' src="/coding/bit4.png"/>
                                </div>

                                <div class="grid grid-rows-2 gap-2 h-[17.5em]">
                                    <img alt='pattern gif' src="/coding/bit6.png"/>
                                    <!-- <img alt='pattern gif' src="/coding/bit6.png"/> -->
                                    <div class="grid grid-cols-2 gap-2">
                                        <img alt='pattern gif' src="/coding/bit4.png"/>
                                        <img alt='pattern gif' src="/coding/bit4.png"/>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="bg-black p-10">
                        <p class="text-white"> Valentines ml mediapipe</p>
                        <img alt='ml gif' src="/coding/ml2.gif"/>
                        <p class="text-white">For Valentines Day, I trained an ML model to recognize the Korean hand heart using Google’s MediaPipe.</p>
                    </div>

                    <div class="bg-black p-10">
                        <p class="text-white"> Interactive Clock:</p>
                        <img alt="clock" src="/coding/clock.gif">
                        <p class="text-white"> For all the projects I did, I wanted to create a website that archives them but based on a clock that you can physically wind forwards and backwards to loop through the porjects.</p>

                    </div>
                    
                    
                    <!-- <iframe src="https://imgur.com/ZXHn1Gx" frameborder="0" allowfullscreen width="560" height="315"></iframe> -->
                    
                    
                    <a class=" text-blue-400 hover:text-black" href="https://www.linkedin.com/in/yoosung2/">Contact Me</a>
                </div>

            </div>
    </body>

</SectionWrapper>