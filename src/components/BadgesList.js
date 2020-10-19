import React, { useState } from "react";
import "./styles/BadgesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

// Custom hook
function useSearchBadges(badges) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setFilteredBadges] = useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const { badges } = props;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  return (
    <div className="BadgeList">
      <div className="form-group">
        <label>Filter badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {filteredBadges.length === 0 && (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )}
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="media BadgesList">
              <Link
                to={`/badges/${badge.id}`}
                className="text-reset text-decoration-none BadgesList__link"
              >
                <Gravatar
                  email={badge.email}
                  className="rounded-circle align-self-center mr-3"
                  alt="avatar"
                />
                <div className="media-body">
                  <h5 className="font-weight-bold m-0">
                    {badge.firstName} {badge.lastName}
                  </h5>
                  <p className="text-primary m-0">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="ml-2">@{badge.twitter}</span>
                  </p>
                  <p className="m-0">{badge.jobTitle}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
