import DiscoverIcon from "../../assets/svg/discover.svg";
import ChatIcon from "../../assets/svg/chat.svg";
import CreatorIcon from "../../assets/svg/creator.svg";
import MenuIcon from "../../assets/svg/menu.svg";

const BottomBar = () => {
  return (
    <div class="bg-[#131313] opacity-[0.87] rounded-t-[20px] h-[60px]">
      <div class="container py-4 mx-auto px-4">
        <div class="flex items-center justify-between">
          <span class="flex cursor-pointer flex-col items-center gap-1">
            <img src={DiscoverIcon} alt="discovericon" />
            <p class="text-[12px] text-white font-[300]">Discover</p>
          </span>
          <span class="flex cursor-pointer flex-col items-center gap-1">
            <img src={ChatIcon} alt="chat" />
            <p class="text-[12px] text-white font-[300]">Live Chat</p>
          </span>
          <span class="flex cursor-pointer flex-col items-center gap-1">
            <img src={CreatorIcon} alt="creatoricon" />
            <p class="text-[12px] text-white font-[300]">Creators</p>
          </span>
          <span class="flex cursor-pointer flex-col items-center gap-1">
            <img src={MenuIcon} alt="menu" />
            <p class="text-[12px] text-white font-[300]">Menu</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
