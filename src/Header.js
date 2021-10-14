import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo_beijaflore.jpg'
                    alt=''
                />

            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

            </div>
        </div>
    );
}

export default Header;