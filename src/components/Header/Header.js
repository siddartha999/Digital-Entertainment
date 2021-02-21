import React from "react";
import "./Header.css";

const Header = () => {

    const logoClicked = () => {
        window.scroll(0, 0);
    };

    return (
        <div className="Header">
            <span className="Header-title" onClick={logoClicked}>DE</span>
        </div>
    );
}

export default Header;