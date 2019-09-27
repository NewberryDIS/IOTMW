import React from 'react';
import Navbar from './navbar'
import Iotmw from './iotmw'
import Backgrounds from './backgrounds';
import Banner from './banner';
import Footer from './footer';
import './toplevel.css';

function App() {
    return (
        <div className="App">
            <Backgrounds />
            <Banner />
            <Navbar />
            <Iotmw />
            <Footer /> 
        </div>
    );
}
export default App;
