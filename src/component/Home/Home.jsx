import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Card } from '../card/card';
import Slidecard from "../card/slidecard";
import BookingCard from '../card/BookingCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import utkarsha from "../images/utkarsh.png";
import bajaj from "../images/bajaj-finance.jpg";
import shriram from "../images/Shriram_Transport.jpg";
import mahindra from "../images/images.jpeg";
import TimelineChart from '../card/TimelineChart';
import PieChartComponent from '../card/PieChartComponent';

// Register the necessary elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
    const pieData = {
        labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
        datasets: [
            {
                label: 'Deposit Amt',
                data: [25000, 20000, 15000, 40000],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }
        ]
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className='Home'>
            <div className='home-container'>
                <div className='welcome-message'>
                    <h1>Welcome, Johan Paul</h1>
                </div>
                <div className="grid-container">
                    <div className="pieLine">
                        <div className="item1">
                            <PieChartComponent pieData={pieData} pieOptions={pieOptions} />
                        </div>
                        <div className="item2">
                            <TimelineChart />
                        </div>
                    </div>
                    <div className="box34">
                        <div className="item3">
                            <div className='box-item1'>
                                <Card background="#F3CCF3" pointcolor="#FF76CE" buttoncolor="#850F8D" image={utkarsha} heading="Utkarash Small Finance Bank" point1="Highest Interest Rate" point2="RBI Insured" rate="9.10%p.a" />
                            </div>
                            <div className='box-item2'>
                                <Card background="#EEF5FF" pointcolor="#6DC5D1" buttoncolor="#615EFC" image={bajaj} heading="Bajaj Finserv" point1="Crisl AAA Rated" point2="No Video KYC require" rate="8.80%p.a" />
                            </div>
                            <div className='box-item3'>
                                <Card background="#D6DAC8" pointcolor="#F4EAE0" buttoncolor="black" image={shriram} heading="Shriram Finance" point1="Crisii AAA Rated" point2="No Video KYC require" rate="8.80%p.a" />
                            </div>
                            <div className='box-item4'>
                                <Card background="#FFA27F" pointcolor="#FFBF78" buttoncolor="red" image={mahindra} heading="Mahindra Finance" point1="Crisii AAA Rated" point2="No Video KYC require" rate="8.80%p.a" />
                            </div>
                            <div className='box-item5'>
                                <h2>Get Answer</h2>
                                <div className='item5-continer'>
                                    <div className='slider'>
                                        <div className='slide-answer'>
                                            <p>to all yours questions</p>
                                        </div>
                                        <div className='slide-icons'>
                                            <KeyboardArrowLeftIcon style={{ fontSize: '48px' }} />
                                            <KeyboardArrowRightIcon style={{ fontSize: '48px' }} />
                                        </div>
                                    </div>
                                    <div className='slide-card-container'>
                                        <Slidecard />
                                        <Slidecard />
                                        <Slidecard />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item4">
                            <BookingCard heading="Video KYC" text="Schedule On" date="28" slideheading="Utkarsh SF Bank FD Plan 2" button1="Complete Now" button2="Reschedule" />
                            <BookingCard heading="Pending Payment" text="Pay By" date="30" slideheading="Bajaj Finserv Corp FD 1" button1="Pay Now" button2="Cancel Application" />
                            <BookingCard heading="Upcoming FD Maturity" text="Renew By" date="30" slideheading="Shriram Finance Corp FD !" button1="Renew Now" button2="Compare other FD's" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
