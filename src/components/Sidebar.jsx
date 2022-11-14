import {
    FaBars,
    FaRegChartBar,
} from 'react-icons/fa'
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import languages from '../images/languages-ogo.jpeg'
import lessons from '../images/lessons-logo.jpeg'
import logo from '../images/logo.jpeg'
import statistics from '../images/statistics-logo.jpeg'
import tutors from '../images/tutors-logo.jpeg'

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: '/dashboard',
            name: 'Dashboard',
            icon: <FaRegChartBar />
        },
        {
            path: '/',
            name: 'Tutors',
            icon: <img className="side-logo" src={tutors} alt=""/>

        },
        {
            path: '/languages',
            name: 'Explore Languages',
            icon: <img className="side-logo" src={languages} alt=""/>
        },
        {
            path: '/lessons',
            name: 'My Lessons',
            icon: <img className="side-logo" src={lessons} alt=""/>
        },
        {
            path: '/statistics',
            name: 'Statistics',
            icon: <img className="side-logo" src={statistics} alt=""/>
        }
    ]


    return (
        <div className="container">
            <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <img className="logo" alt="" style={{ display: isOpen ? "block" : "none" }} src={logo} />
                    <div style={{ margin: isOpen ? "30px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                <div className="down_section">
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar