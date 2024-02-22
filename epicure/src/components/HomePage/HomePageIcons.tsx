import React from "react";
import "../../ Assets /Icons/Icons.scss";

const HomePageIcons: React.FC = () => {
    const path = "../images/Icons/"
    return (
        <div className="icons-contanier">
            <p></p><br/>
            <p className="sentcence">THE MEANING OF OUR ICONS: </p> 
            <div className="icons-wrapper">
            <div className="icon-item">
                <img src={`${path}spicy.svg`} alt="" />
                <p>Spicy</p>
            </div> <br/><br/>
            <div className="icon-item">
                <img src={`${path}vegitarian.svg`}alt="" />
                <p>Vegitarian</p>
            </div> <br/><br/>
            <div className="icon-item">
                <img src={`${path}vegan.svg`}  alt="" />
                <p>Vegan</p>
            </div> 
            </div>
        </div>
    )
}

export default HomePageIcons