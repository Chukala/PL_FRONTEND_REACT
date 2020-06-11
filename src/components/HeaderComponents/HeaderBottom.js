import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import { Tabs, Tab } from 'react-mdl';
//import { productsData } from '../PopularProduct/productsData';
import { Link } from 'react-router-dom';

class HeaderBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 5
        };
        
    }
    
    toggleCategories() {
        if(this.state.activeTab === 0){
            const Bags = ["Backpacks", "Computer", "Shoulder", "Weekend"];
        return(
            <div className="submenu-div">
                <ul className="submenu-item-ul">
                   {Bags.map(Bag => (
                    <li key={Bag}><Link to= "/productlist">{Bag}</Link></li>
                   ))}
                </ul>
                <div className="img-container">
                     <img src = {"/PL_FRONTEND_REACT/img/lather-img/bags02.jfif"} alt = "img_bags"/>
                </div>
            </div>
        )
        } else if(this.state.activeTab === 1) {
            const Belts = ["Casual belts", "Suits & dress belts", "decorated belts"];
        return (
            <div className="submenu-div">
                <ul className="submenu-item-ul">
                   {
                    Belts.map(Belt => (
                    <li key={Belt}><Link to="/belt">{Belt}</Link></li>
                   ))
                   }
                </ul>
                <div className="img-container">
                     <img src = {"/PL_FRONTEND_REACT/img/lather-img/belts02.jfif"} alt="img_bags"/>
                  </div>
            </div>
        )
        } else if(this.state.activeTab === 2) {
            const Walets = ["Normal wallets","RFID protected wallets","Card holder wallets"];
        return (
            <div className="submenu-div">
                <ul className = "submenu-item-ul">
                    {
                    Walets.map(Walet => (
                    <li key={Walet}><a href="/walet">{Walet}</a></li>
                   ))
                   }
                </ul>
                <div className="img-container">
                     <img src = {"/PL_FRONTEND_REACT/img/lather-img/wallets02.jfif"} alt="img_bags"/>
                  </div>
            </div>
        )
        } else if(this.state.activeTab === 3) {
            const Jackets = ["Double Rider", "The Racer", "The A2 Flight", "The Fencing"];
        return (
            <div className="submenu-div">
                <ul className="submenu-item-ul">
                    {
                    Jackets.map(Jacket => (
                    <li key={Jacket}><Link to = "/jacket">{Jacket}</Link></li>
                   ))
                   }
                </ul>
                <div className="img-container">
                     <img src = {"/PL_FRONTEND_REACT/img/lather-img/07-Fencing-Jacket.jpg"} alt="img_jacket"/>
                  </div>
            </div>
        )
        } else if(this.state.activeTab === 4) {
            const Accessories = ["Cases", "Bracelets", "Home collection"];
        return (
            <div className="submenu-div">
                <ul className="submenu-item-ul">
                    {
                    Accessories.map(Accessorie => (
                    <li key={Accessorie}><Link to="/accessorie">{Accessorie}</Link></li>
                   ))
                   }
               </ul>
               <div className="img-container">
                     <img src = {"/PL_FRONTEND_REACT/img/lather-img/wallets04.jfif"} alt="img_Accessories"/>
                  </div>
            </div>
        )
        }
    }
    render() {

        return (
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="mainmenu pull-center">
                                <div className="mainmenu">
                                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                                        <Tab>Bags</Tab>
                                        <Tab>Belts</Tab>
                                        <Tab>Walets</Tab>
                                        <Tab>Jackets</Tab>
                                        <Tab>Accessories</Tab>
                                    </Tabs>

                                    <div className="submenu-outer-div" onClick={(tabId)=>this.setState({activeTab: tabId})}>{this.toggleCategories()}</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBottom;
