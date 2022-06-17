import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';

function Header() {
  return (
    <div className='header' >
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo'/>
        

        <div className='header_search' >
            <input className='header_searchInput' type="text" />

            <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>

            <div className='header_option'>
                <span className='header_optionOne'>Hello Guest</span>
                <span className='header_optionTwo'>Sign In</span>
            </div>

            <div className='header_option'>
                <span className='header_optionOne'>Returns</span>
                <span className='header_optionTwo'>& Orders</span>
            </div>

            <div className='header_option'>
                <span className='header_optionOne'>Your</span>
                <span className='header_optionTwo'>Prime</span>
            </div>

            <div className='header_optionBascket' >
                <ShoppingBasket  />
                <span className='header_optionTwo header_basketCount'>0</span>
            </div>

        </div>

    </div>

    
  )
}

export default Header