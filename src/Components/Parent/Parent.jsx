import React, { Component } from 'react';
import Child from '../Child/Child';
import './Parent.css';

export default class Parent extends Component {

    constructor(){
        super();
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);

    }
  
  state={
    acdemyName : "Route Academy",
    clas : 'text-white',
    a3zama : true ,
    products : [
        { id:1 , name : 'OPPO' , category: 'Mobile' , price: 9000 , onSale: false},
        { id:2 , name : 'Samsung' , category: 'TV' , price: 12000 , onSale: true},
        { id:3 , name : 'LG' , category: 'Mobile' , price: 6000 , onSale: true},
        { id:4 , name : 'Xaomi' , category: 'Mobile' , price: 7000 , onSale: false},
    ],
  }

  toggleChild = () =>{
    this.setState({
        a3zama : this.state.a3zama === true ? false : true,
    })
  }
  
  deleteItem(ID){
    let AllProducts = [...this.state.products];
    let filterdArr = AllProducts.filter( item => item.id !== ID);
    this.setState({
        products :filterdArr
    });
  }
  addItem(){
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let sale = document.getElementById("sale").checked === true ? true : false;
    let len = this.state.products.length;
    this.setState({
        products : [...this.state.products, {id:len +1 , name , category , price , onSale: sale}]
    })
    // console.log(sale);
  }

  updateItem(id){
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let sale = document.getElementById("sale").checked === true ? true : false;
    //way 1
    // let AllProducts = [...this.state.products];
    // let spcProduct = this.state.products.find( item => item.id === id);
    // // AllProducts[id]
    // spcProduct.name = name;
    // spcProduct.category = category;
    // spcProduct.price = price;
    // spcProduct.onSale = sale;
    // // AllProducts = AllProducts.filter( item => item.id !== id);
    // // AllProducts = [...AllProducts , spcProduct];
    // // this.setState({
    // //     products: AllProducts
    // // })
    // let filtered = this.state.products.filter(i => i.id !== id);
    // this.setState({
    //     products : [{id , name : spcProduct.name , category:spcProduct.category ,price: spcProduct.price , 
    //     onSale : spcProduct.onSale
    //     },...filtered]
    // })

    //way 2 
    let specificProd = this.state.products.find(item => item.id === id);
    let AllProducts = [...this.state.products];
    AllProducts.map( element => {
        if( element.id == specificProd.id ){
            element.name =name;
            element.category = category;
            element.price = price;
            element.onSale = sale;
        }

    })
    this.setState({
        products: AllProducts
    })
  }
    render() {
    return <>
    
        <div className="container mt-5 p-3 bg-primary rounded fadeInDown">
            <h4 className={this.state.clas}> {this.state.acdemyName} </h4>
            <form className='form-inline'>
            <div className='form-group'>
                <input type='text' className='form-control mb-2 mr-sm-2' placeholder='name' aria-label='name' id='name'/>
            </div>
            <div className='form-group'>
                <input type='text' className='form-control mb-2 mr-sm-2' placeholder='category' aria-label='category' id='category'/>
            </div>
            <div className='form-group'>
                <input type='text' className='form-control mb-2 mr-sm-2' placeholder='price' aria-label='price' id='price'/>
            </div>
            <div className="checkbox text-white">
                <label><input id='sale' type="checkbox" aria-label='onSale'/> has Sale ? </label>
            </div>
            <div className='form-group'>
                <button type='button' onClick={this.addItem} className='form-control mb-2 mr-sm-2 btn btn-success'>Add Product</button>
            </div>
            </form>
            {/* { this.state.a3zama && <Child name={this.state.acdemyName} prod={this.state.product} /> } */}
            
            <div className="row g-3">
                {
                    this.state.a3zama ? this.state.products.map(product => 
                        <Child key={product.id} product={product} delete={this.deleteItem} update={this.updateItem} /> ): ""
                }
            </div>

            <button onClick={this.toggleChild} className='btn btn-success rounded fadeInUp mt-3'>toggle Child</button>
        </div>
    
    </>
  }
}
