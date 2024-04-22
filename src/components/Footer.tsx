import logo from "/images/logo_single 1.png";
import Icons from "../assets/svg/footerIcons.svg";
import CreditCards from "../assets/svg/creditcards.svg";

const Footer = () => {
    const imageUrl = "/images/footer-bg.png";

    return (
        <div
            class="footer pb-8 bg-no-repeat"
            style={{
                background: `url(${imageUrl})`,
                "background-size": "cover",
                // height:'164px',
                "background-position": "center",
            }}
        >
            <div class="footer-background"></div>
            <div class="footer-content container lg:max-w-full lg:px-14 py-4 mx-auto px-4">
                <div class="text-center">
                    <img class="flex mx-auto my-4 " src={logo} alt="logo" />
                    <h3 class="text-white my-4 font-[600] leading-[20px] md:leading-[24px] text-[32px]">
                        Cosplay Fans
                    </h3>
                    <p class="text-white font-[500] mt-8 leading-[24px] text-[14px] md:text-[22px] md:w-[721px] mx-auto">
                        Cosplay Fans powers immersive experiences with your
                        favorite cosplay creators, allowing users to live chat
                        and view private content.
                    </p>
                </div>

                <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-20 lg:justify-items-stretch">
                    <div class="item1 flex flex-col gap-4">
                        <h1 class="text-[#4A72FF] text-[18px] md:text-[30px] font-[700]">
                            Information
                        </h1>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            Live Chat
                        </a>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            Creators
                        </a>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            FAQs
                        </a>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            Blog
                        </a>
                    </div>
                    <div class="item2 flex flex-col gap-4 lg:ml-20">
                        <h1 class="text-[#4A72FF] text-[18px] md:text-[30px] font-[700]">
                            Privacy Policy
                        </h1>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            Terms of Service
                        </a>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            2257 Statement
                        </a>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            DMCA Policy
                        </a>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            Buyer/Seller Agreements
                        </a>
                    </div>
                    <div class="item3 flex flex-col gap-4 lg:ml-40">
                        <h1 class="text-[#4A72FF] text-[18px] md:text-[30px] font-[700]">
                            Contact Us
                        </h1>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            Billing
                        </a>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            Support
                        </a>
                        <a
                            class="text-white text-[14px] md:text-[18px] md:font-[600]"
                            href=""
                        >
                            Become a Creator
                        </a>
                    </div>
                    <div class="item4 flex justify-end">
                        <img src={Icons} alt="brands" class="m-0 p-0" />
                    </div>
                </div>
                {/*  */}

                <hr class="w-full my-8" />
                <div class="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap gap-1 md:gap-4 mb-20">
                    <img src={CreditCards} alt="" />
                    <span class="text-white text-[14px] md:text-[18px] md:font-[500] lg:mr-40 mt-5 md:mt-0">
                        All Righgt Reserved 2023
                    </span>
                    <span class="text-white block md:hidden text-[14px] md:text-[18px] md:font-[600]">
                        Six Dot Eight Media
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
