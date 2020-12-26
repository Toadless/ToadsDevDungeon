//General imports
import React from 'react';

//Local imports
import NavBar from '../../components/NavBar/index.jsx';
import Footer from '../../components/Footer/index.jsx';

import './index.css'

const LandingPage = () => {
    const login = () => window.location.href = 'https://dev-dungeon.herokuapp.com/api/auth/discord';
    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <h1 className="title">Dev Dungeon</h1>
                </div>
                <div>
                    <p className="text">Please authenticate your self with discord to get access to the discord <br /> server. Once authenticated you will get the verified role in the discord <br /> server.</p>
                </div>
                <div>
                    <button
                        children="Verify Yourself"
                        onClick={login}
                        className="button"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

//Exports
export default LandingPage;