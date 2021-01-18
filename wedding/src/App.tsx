import React from 'react';
import logo from './logo.svg';
import './App.css';

import Countdown from './components/countdown/Countdown';
import Divider from './components/divider/Divider';
import Faq from './components/FAQ/Faq';

function App() {
    return (
        <div>
            <Countdown />
            <Divider />
            <Faq />
            <Divider />
        </div>
    );
}

export default App;
