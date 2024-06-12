import React from 'react';
import "./card.css";
import VerifiedIcon from '@mui/icons-material/Verified';

export const Card = (props) => {
    return (
        <div className='card' style={{ backgroundColor: props.background }}>
            <div className='card-heading'>
                <img src={props.image} alt="logo" className='heading-log' />
                <h6>{props.heading}</h6>
            </div>
            <div className='points'>
                <span className='point' style={{ backgroundColor: props.pointcolor }}><VerifiedIcon />{props.point1}</span>
                <span className='point' style={{ backgroundColor: props.pointcolor }}><VerifiedIcon />{props.point2}</span>
            </div>
            <div className='card-footer'>
                <div className='interest'>
                    <p>Interest Upto</p>
                    <p>{props.rate}</p>
                </div>
                <div className='button' style={{ backgroundColor: props.buttoncolor }}>
                    <span style={{ color: 'white' }}>Book</span>
                </div>
            </div>
        </div>
    );
}
