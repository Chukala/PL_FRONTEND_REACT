import React, { Component } from 'react';
import '../Navbar/Navbar.css';

class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (     
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
        );
    }
}
 
export default TopHeader;
