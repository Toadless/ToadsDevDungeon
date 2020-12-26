//General imports
import React from 'react';

//Local imports
import NavBar from '../../components/NavBar/index.jsx';
import Footer from '../../components/Footer/index.jsx';

import './index.css'

const Err = () => {
    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <h1 className="title">Error</h1>
                </div>
                <div>
                    <p className="text">An error occured and you couldnt be authenticated. Make sure that you <br />
are in the discord server. Try again in 10 miniutes. If this error persists <br /> please contact Toadless.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

//Exports
export default Err;