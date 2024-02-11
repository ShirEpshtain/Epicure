import React from 'react';
import '../ Assets /HomePageSearchBox.scss';

const HomepageSearchBox: React.FC = () => {
    return (
        <div className='homepage-pic'>
            <div className='search-div'>
                <div className='text-search-div'>Epicure works with the top chef restaurants in Tel Aviv</div>
                <div className='input-container'>
                    <input type="text" id='input' placeholder="Search for restaurant cuisine, chef"></input>
                </div>
            </div>
        </div>
    );
}

export default HomepageSearchBox;
