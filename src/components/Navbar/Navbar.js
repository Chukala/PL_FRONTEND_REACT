import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';
import { menuData } from '../MenuData/menuData';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            menus: menuData,
            open: false,
            showMenu: false,
            selected: this.props.initial || -1
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({
                showMenu: false
            }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }
    toggleDropdown() {
        this.setState({
            active: !this.state.active
        });
    }
    handleClick(i) {
        this.setState({
            selected: i
        });
    }
    renderOptions() {

        const {menus } = this.state;
        /*if (!menus.options) {
            return;
        }*/
        return menus.map((menu, i) => {
            
            return ( 
                <li onClick = {evt => this.handleClick(i)} key={i} className={"submenu-li" + (i=== this.state.selected ? 'submenu-li': '')}><a href="/">{menu.options}</a></li>
                );
        });
    }
    renderTitles() {
        const { menus } = this.state;
        return menus.map((menu, i) => {
            return ( 
                <li onClick = {evt => this.handleClick(i)} key={i} className={"submenu-li " + (i=== this.state.selected ? 'submenu-li': '')}><button className="btn">{menu.title}</button></li>
                );
        });    
    }
       
  render() {  

    return (  
       <header id="header">
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6 ">
                            <div className="contactinfo">
                                <ul className="nav nav-pills">
                                    <li><a href="/"><i className="fa fa-phone"></i> +46 73 211 1607</a></li>
                                    <li><a href="/"><i className="fa fa-envelope"></i> info@elp.sileshichukala.se</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="social-icons pull-right">
                                <ul className="nav navbar-nav">
                                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="/"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="header-middle">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-4">
                            <div className="middle-menu pull-left">
                                <ul className="nav navbar-nav">
                                    <Link to ="/women">WOMEN</Link>
                                    <Link to ="/men">MEN</Link>
                                    <Link to ="/children">CHILDREN</Link>    
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="logo pull-center text-center">
                                <Link to="/"><img src={logo} alt="Logo"/></Link>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="middle-menu pull-right">
                                <ul className="nav navbar-nav">
                                    <li><a href="/"><i className="fa fa-lock"></i> Login</a></li>
                                    <li><a href="/"><i className="fa fa-heart"></i> Wishlist</a></li>
                                    <li><a href="/"><i className="fa fa-shopping-cart"></i> Cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="mainmenu pull-left">
                                <div className="mainmenu"> 
                                    <ul onClick={this.showMenu} className = {"submenu-ul " + (this.state.active ? 'submenu-ul' : '')}>
                                        {this.renderTitles()} 
                                    </ul>
                                    { this.state.showMenu ? 
                                        (<div className="submenu-ul" ref={(element)=>{
                                            this.dropdownMenu = element
                                            }}
                                        > 
                                        <ul className="submenu-ul">{this.renderOptions()}</ul>
                                    </div> 
                                    ): (null)
                                    }                         
                                </div>         
                                    
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="search_box pull-right">
                                <input type="text" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom-info">
                <div className="info_bar_msg">
                    <a href="/">Lorem ipsum dolor sit amet,elit.t.o.m. 14/01 </a>
                </div>
                <div className="info_bar_text">
                    <a href="/">Shop</a>
                </div>
           </div>
      </header> 
    );
 }
}

export default Navbar;

 