import { NextComponentType } from "next";
import {StyledHero, HeroTitles, Tech, Zone, Cards, Browse} from "./styledHero";

const Hero: NextComponentType = () => {
    return(
        <StyledHero image="/wave-pattern.png">
            <div>
                <HeroTitles >
                    <h3>
                        Explore the
                    </h3>
                    <Tech>
                        tech
                    </Tech>
                    <Zone>
                        zone
                    </Zone>
                    <p>
                    Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
                    </p>
                    <button>
                        View all products
                        <img src="/Vector2.png"/>
                    </button>
                </HeroTitles>    
                <img src="/Saly-19.png"/>
                <Cards>

                </Cards>
            </div>
            <Cards>
                <Browse>
                    <img src="/Saly-1.png"/>
                    <div>
                        <img src="/browse-icon.png"/>
                        <h1>
                            1-Browse
                        </h1>
                    </div>
                </Browse>
            </Cards>
        </StyledHero>
    )
};

export default Hero;