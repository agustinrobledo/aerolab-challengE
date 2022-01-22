import type { NextComponentType } from "next";
import Image from "next/image";
import {StyledNavbar, VectorStyled} from "./styledNavbar";
const Navbar: NextComponentType = () => {
    return (
        <StyledNavbar>
            <div className="aerolab-logo">
                <a href="/">
                    <Image src="/aerolab-logo.png" width={100} height={50} quality={100}/>
                </a>
            </div>
            <div>
                <button>
                    <img src="/Icons.png"/>
                    10.000
                    <VectorStyled src="/Vector.png"/>
                </button>
            </div>
        </StyledNavbar>
    );
};

export default Navbar;