import React, { Component } from 'react';
import '../Navbar/Navbar.css';

class BottomBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header-bottom-info">
                <div className="info_bar_msg">
                    <a href="/">Lorem ipsum dolor sit amet,elit.t.o.m. 14/01 </a>
                </div>
                <div className="info_bar_text">
                    <a href="/">Shop</a>
                </div>
            </div>
         );
    }
}
 
export default BottomBar;