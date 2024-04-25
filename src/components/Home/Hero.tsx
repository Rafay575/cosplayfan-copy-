import Header from "./Header";
import HeroContents from "./HeroContents";
import { createSignal, onCleanup } from "solid-js";
// Create a signal to hold the image URL

const Hero = () => {
    const [imageUrl, setImageUrl] = createSignal(false);

    // Function to update imageUrl based on device width
    const updateImageUrl = () => {
        if (window.innerWidth < 992) {
            setImageUrl(true);
            console.log("this is url of < 548 images ", window.innerWidth);
        } else {
            setImageUrl(false); // For desktop or larger devices
            console.log("this is url of images ", window.innerWidth);
        }
    };

    // Set initial imageUrl based on device width
    updateImageUrl();

    // Update imageUrl when window is resized
    window.addEventListener("resize", updateImageUrl);

    // Cleanup function to remove event listener
    onCleanup(() => {
        window.removeEventListener("resize", updateImageUrl);
    });
    const headerStyle = `
      background:  url('images/Header.png');
      height: 100vh;
      background-size: 100% 100vh;
      background-repeat:no-repeat;
      background-position: center;
    
      z-index:-1;
  `;
    const headerStyle1 = `
      background:  url('images/Header1.png');
      height: 100vh;
      background-size: cover;
      background-repeat:no-repeat;
      background-position: center;
  
      z-index:-1;
  `;

    return (
        <div>
            <section
                class="hero w-full h-screen bg-no-repeat bg-center bg-contain md:bg-fixed md:h-full "
                style={imageUrl() ? headerStyle1 : headerStyle}
            >
                <Header />
                <HeroContents />
            </section>
        </div>
    );
};

export default Hero;
