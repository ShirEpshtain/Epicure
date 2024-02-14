import React, { useState } from 'react';
import { Chef } from '../interfaces/Chef';
import '../ Assets /Chefs.scss'; 

interface Props {
  chefsData: { chefs: Chef[] };
}

const Chefs: React.FC<Props> = ({ chefsData }) => {
  const { chefs } = chefsData;
  const [filter, setFilter] = useState<string>('all');

  // Apply filters based on the selected filter
  const filteredChefs = () => {
    switch (filter) {
      case 'new':
        return chefs.slice().sort((a, b) => a.experience - b.experience); 
      case 'mostViewed':
        return chefs.slice().sort((a, b) => b.rating - a.rating); 
      default:
        return chefs; 
    }
  };

  // Render filtered chefs
  const renderChefs = () => {
    const filtered = filteredChefs();
    return (
      <div className="chef-list">
        {filtered.map((chef) => (
          <div key={chef.id} >
            <img className="chefs-chef-image" src={chef.image} alt={chef.name} />
          </div> 
        ))}
      </div> 
    );
  };

  return (
    <div className="chefs-container"> 
      <h1>Chefs</h1> 
      <div className="chefs-filter-buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('new')} className={filter === 'new' ? 'active' : ''}>New</button>
        <button onClick={() => setFilter('mostViewed')} className={filter === 'mostViewed' ? 'active' : ''}>Most Viewed</button>
      </div> <br/><br/>
      {renderChefs()}
    </div>
  );
};

export default Chefs;
