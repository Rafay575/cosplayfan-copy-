import cardImg from "../../assets/images/card-image1.png";
import flag from "../../assets/images/flag.png";

const NewFans = () => {
  return (
    <div class="w-full container lg:max-w-full lg:px-14 px-4 py-10 mx-auto pb-20">
      <div class="flex items-center justify-between">
        <p class="text-white font-clash-display-variable font-bold text-[24px] md:text-4xl">
          New to 
          <span class="bg-gradient-to-r from-yellow-300 to-cyan-400 text-transparent bg-clip-text font-clash-display-variable font-bold text-[24px] md:text-4xl">
            Cosplay Fans
          </span>
        </p>
        <button class="w-52 h-10 hidden md:block flex-shrink-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          View All
        </button>
      </div>
      {/* CARDS */}

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <div class="relative">
            <img
              class="rounded-lg w-full h-[459.963px]"
              src={cardImg}
              alt="user"
            />
            <div
              class={`rounded-b-lg absolute w-full bottom-0 ${
                i === 0
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 backdrop-blur-2"
                  : "bg-black/10 backdrop-blur-md"
              }`}
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
                <div class="text-cyan-400 bg-cyan-400/30 text-center font-clash-display-variable font-medium text-sm py-1 px-3 rounded-lg">
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
  );
};

export default NewFans;
