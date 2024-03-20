<script>
    import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper>
    <body class="overscroll-behavior-x: auto;">
        <div id="about">
            <div class="z-10 col-start-1 row-start-1 mt-8 mb-3">
                <a
                    href="/"
                    class="text-slate-200 text-xl hover:text-yellow-400"
                >
                    <i class="fa-solid fa-house-chimney"></i>
                </a>
            </div>

            <div class="flex flex-col gap-8 pb-8">
                <br/>
                
                <div class="flex flex-col">
                    <div
                        class="justify-center items-center content-center"
                    >
                        <img
                            alt="profile"
                            src="/pfp2.jpg"
                            class="max-w-[50%] mx-auto pb-8"
                        />
                    </div>
                    <div>
                        <h1>
                            My name is Yoo Sung Lee (he/him) and I'm a student
                            at Carnegie Mellon University, where I'm studying
                            Communications Design with a focus on print,
                            graphic, and brand design.
                        </h1>
                    </div>

                    <div class="pt-8">
                        <p class="text-gray-600 text-2xl">
                            <span class="" style="">
                                <div class="grid grid-cols-4 gap-4 sm:gap-2 items-center content-center mx-atuo">
                                    <a target="_blank" href="https://drive.google.com/file/d/1DlX86uxVpUs1KwCIs3wuoadp7LzLte1j/view?usp=sharing" class="hover:text-blue-500"> <i class="fa-solid fa-file"></i> <span class=" text-lg">Resume</span> </a>
                                    <a target="_blank" href="https://www.linkedin.com/in/yoosung2/" class="hover:text-blue-500"> <i class="fa-brands fa-linkedin"></i> <span class=" text-lg">Linkedin</span> </a>
                                    <a target="_blank" href="https://github.com/usung325" class="hover:text-blue-500"> <i class="fa-brands fa-github"></i> <span class=" text-lg">Github</span> </a>
                                    <a target="_blank" href="mailto:yoosung2@andrew.cmu.edu" class="hover:text-blue-500"> <i class="fa-solid fa-envelope"></i> <span class=" text-lg">Email</span> </a>
                                </div>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</SectionWrapper>
