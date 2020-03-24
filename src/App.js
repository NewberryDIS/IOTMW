import React from 'react';
import Navbar from './navbar'
import Iotmw from './iotmw'
import Backgrounds from './backgrounds';
import Banner from './banner';
import Footer from './footer';
import './toplevel.css';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-5551324-4');
ReactGA.pageview(window.location.pathname);
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
