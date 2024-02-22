// import React, { useEffect, useState } from "react";
// import '../../ Assets /HomePage/HomePageFooter.scss';

// const HomePageFooter: React.FC = () => {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 1024); 
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
  
//   return (
//     <div>
//       <footer>
//       <div className="HP-footer-container" style={{ backgroundColor: "#FAFAFA" }}>
//         <div >
//           <img className="HP-footer-Aboutimg" src="../images/Footer/About-footer.svg" alt="" />
//         </div> <br/>
//         { !isDesktop && (
//         <div>
//           <img className="HP-footer-Frameimg" src="../images/Footer/Frame.svg" alt="" />
//         </div>
//         )}
//         {isDesktop && (
//           <div>
//           <img className="HP-footer-Frameimg" src="../images/Footer/FrameDesktop.png" alt="" />
//         </div>
//         )}
//         <br />

//         <h2 className="HP-footer-about-label">ABOUT US:</h2> <br />
       
//           <img
//             src="../images/Footer/Data1.svg"
//             alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
//               eu ipsum. Cras porta malesuada eros, eget blandit
//               turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
//               dignissim a vestibulum."
//           />
//           <br />
//           <img
//             src="../images/Footer/Data2.svg"
//             alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
//               eu ipsum. Cras porta malesuada eros."/>
//         </div>
//       </footer>

  
//     </div>
//   );
// };

// export default HomePageFooter;



import React, { useEffect, useState } from "react";
import '../../ Assets /HomePage/HomePageFooter.scss';

const HomePageFooter: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); 
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
      <footer>
      {/* <div className="HP-footer-container" style={{ backgroundColor: "#FAFAFA" }}> */}
        
        { !isDesktop && (
        <div className="HP-footer-container" style={{ backgroundColor: "#FAFAFA" }}>
          <img className="HP-footer-Aboutimg" src="../images/Footer/About-footer.svg" alt="" /><br/><br/><br/>
          <img className="HP-footer-Frameimg" src="../images/Footer/Frame.svg" alt="" /> <br/><br/>
          <h2 className="HP-footer-about-label">ABOUT US:</h2> <br />
          <img
            src="../images/Footer/Data1.svg"
            alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
              eu ipsum. Cras porta malesuada eros, eget blandit
              turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
              dignissim a vestibulum."
          />
          <br /><br/>
          <img
            src="../images/Footer/Data2.svg"
            alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
              eu ipsum. Cras porta malesuada eros."/> <br/><br/>
        </div>

        )}
        {isDesktop && (
          <div className="HP-footer-container" style={{ backgroundColor: "#FAFAFA" }}>
            <div>
            <h2 className="HP-footer-about-label">ABOUT US:</h2> 
            <p className="HP-footer-data1-desktop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
              eu ipsum. Cras porta malesuada eros, eget blandit
              turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
              dignissim a vestibulum.</p>
            <p className="HP-footer-data1-desktop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
              eu ipsum. Cras porta malesuada eros
            </p><br/>

          <img className="HP-footer-Frameimg" src="../images/Footer/FrameDesktop.png" alt="" />
          </div>
          <div>
          <img className="HP-footer-Aboutimg" src="../images/Footer/About-footer.svg" alt="" />
          </div><br/><br/>
        </div>
        )}
    
      </footer>

  
    
  );
};

export default HomePageFooter;
