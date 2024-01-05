import React from 'react'
import menu from '../../img/menu.svg'
import cart from '../../img/cart.svg'
import search from '../../img/search.svg'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <header className=' w-full p-4 bg-bg-color flex items-center justify-between flex-row fixed top-0 left-0 z-[100] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            {/*Header right*/}
             <div className='flex items-center'>
                <MenuIcon/>
            <h1 className='text-sm font-bold ml-3 mr-3 '>Iranga <span className=' text-blue-300'>Dev</span></h1>
            <div className='flex items-center overflow-hidden ml-2 '>
                <input type='text' placeholder='Search' className=' outline-none p-2 font-semibold text-sm w-[200px] rounded-full '/>
                <img src={search} alt='search' className='w-8 h-8 object-contain cursor-pointer' />
            </div>
        </div>
        {/*header left*/}
        <ShoppingCartIcon/>
        </header>
    )
}

export default Header
