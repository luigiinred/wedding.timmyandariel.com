import React from 'react';

import './Divider.css';

function Divider() {
    const direction = Math.random() >= 0.5 ? 'down' : 'up';
    return (
        <div className={`divider-container ${direction}`}>
            <div className="divider-ivory" />
            <div className="divider-maroon" />
            <div className="divider-rose-gold" />
        </div>
    );
}

export default Divider;
