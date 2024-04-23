import NewFans from "./NewFans";
import OnlineCreators from "./OnlineCreators";
import Popular from "./Popular";
import Spotlight from "./Spotlight";
import Trending from "./Trending";

function Card() {
    const imageUrl = "images/main-bg.png";

    return (
        <div class="w-full h-full bg-black">
            <div
                style={{
                    background: `url(${imageUrl})`,
                    "background-size": "cover",
                    "background-position":'center'
                }}
            >
                <Popular />
                <Spotlight />

                <div
                    style={{
                        background:
                            " linear-gradient(90deg, #263131 50% ,#0b0e0e 100%)",
                    }}
                >
                    <Trending />
                </div>
                <OnlineCreators />
                <NewFans />
            </div>
        </div>
    );
}

export default Card;
