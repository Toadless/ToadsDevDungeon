//General imports
import React from 'react';

//Local imports
import NavBar from '../../components/NavBar/index.jsx';
import Footer from '../../components/Footer/index.jsx';

import './index.css'

const Success = () => {
    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <h1 className="title">Success</h1>
                </div>
                <div>
                    <p className="text">You have successfully authorised. Your role will be granted <br /> within the next 10 miniutes.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

//Exports
export default Success;