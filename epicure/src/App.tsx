import React from 'react';
import Homepage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import data from './data/data.json'; // Import the data.json file

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <Homepage restaurantsData={data} /> <br/>
      <Footer/>
    </div>
  );
};

export default App;
