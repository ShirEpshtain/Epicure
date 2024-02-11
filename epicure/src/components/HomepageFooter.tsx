import React from "react";
import "../ Assets /Footer/Footer.scss";

const HomePageFooter: React.FC = () => {
  return (
    <div>
      <footer>
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <div>
          <img src="../images/Footer/About-footer.svg" alt="" />
        </div> <br/>
        <div>
          <img src="../images/Footer/Frame.svg" alt="" />
        </div>
        <br />
        <h2>ABOUT US:</h2> <br />
       
          <img
            src="../images/Footer/Data1.svg"
            alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
              eu ipsum. Cras porta malesuada eros, eget blandit
              turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
              dignissim a vestibulum."
          />
          <br />
          <img
            src="../images/Footer/Data2.svg"
            alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
              eu ipsum. Cras porta malesuada eros."/>
        </div>
      </footer>

  
    </div>
  );
};

export default HomePageFooter;
