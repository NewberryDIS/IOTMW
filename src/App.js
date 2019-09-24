import React from 'react';
import Navbar from './navbar'
import Iotmw from './iotmw'
import Backgrounds from './backgrounds';

function App() {
    return (
        <div className="App">
            <Backgrounds />
            <Navbar />
            <Iotmw />
        </div>
    );
}
export default App;
