import Header from "./Header";
import HeroContents from "./HeroContents";

    const imageUrl =  "/images/Header.png";
    const headerStyle = `
      background: url(${imageUrl});
      height: 100vh;
      background-size: cover;
      background-repeat:no-repeat;
      background-position: center;
      background-attachment: fixed;
      z-index:-1;
  `;

    const Hero = () => {
        return (
            <div >
                <section
                    class="hero w-full h-screen bg-no-repeat bg-center bg-contain md:bg-fixed md:h-full "
                    style={headerStyle}
                >
                    <Header />
                    <HeroContents />
                </section>
            </div>
        );
    };

export default Hero;
