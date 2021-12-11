import "./contact.scss"
import { useEffect, useState } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage (true)
    }

    const currentYear = new Date().getFullYear();

    return (
        <div className="contact" id="contact">
            {/* <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div> */}

            <div className="right">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks! I will reply ASAP :)</span>}
                </form>

            </div>
            
        </div>

        
    )
}