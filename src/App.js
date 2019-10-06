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
            <div className="maintop">

            <Backgrounds />
            <Banner />
            <Navbar />
            <Iotmw />
            </div>
            <div className="mainbottom">

            <Footer /> 
            </div>
        </div>
    );
}
export default App;
