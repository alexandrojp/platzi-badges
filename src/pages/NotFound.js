import React from 'react'
import { Link } from 'react-router-dom'
import img404 from '../images/404.svg'
import './styles/404.css'

function NotFound() {
    return (
        <div className="Fondo">
            <img src={img404} alt="404" />
            <h2 className="mt-0">Page Not Found</h2>
            <div className="text-center mt-2">
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound