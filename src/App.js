import React, { Component } from 'react';
import './App.css';
import Parent from './Components/Parent/Parent';

export default class App extends Component {
  render() {
    return (
      <>

        <Parent />
        {/* <Home />
        <About /> */}
      </>
    )
  }
}



// import { useState } from 'react';
// import './App.css';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Home from './Components/Home/Home';

// function App() {
//   const [allProducts , setProducts] = useState([
//     {id:1,name:'product1' , desc:'description1',onsale:true},
//     {id:2,name:'product2' , desc:'description2',onsale:false},
//     {id:3,name:'product3' , desc:'description3',onsale:false},
//     {id:4,name:'product4' , desc:'description4',onsale:false}
//   ]);
//   const deleteItem = (id)=> {
//     let Products = allProducts;
//     let newProducts = Products.filter(item => item.id !== id);
//     setProducts(newProducts);
//   }
//   return (
//     <div className="App">
//       App
//       <Home prod={allProducts} deleteItem={deleteItem}/>
//       <Contact />
//       <About />
//     </div>
//   );
// }

// export default App;
