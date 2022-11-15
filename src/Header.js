import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link, useNavigate} from "react-router-dom";
import {useStateValue} from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header__logo" />
        </Link>
        
        <div className="header__search"> 
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <div onClick={user ? handleAuthentication : e => navigate('/login', { replace: true })} className="header__option">
                <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In' }</span>
            </div>
            
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header;