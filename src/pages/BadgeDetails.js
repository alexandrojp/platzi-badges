import React from 'react'
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

function BadgeDetails(props) {
    const badge = props.badge

    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div><Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4" >Edit</Link></div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger" >Delete</button>
                                <Modal isOpen={props.modalIsOpen} onClose={props.onCloseModal}>
                                        Hola modal 
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails