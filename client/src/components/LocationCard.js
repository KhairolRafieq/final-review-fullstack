import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LocationCard = (props) => {
    const  location  = props.location;

    useEffect(() => {
       
    }, [props])

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-location/${location._id}`}>
                        { location.name }
                    </Link>
                </h2>
                <h3>{location.address}</h3>
                <p>{location.description}</p>
            </div>
        </div>
    )
};

export default LocationCard;