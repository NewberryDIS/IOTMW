import React, { useState } from 'react';
import Navbar from './navbar'
import Iotmw from './iotmw'
import Iotmwcards from './iotmwcards'
import Iotmwbigbg from './iotmwbigbg'

function App() {
    const [mode, setMode] = useState(3);
    return (
        <div className="App">
            <Navbar onClick={() => setMode((mode+1)%3)} />
            { mode === 1 ? <Iotmw /> : mode === 2 ? <Iotmwcards /> : <Iotmwbigbg /> }
        </div>
    );
}
export default App;
