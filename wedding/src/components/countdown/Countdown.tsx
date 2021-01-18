import React from 'react';
import moment from 'moment';

import './Countdown.css';

function getdaysUntil() {
    const wedding = moment('2021-01-19');
    const today = moment().format('YYYY-MM-DD');

    return Math.max(0, wedding.diff(today, 'days'));
}

function Countdown() {
    const daysUntilWedding = getdaysUntil();
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="countdown-days">{daysUntilWedding}</h1>
                <h2 className="countdown-label">days until the wedding</h2>
            </header>
        </div>
    );
}

export default Countdown;
