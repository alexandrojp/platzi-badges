import { faDivide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Navbar from '../components/Navbar'

function Layout(props) {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout