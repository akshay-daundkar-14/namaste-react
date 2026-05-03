import { LOGO_URL } from "../utility/constants";
import { useState } from "react";

const Header = () =>
{

    const [userState,setUserState] = useState("Login");

    const fn_UserStateBtnClicked = () =>{
        (userState === "Login") ? setUserState("Logout") : setUserState("Login");
    };


    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
                <button className="btn" onClick={fn_UserStateBtnClicked}>{userState}</button>
            </div>
        </div>
    );
}

export default Header;