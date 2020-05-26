import React from 'react';


export default function CheckoutCartItem({item}) {
    const {title,img,price,total,count} = item;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
               <img src={img} style={{width:"5rem", height:"5rem"}} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">product : </span> 
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">price : </span> 
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                  <div>{count}</div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <strong>{total}</strong>     
            </div>
        </div>
    )
}
