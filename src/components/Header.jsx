import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './Header.css'
function Header() {
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 10) {
            setShow(true);
        } else {
            setShow(false);
        }
        //console.log(window.scrollY);
        //console.log(show);
    }

    useEffect(()=> {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

  return (
    <div className={`Header ${show && "black-header"}`}>
        <div className="header-components">
        <Link to="/">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"/>
        </Link>
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logo"/>
        </div>
    </div>
  )
}

export default Header