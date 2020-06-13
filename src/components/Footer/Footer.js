import React, { Component } from 'react';
import swish from '../images/logo/swish.png';
import visa from '../images/logo/visa.png';
import mastercard from '../images/logo/mastercard.png';
import collector from '../images/logo/collector.png';
import './footer.css';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( 
            <div id="footer">
                <div className="footerwrapper">
                    <div className="footerbox">
                            <div className="footerboxtext">
                                <h6>Would you Become a member in EthioLeather </h6>
                                <p>EthioLeather allways invites you a fair price in all our product.</p>
                                <a className="footerbutton" href="/ethioLeather">Read more</a>
                            </div>
                    </div>
                    <div className="footerbox">
                        <div className="footerboxtext1">
                            <h6>Contact us</h6>
                            <li><a href="/ethioLeather">0771-499 499</a></li>
                            <li>mån-fre: 9-20 | lör-sön: 10-18</li>
                            <li><a href="/ethioLeather">email us here </a></li>
                            <a href="/ethioLeather"><i className="fa fa-facebook" style={{fontSize:"24px"}}></i></a>
                            <a href="/ethioLeather"><i className="fa fa-twitter" style={{fontSize:"24px"}}></i></a>
                            <a href="/ethioLeather"><i className="fa fa-linkedin" style={{fontSize:"24px"}}></i></a>
                            <a href="/ethioLeather"><i className="fa fa-dribbble" style={{fontSize:"24px"}}></i></a>
                            <a href="/ethioLeather"><i className="fa fa-google-plus" style={{fontSize:"24px"}}></i></a>
                            <a href="/ethioLeather"><i className="fa fa-instagram" style={{fontSize:"24px"}}></i></a>
                        </div>
                    </div>
                    <div className="footerbox">
                        <div className="footerboxtext1">
                            <h6>Explore</h6>
                                <li><a href="/ethioLeather">Account</a></li>
                                <li><a href="/ethioLeather">Integritetspolicy</a></li>       
                        </div>
                    </div>
                    <div className="footerbox">
                        <div className="footerboxtext1">
                            <h6>Payments</h6>
                            <img src={swish} alt="swish"/>
                            <img src={visa} alt="visa"/>
                            <img src={mastercard} alt="mastercard"/>
                            <img src={collector} alt="collector"/>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

    export default Footer;