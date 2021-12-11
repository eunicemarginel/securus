import "./topbar.scss"
import {Person,Mail,LocationOn} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Securus Pte Ltd
                    </a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+65 6899 3088</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>info@securus.com.sg</span>
                    </div>
                    <div className="itemContainer">
                        <LocationOn className="icon"/>
                        <span>130 Jurong Gateway Rd #04-221, Singapore 600130</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
