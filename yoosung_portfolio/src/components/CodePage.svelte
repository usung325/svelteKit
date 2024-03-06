<script>
    import SectionWrapper from "./SectionWrapper.svelte";


</script>


<SectionWrapper>
    <body class="overscroll-behavior-x: auto;">
        <div id = 'codePage'>
            <div class="z-10 col-start-1 row-start-1">
                    <a href="/" class="text-blue-400 text-sm">Home</a>
                </div>
                
                    
                <div class="flex flex-col gap-8 pb-8">
                    
                    <p class="text-gray-600"><span class="text-xl"> Creative Coding</span> <br/> These are small weekly sketches that I made for classes, fun, and capstone. </p>  
                    
                    <div>
                        <p> Pattern Generator</p>
                        <img alt='pattern gif' src="/coding/pattern.gif"/>
                    </div>
                    
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <p> Living Pattern Generator</p>
                        </div>
                        
                        <div class="w-1/2 px-2">
                            <img  alt="living pattern" src="/coding/pattern2.png" />  
                        </div>
                        <div class="w-1/2 px-2">
                            <img  alt="living pattern" src="/coding/pattern3.png" />  
                        </div>
                        <div class="w-1/2 px-2">
                            <img  alt="living pattern" src="/coding/pattern4.png" />  
                        </div>

                        <div class="w-1/2 px-2">
                            <img  alt="living pattern" src="/coding/pattern2.png" />  
                        </div>
                        
                    </div>

                    <div>
                        <p> Valentines ml mediapipe</p>
                        <img alt='ml gif' src="/coding/ml2.gif"/>
                    </div>
                    
                    <div>
                        <p>Camera Painter</p>
                        <div class="flex flex-wrap">
                            <div class="w-1/2 p-2">
                                <img  alt="camera painter" src="/coding/bit1.png" />  
                            </div>
    
                            <div class="w-1/2 p-2">
                                <img  alt="camera painter" src="/coding/bit2.png" />  
                            </div>
    
                        </div>
                    </div>
                    
                    <div>
                        <p>Unity Painter</p>
                        <img alt="ult" src="/coding/dinnerClip.gif" />
                    </div>
                    
                    
                    <!-- <iframe src="https://imgur.com/ZXHn1Gx" frameborder="0" allowfullscreen width="560" height="315"></iframe> -->
                    
                    
                    <a class=" text-blue-400 hover:text-black" href="https://www.linkedin.com/in/yoosung2/">Contact Me</a>
                </div>

            </div>
    </body>

</SectionWrapper>