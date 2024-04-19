<script>
    import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper>
    <body class="overscroll-behavior-x: auto;">
        <div id="codePage">
            <div class="z-10 col-start-1 row-start-1 mt-8 mb-3">
                <a
                    href="/"
                    class="text-slate-200 text-xl hover:text-yellow-400"
                >
                    <i class="fa-solid fa-house-chimney"></i>
                </a>
            </div>

            <div class="flex flex-col gap-8 pb-8">
                <h1 class="text-gray-600">
                    <span class="" style="font-family:Arizona Bold;">
                        Creative Coding
                    </span>
                </h1>

                <div class="inline-flex text-slate-500 -mt-7 space-x-5">
                    <p class=" ">
                        <i class="fa-regular fa-calendar"></i> Fall 2023+
                    </p>
                    <p><i class="fa-solid fa-user-group"></i> 1</p>
                </div>
                <div class="flex flex-col text-slate-500 -mt-8">
                    <p>
                        <i class="fa-solid fa-toolbox"></i> HTML, CSS, Javascript,
                        Python
                    </p>
                    <p>
                        <i class="fa-solid fa-wand-magic-sparkles"></i> Interactive
                        Media, Data Visualization, Creative Technology
                    </p>
                </div>

                <p class="text-gray-600 -mt-3">
                    Here are coding skecthes that I created to both learn and
                    explore the power of
                    <span
                        ><a
                            target="blank"
                            alt="nfc forum"
                            href="https://the-brandidentity.com/project/the-edit-five-projects-including-talia-cottons-generative-identity-for-guilty-by-association"
                            class="text-white bg-black p-0.5 rounded-lg hover:bg-yellow-400 hover:transition"
                            >Generative</a
                        ></span
                    >
                    and
                    <span
                        ><a
                            target="blank"
                            alt="nfc forum"
                            href="https://cotton.design/projects/elemental-interactive-2023"
                            class="text-white bg-black p-0.5 rounded-lg hover:bg-yellow-400 hover:transition"
                            >Interactive</a
                        ></span
                    > design.
                </p>

                <div class="bg-black p-10">
                    <div class="space-y-3 text-white">

                        <div class="text-center pb-4">
                            <h1>Pattern Generator</h1>
                        </div>


                        <div class="pb-2">
                            <img alt="pattern gif" src="/coding/pattern.gif" />
                        </div>

                        

                        <div class="grid grid-cols-2 gap-2 py-2">
                            <img alt="pattern gif" src="/coding/sc2.png" />
                            <img alt="pattern gif" src="/coding/sc1.png" />
                            <img alt="pattern gif" src="/coding/sc3.png" />
                            <img alt="pattern gif" src="/coding/sc4.png" />
                        </div>

                        <div>
                            <p>
                                Following the first assignment on Golan Levin’s
                                book, <em>patterns</em>, I created a random
                                pattern gen using triangles and varying
                                grayscale values.
                            </p>
                        </div>

                        <div>
                            <a
                                target="_blank"
                                href="https://github.com/usung325/d1"
                                class="hover:text-yellow-400"
                            >
                                <i class="fa-brands fa-github"></i></a
                            >
                        </div>
                    </div>
                </div>

                <div class="bg-black p-10">
                    <div class="space-y-3 text-white">

                        <div class="text-center pb-8">
                            <h1>Cellular Pattern Generator</h1>
                        </div>

                        <div class="">
                            <img
                                alt="living pattern"
                                src="/coding/livePattern.gif"
                            />
                        </div>

                        

                        <div class="grid grid-cols-2 gap-4 py-2">
                            <img alt="pattern gif" src="/coding/gen1.png" />
                            <img alt="pattern gif" src="/coding/gen2.png" />
                            <img alt="pattern gif" src="/coding/gen3.png" />
                            <img alt="pattern gif" src="/coding/gen4.png" />
                        </div>

                        <div>
                            <p>
                                After learning how to create <a
                                    target="_blank"
                                    href="https://www.youtube.com/watch?v=FWSR_7kZuYg&pp=ygUMZ2FtZSBvZiBsaWZl"
                                    class="underline">The Game Of Life</a
                                >, I played around with its rules until it
                                allowed me to generate interesting patterns
                                based off of random noise.
                            </p>
                        </div>

                        <div>
                            <a
                                target="_blank"
                                href="https://github.com/usung325/feb19"
                                class="hover:text-yellow-400"
                            >
                                <i class="fa-brands fa-github"></i></a
                            >
                        </div>
                    </div>
                </div>

                <div class="bg-black p-10">
                    <div class="space-y-3 text-white">

                        <div class="text-center pb-8">
                            <h1>Tangram Editor</h1>
                        </div>


                        <div class="grid grid-cols-2 gap-2 pb-2">
                            <img alt="pattern gif" src="/coding/lxd1.gif" />
                            <img alt="pattern gif" src="/coding/lxd2.gif" />
                        </div>

                        

                        <div class="py-3">
                            <video width="600" height="auto" controls>
                                <source
                                    src="/lxd/lxdDemo.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                                <track kind="captions" />
                            </video>
                        </div>

                        <div class="">
                            <div>
                                <p>
                                    Using Matter js, I revisited a branding
                                    project that I did in junior fall to create
                                    an interactive tool for making tangrams out
                                    of the brand's logo.
                                </p>
                            </div>

                            <br />

                            <div>
                                <p>
                                    Its features include: different editing
                                    modes and locking/unlocking all tangrams
                                    into/from one.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img alt="lxd logo" src="/lxd/lxdLogo2.gif" />
                        </div>

                        <div>
                            <a
                                target="_blank"
                                href="https://github.com/usung325/march13.5"
                                class="hover:text-yellow-400"
                            >
                                <i class="fa-brands fa-github"></i></a
                            >
                        </div>
                    </div>
                </div>

                <div class="bg-black p-10">
                    <div class=" space-y-3 text-white">

                        <div class="text-center pb-5">
                            <h1>CameraDraw</h1>
                        </div>
                        
                        <div class="pb-2">
                            <img
                                alt="gif of cameraDraw"
                                src="/coding/CameraDraw.gif"
                            />
                        </div>

                        

                        <div class="grid grid-cols-2 gap-2 py-3">
                            <img alt="pattern gif" src="/coding/bit1.png" />
                            <img alt="pattern gif" src="/coding/bit2.png" />
                            <img alt="pattern gif" src="/coding/bit3.png" />
                            <!-- <img alt="pattern gif" src="/coding/bit4.png" /> -->
                            <img alt="pattern gif" src="/coding/bit5.png" />
                        </div>

                        <div>
                            <p>
                                I wanted to create a drawing tool that uses
                                non-static pixels for its brush strokes.
                                Inspired by <a
                                    target="_blank"
                                    href="https://www.youtube.com/watch?v=KL_b6eTm9Ag&list=LL&index=19&t=1158s"
                                    class="underline">this video</a
                                >, I created a drawing tool that uses either
                                your computer or your phone’s camera input as
                                reference.
                            </p>   

                                <br/>
                            <p>  
                                This way, you are able to quickly and organically "draw" compositions and even paint collaboratively by handing someone else the "paint" (phone).
                            </p>
                        </div>

                        <div>
                            <a
                                target="_blank"
                                href="https://github.com/usung325/cameraDraw2"
                                class="hover:text-yellow-400"
                            >
                                <i class="fa-brands fa-github"></i></a
                            >
                        </div>
                    </div>
                </div>

                <div class="bg-black p-10">
                    <div class="space-y-3 text-white">

                        <div class="text-center pb-4">
                            <h1> Finger Heart | Mediapipe</h1>
                        </div>

                        <div>
                            <img alt="ml gif" src="/coding/ml2.gif" />
                        </div>

                        <div class="py-3">
                            <p>
                                For Valentines Day, I trained an ML model to recognize
                                the Korean finger heart using Google’s MediaPipe and drew hearts based on the position of the index finger.
                            </p>
                        </div>

                        <div>
                            <a
                                target="_blank"
                                href="https://github.com/usung325/valentine"
                                class="hover:text-yellow-400"
                            >
                                <i class="fa-brands fa-github"></i></a
                            >
                        </div>
                        
                    </div>


                    
                </div>

                <div class="bg-black p-10">
                    <div class="space-y-3 text-white">

                        <div class="text-center pb-4">
                            <h1> Archive Clock </h1>
                        </div>

                        <div>
                            <img alt="clock" src="/coding/clock.gif" />
                        </div>

                        <div>
                            <p>
                                To archive and showcase all projects in my capstone, I created a website
                                that cycles through the projects in chronological order based on the time on the clock.
                            </p>

                            <br/>

                            <p>
                                The user is able to wind the clock clock-wise or counter-clock-wise using either the mouse or key presses to navigate the archive.
                            </p>
                        </div>

                        <div>
                            <a
                                target="_blank"
                                href="https://github.com/usung325/ArchiveClock"
                                class="hover:text-yellow-400"
                            >
                                <i class="fa-brands fa-github"></i></a
                            >
                        </div>

                    </div>
                </div>

                <!-- <iframe src="https://imgur.com/ZXHn1Gx" frameborder="0" allowfullscreen width="560" height="315"></iframe> -->

                <!-- <a
                    class=" text-blue-400 hover:text-black"
                    href="https://www.linkedin.com/in/yoosung2/">Contact Me</a
                > -->
            </div>
        </div>
    </body>
</SectionWrapper>
