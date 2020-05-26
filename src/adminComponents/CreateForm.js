import React, { Component } from 'react';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <div className="login-container">
    <div className="clear-fix"></div>	
    <div className="login-form-container">
        <div className="box-wrapper">
            <div className="login">    
            <div className="customer-type"> <strong></strong></div>
            </div>
            <div id="insert_prd_form">
                <form method="post" action="products/addproduct" autocorrect="off" autocapitalize="none">
                    <div className="create_div">
                        <fieldset className="fieldset">
                        <legend>Title:</legend>
                        <input type="text" required="" placeholder="" name="title"/>
                        </fieldset>
                    </div>
                    <div className="create_div">
                        <fieldset className="fieldset">
                        <legend> Partnumber:</legend>
                        <input required="" type="text" placeholder="" name="partnumber"/>
                        </fieldset>
                    </div>
                    <div className="create_div">
                        <fieldset className="fieldset">
                        <legend> Image: </legend>
                        <input required="" type="text" placeholder="" name="image"/>
                        </fieldset>
                    </div>
                    <div className="create_div">
                        <fieldset className="fieldset">
                        <legend> Category: </legend>
                        <input required="" type="text" placeholder="" name="cat"/>
                        </fieldset>
                    </div>
                    <div className="create_div">
                        <fieldset className="fieldset">
                        <legend> Price: </legend>
                        <input required="" type="text" placeholder="" name="price"/>
                        </fieldset>
                    </div>
                    <div className="create_div">
                        <fieldset className="fieldset">
                        <legend> Description: </legend>
                        <input required="" type="text" placeholder="" name="desc"/>
                        </fieldset>
                    </div>
                    <div className="login_btn">
                        <button type="submit" className="" name="submit">Submit</button>
                    </div>
                </form>
            </div>      		
        </div>	
    </div>
</div>
         );
    }
}
 
export default CreateForm;

