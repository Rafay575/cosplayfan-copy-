import cardImg from "/images/card-image2.png";
import flame from "../../assets/svg/rose.svg";

const Sportlight = () => {
    return (
        <div>
            <div class="w-full container lg:max-w-full lg:px-14 px-4 py-1 md:py-10 mx-auto">
                <div class="flex items-center justify-center md:justify-between">
                    <p class="text-white font-clash-display-variable font-bold text-[28px] lg:text-[52px]">
                        Creator
                        <span class="bg-gradient-to-r from-[#913DFF] to-[#00FFA3] text-transparent bg-clip-text font-clash-display-variable font-bold text-[28px] ml-2 lg:text-[52px]">
                            Spotlight
                        </span>
                    </p>
                    <button class="w-52 py-2 lg:py-4 hidden md:block flex-shrink-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        View All
                    </button>
                </div>
                {/* CARDS */}

                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 mt-5 md:mt-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
                        <div class="mt-3 group">
                            <div class="">
                                <img
                                    class="rounded-t-lg w-full h-[380px] lg:h-[460px]"
                                    src={cardImg}
                                    alt="user"
                                />
                            </div>
                            <div
                                class="rounded-b-lg w-full p-2 bg-black/40 bottom-0 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:backdrop-blur-2 bg-gradient-to-r from-[#131725]  to-[#1e1124]
                                "
                            >
                                <div class="flex items-center justify-between p-2">
                                    <span class="text-white font-[600] leading-[40px] text-[24px]">
                                        Yae Miko
                                    </span>
                                    <img
                                        class="w-[27px] h-[27px]"
                                        src={flame}
                                        alt=""
                                    />
                                </div>
                                <p class="text-white font-[400] leading-[24px] text-[14px] md:text-[12px] p-2">
                                    Dressing up as a Genshin Impact character is
                                    so awsome to me. Come check out my private
                                    pics and if I’m online come say hello:)
                                </p>
                                <div class="flex items-center justify-between p-2">
                                    <span class="text-[#10E0F9] text-[14px] leading-normal font-[500]">
                                        Clara Lu
                                    </span>
                                    <span class="text-[#10E0F9] text-[14px] leading-normal font-[500]">
                                        12K VIEWS
                                    </span>
                                    <span class="text-[#10E0F9] text-[14px] leading-normal font-[500]">
                                        5K LIKES
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button class="w-full h-10 md:hidden flex-shrink-0 my-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    View All
                </button>
            </div>
        </div>
    );
};

export default Sportlight;
