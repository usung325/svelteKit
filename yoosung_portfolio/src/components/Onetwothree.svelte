<script>
    import ImageWrapper from "./ImageWrapper.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import FootSpace from "./FootSpace.svelte";

    let pfpList = ["pfp1", "pfp2", "pfp3", "pfp4", "pfp5"];
    let menuList = ["menu1", "menu2", "menu3", "menu4"];
</script>

<SectionWrapper>
    <div id="mielgo">
        <!-- <div class="md:flex md:flex-row md:justify-center"> -->
        <!-- <div class=" md:min-w-[512px] md:w-full md:max-w-xl"> -->
        <!-- <div class="flex flex-col justify-start max-w-xl px-8 py-24 "> -->
        <!-- <div class="flex flex-col gap-8 pb-8"> -->
        <div class="z-10 col-start-1 row-start-1 mt-8 mb-3">
            <a href="/" class="text-slate-200 text-xl hover:text-[#009EB1]">
                <i class="fa-solid fa-house-chimney"></i>
            </a>
        </div>

        <div class="flex flex-col gap-8 pb-8">
            <h1 class="text-gray-600">
                <span class="" style="font-family:Arizona Bold;"> 1->3 </span>
            </h1>

            <div class="inline-flex text-slate-500 -mt-7 space-x-5">
                <p class=" ">
                    <i class="fa-regular fa-calendar"></i> Spring 2024 [12 weeks]
                </p>
                <p><i class="fa-solid fa-user-group"></i> 3</p>
            </div>
            <div class="flex flex-col text-slate-500 -mt-8">
                <p>
                    <i class="fa-solid fa-toolbox"></i> Figma, Illustrator, Photoshop,
                    GLyphs 3, Javascript
                </p>
                <p>
                    <i class="fa-solid fa-wand-magic-sparkles"></i> Visual Identity,
                    Graphic Design, Web Design, Data Visualization
                </p>
            </div>

            <ImageWrapper>
                <img
                    alt="profile"
                    src="/onetwothree/123Banner.png"
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
                    href="https://www.instagram.com/1to3place/"
                    class="text-white bg-[#009EB1] p-0.5 rounded-lg hover:bg-[#F965C4] hover:transition"
                    >1->3</a
                > (pronounced “one to three”) is a free pop-up restaurant hosted
                in my apartment serving Vietnamese, Colombian, and Korean street
                food.
            </h1>
            <p>
                The project investigates how third places <span
                    class="font-semibold"
                    >(social environments that cultivate community)</span
                >
                can bring people together without the obligation of spending money.
                Over four events, we served food to 60+ guests. In my role, I led
                the
                <span class="font-semibold"
                    >art direction of the branding, maintained and updated the
                    website and Instagram, and led our first event.
                </span>
            </p>

            <p>
                <em
                    >Funded by CMU Office of Undergraduate Research and Scholar
                    Development.</em
                >
            </p>

            <div class="-mb-6 mt-6">
                <h2 class="bg-[#009EB1] text-white p-3 rounded-t-md">Poster</h2>
            </div>

            <div>
                <img src="/onetwothree/poster.png" alt="poster" />
            </div>

            <div>
                <div class="text-slate-400">
                    <p>Tools: Photoshop, Illustrator, Figma</p>
                    <p>Trim Size: 19.25 x 31.75 in</p>
                </div>

                <br />

                <p>
                    An event poster with all the planned events that we printed
                    to advertise our event across campus.
                </p>
            </div>

            <!--  -->

            <div class="-mb-6 mt-6">
                <h2 class="bg-[#009EB1] text-white p-3 rounded-t-md">
                    Variable Logo
                </h2>
            </div>

            <div>
                <img src="/onetwothree/logo.gif" alt="poster" />
            </div>

            <!-- <div class="grid grid-cols-3 gap-2">
                <img
                        alt="gifs"
                        src="/onetwothree/variable1.mov"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />
            </div> -->

            <div>
                <div class="text-slate-400">
                    <p>Tools: Glyphs 3, AfterEffects</p>
                    <p>Font File: 123.ttf</p>
                </div>

                <br />

                <p>
                    A variable typeface that acts as our logotype created to
                    highlight the mesh of different cultures through the chairs
                    we see in the streets of Korea, Vietnam, and Columbia.
                </p>
            </div>

            <!--  -->

            <div class="-mb-6 mt-6">
                <h2 class="bg-[#009EB1] text-white p-3 rounded-t-md">
                    Website
                </h2>
            </div>
            <ImageWrapper>
                <iframe
                    src="https://player.vimeo.com/video/935668999?h=738aea3d4f"
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
                        src="/onetwothree/123web1.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />

                    <img
                        alt="gifs"
                        src="/onetwothree/123web2.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />

                    <img
                        alt="gifs"
                        src="/onetwothree/123web3.gif"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />
                </div>
            </ImageWrapper>

            <div>
                <div class="text-slate-400">
                    <p>Tools: Figma, Readymag</p>
                    <p>Pages: 12 Web Pages</p>
                </div>

                <br />

                <p>
                    We created a website to provide information on the event and
                    our mission to create a third place in our apartment. We
                    created 3 different translation pages alongside english to
                    help people access information in all 3 of our culture's
                    native languages.
                </p>
            </div>

            <div class="-mb-6 mt-6">
                <h2 class="bg-[#009EB1] text-white p-3 rounded-t-md">
                    Instagram
                </h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <img
                        alt="profile"
                        src="/onetwothree/insta1.png"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />
                </div>
                <div>
                    <img
                        alt="profile"
                        src="/onetwothree/insta2.png"
                        width="2400"
                        height="1260"
                        class="rounded-sm"
                    />
                </div>
            </div>
            <ImageWrapper>
                <div class="grid grid-cols-5 gap-4 bg-white">
                    {#each pfpList as pfp}
                        <div>
                            <img
                                alt="booklet page"
                                src="/onetwothree/{pfp}.png"
                                class="rounded-full"
                            />
                        </div>
                    {/each}
                </div>
            </ImageWrapper>
            <div>
                <div class="text-slate-400">
                    <p>Tools: Figma, Photoshop, Illustrator</p>
                    <p>Outreach: 100 Followers</p>
                </div>

                <br />

                <p>
                    An instragram presence to update our followers on future
                    events and RSVPs. We made a total of 15 posts including: 5
                    Event Posts, Menus, Meet the Roomies, and informations about
                    the project.
                </p>
                <br />
                <p>
                    We also had 5 different profile pictures for the coorelating
                    theme of each of the 4 events + one default profile picture.
                </p>
            </div>

            <div class="-mb-6 mt-6">
                <h2 class="bg-[#009EB1] text-white p-3 rounded-t-md">Menus</h2>
            </div>

            <ImageWrapper>
                <div class="grid grid-cols-4 gap-2 bg-white">
                    {#each menuList as menu}
                        <div>
                            <img
                                alt="booklet page"
                                src="/onetwothree/{menu}.png"
                            />
                        </div>
                    {/each}
                </div>
            </ImageWrapper>
            <div>
                <div class="text-slate-400">
                    <p>Tools: Figma</p>
                    <p>Events: Vietnamese, Colombian, Korean, and Dessert</p>
                </div>

                <br />

                <p>
                    Listings of the menu options we had for each event. All of them were posted on the instagram alongside the email we sent out to all participants.
                </p>
            </div>

            <div class="-mb-6 mt-6">
                <h2 class="bg-[#009EB1] text-white p-3 rounded-t-md">
                    Closing
                </h2>
            </div>

            <p>
                This project started as a small joke of having an apartment restaurant to make free food for our friends. As we progressed through 1->3 we saw how enriching of an experience this turned out to be for both the 'customers' and the 'chefs'. Everyone's willingness to connect with strangers in a new space over a table of food was something that we three roomies found very fulfilling and inspiring.
            </p>
            <p>We hope that this project encourages you to host your own 1->3 within your apartments and homes :)</p>

            <div>
                <p>
                    <a href="/" class=" hover:text-[#F965C4]"
                        ><i class="fa-solid fa-arrow-up fa-rotate-270"></i> Thank
                        you!
                    </a>
                </p>
            </div>

            <FootSpace></FootSpace>
        </div>
    </div>
</SectionWrapper>
