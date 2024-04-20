import NewFans from "./NewFans";
import OnlineCreators from "./OnlineCreators";
import Popular from "./Popular";
import Spotlight from "./Spotlight";
import Trending from "./Trending";

function Card() {
    const imageUrl = "src/assets/images/bg1.png";

    return (
        <div class="w-full h-full">
            <div
                style={{
                    background: `url(${imageUrl})`,
                    "background-size": "cover",
                    "background-position": "top",
                }}
            >
                <Popular />
                <Spotlight />
            </div>
            <div
                style={{
                    
                    background:
                        " linear-gradient(90deg, #263131 50% ,#0b0e0e 100%)",
                }}
            >
                <Trending />
            </div>
            <div
                style={{
                    background: `url(${imageUrl})`,
                    "background-size": "cover",
                    "background-position": "top",
                }}
            >
                <OnlineCreators />
                <NewFans />
            </div>
        </div>
    );
}

export default Card;
