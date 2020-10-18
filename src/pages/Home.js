import React from 'react'
import platziConfLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'
import './styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="Home__content">
                            <div className="Home__content-startnow">
                                <img src={platziConfLogo} alt="Logo" />
                                <h1 className="mt-5">PRINT YOUR BADGES</h1>
                                <p>The easiest way to manage your conference</p>
                                <div className="text-center">
                                    <Link to="/badges/new" className="btn btn-primary">Start now</Link>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="Home__content">
                            <img src={astronauts} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home