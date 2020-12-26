//General imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

//Local imports
import './index.css';

const NavBar = () => {
    return (
        <div>
            <div className="nav_bar">
                <div className="icon">
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
            </div>
        </div>
    )
}

//Exports
export default NavBar;