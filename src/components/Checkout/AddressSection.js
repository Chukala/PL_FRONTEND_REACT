import React,{Component} from 'react';
//import { Link } from 'react-router-dom';
import '../Cart/cart.css';
//import CheckoutCart from '../Checkout/CheckoutCart';
//import Payments from '../Payments/Payments'

class AddressSection extends Component{
    constructor(props){
        super(props)
        this.state = {
           // cartItems: this.props,
            fname: "",
            lname:"",
            country:"",
            saddress:"",
            pcode:"",
            tcode:"",
            phone:"",
            email:""
        }
        this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(event) {
        const {name, value} = event.target;
         this.setState({
             [name] : value
            })
    }
    
    handleSubmit() {
        /*submiting forms to database*/
    }
    render(){      
        return(
            <section>   
                <div className="container">
                    <h4>Billing details</h4>
                    {/*<form action="" method="post">*/}
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="country">Country <span className="text-danger">*</span></label>
                                <select name="country" id="country" className="form-control" value={this.state.country} onChange={this.handleChange}>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Finland">Finland</option>
                                </select>      
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="email">
                                <label htmlFor="email">Email address <span className="text-danger">*</span></label>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                        </div>
                            <div className="col-sm-6">
                            <div className="postcode">
                                <label htmlFor="pcode">Postcode/ZIP <span className="text-danger">*</span></label>
                                <input type="text" name="pcode" value={this.state.pcode} onChange={this.handleChange}/>               
                            </div>
                            </div>      
                        </div>
                    {/*</form>*/}
                </div>               
            </section>
    
        )
        
    }

}

export default AddressSection;