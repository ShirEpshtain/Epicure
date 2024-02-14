import React from "react";
import "../../ Assets /Icons/Icons.scss";

const HomePageIcons: React.FC = () => {
    const path = "../images/Icons/"
    return (
        <div className="icons-contanier">
            <p></p><br/>
            <h2 className="sentcence">THE MEANING OF OUR ICONS: </h2> <br/>
            <div style={{textAlign: "center"}}>
            <div>
                <img src={`${path}spicy.svg`} alt="" />
                <p>Spicy</p>
            </div> <br/><br/>
            <div>
                <img src={`${path}vegitarian.svg`}alt="" />
                <p>Vegitarian</p>
            </div> <br/><br/>
            <div>
                <img src={`${path}vegan.svg`}  alt="" />
                <p>Vegan</p>
            </div> 
            </div>
        </div>
    )
}

export default HomePageIcons