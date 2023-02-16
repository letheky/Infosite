import React from 'react'
import './headerStyle.scss'
import img from '../../imgs/personal.png'

export default function Header(){
    return (
        <div className="header">
            <img src={img} alt="personal image" />
            <h2>Le The Ky - LeeCentury</h2>
            <h3>Front-end Developer</h3>
            <p>github/letheky</p>
            <div className="btn-row">
                <button><i class="fa-regular fa-envelope"></i> Email</button>
                <button><i class="fa-brands fa-linkedin"></i> Linkedin</button>
            </div>
        </div>
    )
}