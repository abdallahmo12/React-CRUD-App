import React, { Component } from 'react';
import './Child.css'

export default class Child extends Component {
  render() {

    // let nameFromParent = this.props.name; 
    let {id ,name , category , price , onSale} = this.props.product;
    let deleteItem = this.props.delete;
    let updateItem = this.props.update;

    return (
    <div className="col-6">
        <div className='fadeInLeft p-3 bg-white position-relative'>
        {/* <h5 className='p-3'> Hello I'm { nameFromParent } </h5> */}
        {
            onSale && <span className='bg-danger p-2 position-absolute top-0 end-0 text-white'>Sale 70%</span>
        }
        <h6> { name } </h6>
        <h6>Price : { price } </h6>
        <h6>Category : { category } </h6>
        <button className='btn btn-success w-100 text-white' onClick={() => deleteItem(id)}>Delete</button>
        <button type='button' onClick={() => updateItem(id)} className='w-100 mt-2 mr-sm-2 btn btn-success'>Update Product</button>
      </div>
    </div>
    )
  }
}
