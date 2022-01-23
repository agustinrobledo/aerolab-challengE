import { NextComponentType } from "next";
import {StyledHero, HeroTitles, Tech, Zone, Cards, Card} from "./styledHero";

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
                <img src="/Illustration.png"/>
                <Cards>

                </Cards>
            </div>
            <Cards>
                <Card rotate="-3deg">
                    <img src="/Saly-1.png"/>
                    <div>
                        <h1>
                            <img src="/browse-icon.png"/>1--Browse
                        </h1>
                        <p>
                            Browse our tech catalog with more than 20 top tech products
                        </p>
                    </div>
                </Card>
                <Card rotate="0deg">
                <img src="/Saly-31.png"/>
                    <div>
                        <h1>
                            <img src="/choose-icon.png"/>2--Choose
                        </h1>
                        <p>
                            Exchange your hard earned AeroPoints for the item you want
                        </p>
                    </div>
                </Card>
                <Card rotate="3deg">
                <img src="/Saly-10.png"/>
                    <div>
                        <h1>
                            <img src="/enjoy-icon.png"/>3--Enjoy
                        </h1>
                        <p>
                            All done, you can relax! We’ll take care of delivery of your tech item!
                        </p>
                    </div>
                </Card>
            </Cards>
        </StyledHero>
    )
};

export default Hero;