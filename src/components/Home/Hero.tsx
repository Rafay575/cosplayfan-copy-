import Header from "./Header";
import HeroContents from "./HeroContents";

function Hero() {
  const imageUrl = "src/assets/images/hero-bg.png";
  return (
    <section class="hero w-full h-screen bg-no-repeat bg-center bg-contain md:bg-fixed md:h-full " 
    style={{ 
      background: `url(${imageUrl})`,
      height: '100vh',
      "background-size": 'cover',
      "background-position":'right',
      'background-attachment':'fixed'
    }}
      >
      <Header />
      <HeroContents />
    </section>
  );
}

export default Hero;
