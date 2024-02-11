import React from 'react';
import { Chef } from '../interfaces/Chef';
import '../ Assets /Chef.scss'


interface Props {
  chefsData: Chef[];
}

const ChefComponent: React.FC<Props> = ({ chefsData }) => {
  return (
    <div>
      {chefsData.map((chef) => (
        <div key={chef.id} >
          <img className="chef-image" src={chef.image} alt={chef.name} style={{alignItems: "center"}}  />
             <div
              className="chef-description"
              dangerouslySetInnerHTML={{
                __html: chef.description.replace(/\n/g, "<br>"),
              }}
            /> <br/>
          <p style={{ position: "relative", left: "10px", fontWeight: "200"}}>{chef.private}'S RESTAURANTS:</p>
        </div>
      ))}
    </div>
  );
};

export default ChefComponent;
