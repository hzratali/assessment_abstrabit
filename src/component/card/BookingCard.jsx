import React from 'react';
import "../card/BookingCard.css";
const BookingCard = (props) => {
    return (
        <div className='bookingcard'>
            <div className='booking-container'>
                <h3>{props.heading}</h3>
                <div className='date-container'>
                    <div className='date'>
                        <h5>{props.text}</h5>
                        <div className='datecontainer'>
                            <span style={{ fontSize: '40px', textAlign: 'center', backgroundColor: '#EEEEEE', display: 'block' }}>{props.date}</span>
                            <h6 >Oct, 2023</h6>
                        </div>
                    </div>
                    <div className='date-text'>
                        <h5>
                            {props.slideheading}
                        </h5>
                        <div className='deposite-contaner'>
                            <div className='deposit'>
                                <p>Deposite Amt</p>
                                <p style={{ color: '#111' }}>25,000</p>
                            </div>
                            <div className='tennure'>
                                <p>Tennure</p>
                                <p style={{ color: '#000' }}>18 Months</p>
                            </div>
                            <div className='interestrate'>
                                <p>Interest Rate</p>
                                <p style={{ color: '#000' }}>8.10%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='button-container'>
                    <div className='button1'>
                        {props.button1}
                    </div>
                    <div className='button2'>
                        {props.button2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCard