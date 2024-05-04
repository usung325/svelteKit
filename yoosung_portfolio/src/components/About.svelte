<script>
    import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper>
    <body class="overscroll-behavior-x: auto;">
        <div id="about">
            <div class="z-10 col-start-1 row-start-1 mt-8 mb-0">
                <a
                    href="/"
                    class="text-slate-200 text-xl hover:text-yellow-400"
                >
                    <i class="fa-solid fa-house-chimney"></i>
                </a>
            </div>

            <div class="flex flex-col gap-0 pb-8">
                <br />

                <div class="flex flex-col">
                    <div class="w-full">
                        <h1>
                            Hi, I'm Yoo Sung, a designer that redfines future
                            brands and emerging technolgies. <i
                                class="fa-regular fa-face-smile fa-spin"
                            ></i>
                        </h1>

                        <p class="pt-2">
                            After my time @Carneige Mellon University where I
                            studied Communication Design & Photography, I
                            developed a proficiency in designs that work with
                            data and code. As a visual curator I transform a
                            brand's values and voices into compelling digital
                            experiences.
                        </p>

                        <p class="pt-2">
                            I always try to foster a sense of playfulness within
                            my designs because I'm constantly inspired by the
                            power of play and the idea of the magic circle. I
                            regularly remind myself to keep a joyful design
                            practice in the hopes that this can resonate within my
                            work.

                            <!-- I try to make sure that those
                            moments of joy translate through my work because at -->
                            <!-- about being able to share those pleasant moments  -->
                            <!-- Within the studio, I value the spontaneous
                            collaborations that organically emerge from sharing
                            a creative space.  -->
                        </p>
                        <!-- Design to me is just another way
                            to joke around or to make people laugh, and that joy
                            is a core component that inspires my craft. -->

                        <p class="pt-2">
                            Outside of the digital world, I enjoy spending time
                            cooking, woodworking or making my own jewlery.
                        </p>
                    </div>
                    <div class="w-full pt-8">
                        <div class="justify-center items-center content-center">
                            <img
                                alt="profile"
                                src="/pfp2.jpg"
                                class="max-w-[50%] mx-auto pb-8"
                            />
                        </div>
                    </div>
                </div>
                <div class="">
                    <p class="text-gray-600 text-2xl">
                        <span class="" style="">
                            <div
                                class="grid grid-cols-4 gap-4 sm:gap-2 items-center content-center mx-atuo"
                            >
                                <a
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1YVKPMAIi6aP6BCHqgHDyWjLCWsnWrMAE/view?usp=sharing"
                                    class="hover:text-blue-500"
                                >
                                    <i class="fa-solid fa-file"></i>
                                    <span class=" text-lg">Resume</span>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/yoosung2/"
                                    class="hover:text-blue-500"
                                >
                                    <i class="fa-brands fa-linkedin"></i>
                                    <span class=" text-lg">Linkedin</span>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/usung325"
                                    class="hover:text-blue-500"
                                >
                                    <i class="fa-brands fa-github"></i>
                                    <span class=" text-lg">Github</span>
                                </a>
                                <a
                                    target="_blank"
                                    href="mailto:yoosung2@andrew.cmu.edu"
                                    class="hover:text-blue-500"
                                >
                                    <i class="fa-solid fa-envelope"></i>
                                    <span class=" text-lg">Email</span>
                                </a>
                            </div>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </body>
</SectionWrapper>
