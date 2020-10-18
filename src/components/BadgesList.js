import React from 'react'
import './styles/BadgesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No badges were found</h3>
                </div>
            )
        }

        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id} className="media BadgesList">
                            <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none BadgesList__link">
                                <Gravatar email={badge.email} className="rounded-circle align-self-center mr-3" alt="avatar" />
                                <div className="media-body">
                                    <h5 className="font-weight-bold m-0">{badge.firstName} {badge.lastName}</h5>
                                    <p className="text-primary m-0">
                                        <FontAwesomeIcon icon={faTwitter} /> 
                                        <span className="ml-2">@{badge.twitter}</span>
                                    </p>
                                    <p className="m-0">{badge.jobTitle}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList