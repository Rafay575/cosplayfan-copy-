import Image1 from "../../assets/svg/hero-img-1.svg";
import FlameIcon from "../../assets/svg/flameIcon.svg";
import UsersImage from "../../assets/svg/Hero-users.svg";
import { actions } from "../../store";

const HeroContents = () => {
  return (
    <div class="container py-4 mx-auto px-4 h-full">
      <div class="flex">
        <div class="md:w-[613px]">
          <h1 class="text-cyan-400 text-shadow font-semibold text-3xl">
            FEATURED CREATOR
          </h1>
          <h1 class="text-white text-shadow font-bold text-3xl mt-4">
            Candice Nice as
          </h1>
          <div class=" w-[150px] md:hidden ">
            <img class="" src={Image1} alt="hero-image" />
          </div>
          <p class="text-white hidden md:block font-clash-display-variable font-medium text-[20px] leading-[34px] mt-8">
            With her infectious energy and impeccable attention to detail, she
            brings the iconic character to life in a whirlwind of color and
            chaos. From her playful demeanor to her penchant for mischief,
            Candice captivates audiences with her boundless enthusiasm for
            embodying Gotham's most enigmatic villainess...{" "}
            <a
              class="text-[#FF23FF] font-clash-display-variable font-medium text-[20px] leading-[34px]"
              href="#"
            >
              Read More
            </a>
          </p>
          <div class="flex gap-2 mt-8">
            <img
              class="w-[26px] h-[26px] md:w-[35px] md:h-[35px]"
              src={FlameIcon}
              alt="flame"
            />
            <p class="text-white drop-shadow-md shadow-black/40 text-[18px] md:text-[22px] font-[600]">
              Subscribe and gain ACCESS to daily uploaded content!
            </p>
          </div>

          <div class="flex items-center gap-2 mt-4">
            <img
              class="w-[26px] h-[26px] md:w-[35px] md:h-[35px]"
              src={FlameIcon}
              alt="flame"
            />
            <p class="text-white drop-shadow-md text-[18px] md:text-[22px] font-[600]">
              Live Messaging 24/7!
            </p>
          </div>
          <button class="py-3 px-5 hidden border md:block flex-shrink-0 rounded-lg bg-gradient-to-r mt-8 from-purple-600 to-blue-600 text-white">
          Register for free
        </button>
        </div>
        
        <div class="w-[600px] h-[402.686px] hidden md:flex relative">
          <img
            class="absolute top-[-100px] left-[-150px] w-[400px]"
            src={Image1}
            alt="hero-image"
          />
        </div>
      </div>

      <div class="my-8 hidden md:flex">
        <img src={UsersImage} alt="users" />
      </div>
      <a
        class="text-[#F00] hover:underline hidden md:flex items-center gap-1 "
        href=""
      >
        See Profie{" "}
        <svg
          fill="currentColor"
          stroke-width="0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          height="1em"
          width="1em"
          style="overflow: visible; color: currentcolor;"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
        </svg>
      </a>

      <button
        onclick={actions.toggleSignupModal}
        class="text-[18px] font-[600] w-[175px] h-[52px] mt-8 md:hidden flex-shrink-0 rounded-[12px] bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      >
        Register For Free
      </button>
    </div>
  );
};

export default HeroContents;
