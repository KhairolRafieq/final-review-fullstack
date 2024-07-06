import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LocationCard = (props) => {
    const  location  = props.location;

    useEffect(() => {
       
    }, [props])

    return(
        <div className="location-container">
            {/* <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" /> */}
            <div className="desc">
                <h2>
{/* This for clicking name and bring to website */}
                    <a target='_blank' href={`${location.location_url}`}>
                        { location.name }
                    </a>
                </h2>
                <h3 className='location-desc'>{location.address}</h3>
                <p className='location-desc'>{location.description}</p>
                {location?.image_url && (
                    <div className="image-wrapper"><img src={`http://localhost:8082/${location.image_url}`} alt="" /></div>
                )}
            </div>
        </div>
    )
};

export default LocationCard;