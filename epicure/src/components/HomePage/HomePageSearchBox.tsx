import React from 'react';
import '../../ Assets /HomePage/HomePageSearchBox.scss';

const HomePageSearchBox: React.FC = () => {
    return (
        <div className='hero-pic-div'>
            <div className='hero-div'>
                <p>
                    Epicure works with the top chef restaurants in Tel Aviv
                </p>
                <div className='input-search'>
                    <input placeholder='Search for restaurant cuisine, chef' />
                    <img style={{marginLeft: '15px'}} src='../images/mini_glass.jpeg' alt='Search Icon' />
                </div>
            </div>
        </div>
    );
}

export default HomePageSearchBox;
