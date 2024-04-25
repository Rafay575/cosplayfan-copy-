import cardImg from "/images/card-image1.png";
import flag from "/images/flag.png";

const Trending = () => {
    return (
        <div>
            <div class="w-full container lg:max-w-full lg:px-14 px-4 pt-3 md:py-10 mx-auto  ">
                <div class="flex items-center justify-center md:justify-between">
                    <p class="text-white font-clash-display-variable font-bold text-[28px] lg:text-[52px]">
                        <span class="bg-gradient-to-r from-[#EC655A] to-[#2BC0E4] text-transparent bg-clip-text font-clash-display-variable font-bold text-[28px] lg:text-[52px]">
                            Trending{" "}
                        </span>
                        Now
                    </p>
                    <button class="w-52 py-2 lg:py-4 hidden md:block flex-shrink-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        View All
                    </button>
                </div>
                {/* CARDS */}

                <div class=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 mt-3 md:mt-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
                        <div class="relative mt-3 group">
                            <img
                                class="rounded-lg w-full h-[513.963px] md:h-[460px] lg:h-[513.963px]"
                                src={cardImg}
                                alt="user"
                            />

                            <div
                                class={`rounded-b-lg absolute w-full bottom-0 bg-black/70 group-hover:bg-gradient-to-r from-purple-600 to-blue-600 group-hover:backdrop-blur-2`}
                            >
                                <div class="flex items-center justify-between p-2">
                                    <div class="flex items-center gap-3">
                                        <img
                                            class="w-[47px] h-[47px] rounded-full border-2 border-[#10E0F9]"
                                            src={cardImg}
                                            alt="user"
                                        />
                                        <div>
                                            <h3 class="text-white font-clash-display-variable font-medium text-[18px]">
                                                Chun Li
                                            </h3>
                                            <div class="flex items-center gap-1">
                                                <span class="text-cyan-400 leading-normal font-clash-display-variable font-semibold text-xs uppercase">
                                                    23
                                                </span>
                                                <span class="text-cyan-400 leading-normal font-clash-display-variable font-semibold text-xs uppercase">
                                                    USA
                                                </span>
                                                <img
                                                    class="w-[14.543px] h-[9.771px]"
                                                    src={flag}
                                                    alt="flag"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-cyan-400 bg-cyan-400/30 text-center font-clash-display-variable font-medium text-sm py-1 px-3 rounded-2xl">
                                        Megan Nix
                                    </div>
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

export default Trending;
