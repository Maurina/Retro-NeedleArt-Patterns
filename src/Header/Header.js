import React from 'react';

import './Header.css';

const headerInfo = (props) => {
    return (
        <div className="HeaderStyle">
            <h1 className="pageName">Retro Needle Art Patterns</h1>
            <h3 className="welcome"> Welcome {props.userName}</h3>
        </div>
    )
}

export default headerInfo;