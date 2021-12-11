import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 500,
            backSpeed: 60,
            strings: ["Physical Guarding", "Event Security", "Remote Monitoring"],
         });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <img src="assets/securus.png" alt="" />
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Be Safe and Secure</h2>
                    <h1>Get a Quote</h1>

                    <button type="submit">ENQUIRE NOW</button>
                    <br />
                    <h3>We Offer <span ref={textRef}></span></h3>
                </div>
                <a href="#works">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
