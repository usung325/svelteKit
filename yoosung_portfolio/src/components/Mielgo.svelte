<script>
    import ImageWrapper from "./ImageWrapper.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import FootSpace from "./FootSpace.svelte";

    let bookletPage = ["ab1", "ab2", "ab3", "ab4", "ab5", "ab6", "ab7", "ab8"];
</script>

<SectionWrapper>
    <div id="mielgo">
        <!-- <div class="md:flex md:flex-row md:justify-center"> -->
        <!-- <div class=" md:min-w-[512px] md:w-full md:max-w-xl"> -->
        <!-- <div class="flex flex-col justify-start max-w-xl px-8 py-24 "> -->
        <!-- <div class="flex flex-col gap-8 pb-8"> -->
        <div class="z-10 col-start-1 row-start-1 mt-8 mb-3">
            <a href="/" class="text-slate-200 text-xl hover:text-yellow-400">
                <i class="fa-solid fa-house-chimney"></i>
            </a>
        </div>

        <div class="flex flex-col gap-8 pb-8">
            <h1 class="text-gray-600">
                <span class="" style="font-family:Arizona Bold;">
                    Design Hero | Alberto Mielgo
                </span>
            </h1>

            <div class="inline-flex text-slate-500 -mt-7 space-x-5">
                <p class=" ">
                    <i class="fa-regular fa-calendar"></i> Spring 2022 [14 weeks]
                </p>
                <p><i class="fa-solid fa-user-group"></i> 1</p>
            </div>
            <div class="flex flex-col text-slate-500 -mt-8">
                <p>
                    <i class="fa-solid fa-toolbox"></i> Photoshop, Illustrator, InDesign,
                    AfterEffects
                </p>
                <p>
                    <i class="fa-solid fa-wand-magic-sparkles"></i> Visual Identity,
                    Booklet Design, Graphic Design, UIUX, Motion Design
                </p>
            </div>

            <ImageWrapper>
                <img
                    alt="profile"
                    src="/mielgo/banner.jpeg"
                    width="2400"
                    height="1260"
                    class="rounded-sm"
                />
            </ImageWrapper>

            <!-- <ImageWrapper>
                <div class="grid grid-cols-4">
                    {#each bookletPage as page}
                        <div>
                            <img alt="booklet page" src="/mielgo/{page}.png" />
                        </div>
                    {/each}
                </div>
            </ImageWrapper> -->

            <h1>
                <a
                    target="blank"
                    alt="website to alberto mielgo"
                    href="https://www.instagram.com/albertomielgo/?hl=en"
                    class="text-white bg-black p-0.5 rounded-lg hover:bg-blue-500 hover:transition"
                    >Alberto Mielgo</a
                > is a Spanish born animator, art director, and painter who has received
                a total of 4 Emmy Awards, 2 Annie Awards, and an Oscar.
            </h1>
            <p>
                Most notably, he was the Art Director and Production Designer
                for Spider-Man: Into the Spider-Verse, and most recently won an
                Emmy in 2022 for his episode in <em> Love, Death & Robots</em>,
                Jibaro.
            </p>

            <p>
                <span class="font-semibold"
                    >This project is an exploration and dedicated study of a
                    designer of choice.
                </span>I chose Alberto Mielgo for his revolutionary movement in
                animation and digital art. In translating his's style, I created
                a <span class="font-semibold">booklet,</span>
                <span class="font-semibold">poster,</span>
                <span class="font-semibold">video,</span> and an
                <span class="font-semibold">mobile experience</span> with the same visual
                system applied throughout.
            </p>

            <div class="-mb-6 mt-6">
                <h2 class="bg-black text-white p-3 rounded-t-md">Booklet</h2>
            </div>
            <ImageWrapper>
                <div>
                    <img
                        alt="profile"
                        src="/mielgo/mielgoSpread.png"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />
                </div>
            </ImageWrapper>
            <ImageWrapper>
                <div class="grid grid-cols-4">
                    {#each bookletPage as page}
                        <div>
                            <img alt="booklet page" src="/mielgo/{page}.png" />
                        </div>
                    {/each}
                </div>
            </ImageWrapper>
            <div>
                <div class="text-slate-400">
                    <p>Tools: InDesign, Photoshop, Illustrator</p>
                    <p>Trime Size: 8.25 x 10.5 in, 16-pages</p>
                </div>

                <br />

                <p>
                    A 16 page booklet comprised with works of Alberto Mielgo. It
                    contains a thorough style study and contains information
                    that marks the artist’s history, biography and philosophy in
                    creating artwork.
                </p>
            </div>

            <div class="-mb-6 mt-6">
                <h2 class="bg-black text-white p-3 rounded-t-md">Poster</h2>
            </div>

            <div>
                <img src="/mielgo/posterFull.png" alt="poster" />
            </div>

            <div>
                <div class="text-slate-400">
                    <p>Tools: Photoshop, Illustrator</p>
                    <p>Trim Size: 19.25 x 31.75 in</p>
                </div>

                <br />

                <p>
                    An informational poster that highlights the work and style
                    of Mielgo
                </p>
            </div>

            <div class="-mb-6 mt-6">
                <h2 class="bg-black text-white p-3 rounded-t-md">Video</h2>
            </div>
            <ImageWrapper>
                <iframe
                    src="https://player.vimeo.com/video/706389119?h=e81dc79f47"
                    width="780"
                    height={360 + 35}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </ImageWrapper>
            <ImageWrapper>
                <div class="grid grid-cols-3 gap-2">
                    <img
                        alt="gifs"
                        src="/mielgo/vid1.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />

                    <img
                        alt="gifs"
                        src="/mielgo/vid3.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />

                    <img
                        alt="gifs"
                        src="/mielgo/vid2.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />
                </div>
            </ImageWrapper>

            <div>
                <div class="text-slate-400">
                    <p>Tools: Aftereffects, Photoshop, Illustrator</p>
                    <p>Length: 1 minute 28 seconds</p>
                </div>

                <br />

                <p>
                    An animation/video to help explain Mielgo’s philosophy and
                    lifestyle when it comes to making his craft.
                </p>
            </div>

            <div class="-mb-6 mt-6">
                <h2 class="bg-black text-white p-3 rounded-t-md">
                    Mobile Experience
                </h2>
            </div>
            <ImageWrapper>
                <iframe
                    src="https://player.vimeo.com/video/706389026?h=26090b861b"
                    width="780"
                    height={360 + 35}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </ImageWrapper>

            <ImageWrapper>
                <div class="grid grid-cols-3 gap-2">
                    <img
                        alt="gifs"
                        src="/mielgo/phone1.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />

                    <img
                        alt="gifs"
                        src="/mielgo/phone2.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />

                    <img
                        alt="gifs"
                        src="/mielgo/phone3.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />
                </div>
            </ImageWrapper>
            <div>
                <div class="text-slate-400">
                    <p>Tools: Figma, Photoshop, Illustrator</p>
                    <p>Length: 1 minute</p>
                </div>

                <br />

                <p>
                    Crafting a Mobile Experience to explore the work of Alberto Mielgo.
                </p>
            </div>

            <div class="-mb-6 mt-6">
                <h2 class="bg-black text-white p-3 rounded-t-md">Closing</h2>
            </div>

            <p>
                Mielgo has a very interesting philosophy behind his iconic
                “Spider-Verse” style. He dislikes hyper-realism, emphasizing how
                having more detail doesn’t necessarily say anything more.
                Instead, he advocates for a more impressionistic look, where his
                paintings try to capture not a photograph but the mood or
                feeling of the composition. He states that “the eye is a very
                sensitive organ and we need to give images that are gentle for
                the eye.” He calls images something that we should be able to
                describe with the hint of an eye. Because of this, his work may
                look imperfect, unfinished, even. But he likes that. 
            </p>
            <p>
                To him,
                painting and art is a synthesis.
            </p>

            <div>
                <p><a href="/" class=" hover:text-blue-500"><i class="fa-solid fa-arrow-up fa-rotate-270"></i> Thank you! </a></p>
            </div>
            
            <FootSpace>
            </FootSpace>
            
        </div>
    </div>
</SectionWrapper>
