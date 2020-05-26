import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import BottomBar from './BottomBar';
//import Main from '../Main/Main';

 const Header = () => {
    return (
        <React.Fragment>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom/>
            <BottomBar />
        </React.Fragment>  
    )
}

export default Header;