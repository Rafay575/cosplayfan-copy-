import Logo from "../../assets/svg/logo.svg";
import { actions } from "../../store";

const Header = () => {
    return (
        <div class="flex items-center justify-between container lg:max-w-full lg:px-14 mb-12 pt-8 py-4 mx-auto px-4 bg-transparent">
            <img class="w-[120px]  h-[26.43px] md:w-[200px]  md:h-[43.43px]" src={Logo} alt="logo" />
            <div class="flex items-center justify-center gap-6 lg:gap-3">
                <button class="w-28 h-7 hidden lg:block flex-shrink-0 rounded-md border border-white bg-opacity-7 shadow bg-[#0000001e] backdrop-blur text-white text-shadow font-clash font-medium text-xs">
                    CREATORS
                </button>
                <button class="w-28 h-7 hidden lg:block flex-shrink-0 rounded-md border border-white bg-opacity-7 shadow bg-[#0000001e] backdrop-blur text-white text-shadow font-clash font-medium text-xs">
                    LIVE CHAT
                </button>
                <button class="w-[86px] h-[28px] lg:w-28 lg:h-7 flex-shrink-0 rounded-md border bg-red-500 bg-opacity-7 shadow bg-blur text-white text-shadow font-clash font-medium text-xs">
                    BUY TOKENS
                </button>
                <button
                    onclick={actions.toggleLoginModal}
                    class="w-[90px] h-[30px] hidden lg:block flex-shrink-0 rounded-md border border-white bg-gradient-to-r from-purple-600 to-blue-600 shadow text-white text-shadow font-clash font-medium text-xs"
                >
                    SIGN IN
                </button>
                <button class="block lg:hidden flex-shrink-0 ">
                    <img src="/images/burger.png" alt="" class="w-[35px] h-[22px]"/>
                </button>
            </div>
        </div>
    );
};

export default Header;
