import React, { Component } from 'react';

class Filter extends Component {
    render() { 
        return ( 
        <div className="container">
            <div className="row">
               <div className="col-sm-4">
              {this.props.count} products found.
            </div>
               <div className="col-sm-4">
               <label>
                   Order by
                   <select className="form-control" name="sort"  onChange={(e) => this.props.handleChangeSort(e)}>
                       <option value=""defaultValue>Sort</option>
                       <option value="lowest">lowest to highest</option>
                       <option value="highest">highest to lowest</option>
                   </select>
               </label>
            </div>
                <div className="col-sm-4">
                </div>
             </div>
        </div>
         );
    }
}
 
export default Filter;