<script>
    import SectionWrapper from "./SectionWrapper.svelte";


</script>

<SectionWrapper>
    <body class="overscroll-behavior-x: auto;">
        <div id = 'photo'>
                <div class="z-10 col-start-1 row-start-1">
                    <a href="/" class="text-blue-400 text-sm">Home</a>
                </div>
                <div class="flex flex-col gap-8 pb-8">
                    <p class="text-gray-600"><span class="text-xl"> Illustration </span> <br/> Digital Illustrations and Sketches </p>  
                    
                    <div class="flex flex-wrap">
                        <div class="w-1/2 p-2">
                            <img alt='photo1' src="/illust/poster1.png"/>
                        </div>

                        <div class="w-1/2 p-2">
                            <img alt='photo1' src="/illust/poster2.png"/>
                        </div>

                        <div class="w-1/2 p-2">
                            <img alt='photo1' src="/illust/poster3.png"/>
                        </div>

                        <div class="w-1/2 p-2">
                            <img alt='photo1' src="/illust/poster4.png"/>
                        </div>
                        <div class="w-full p-2">
                            <img alt='photo1' src="/illust/poster5.png"/>
                        </div>
                    </div>

                </div>
        </div>
    </body>
    
</SectionWrapper>