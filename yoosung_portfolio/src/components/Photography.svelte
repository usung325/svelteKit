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
                    <p class="text-gray-600"><span class="text-xl"> Film Photography</span> <br/> Shot on 35mm film on my Canon AE-1. </p>  
                    
                    <div class="flex flex-wrap">
                        <div class="w-1/2 p-2">
                            <img alt='photo1' src="/photo/goose2.png"/>
                        </div>

                        <div class="w-1/2 p-2">
                            <img alt='photo1' src="/photo/dog.png"/>
                        </div>

                        <div class="w-1/2 p-2">
                            <img alt='photo1' src="/photo/laguna.png"/>
                        </div>

                        <div class="w-1/2 p-2">
                            <img alt='photo1' src="/photo/picnic.png"/>
                        </div>
                        
                    </div>

                </div>
        </div>
    </body>
    
</SectionWrapper>