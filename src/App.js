import React from 'react'
import Cart from "./Cart"
import Navbar from "./Navbar"
import firebase from "firebase/app"
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[],
        loading:true            
    }
    this.db=firebase.firestore();
    
} 

componentDidMount(){
  // firebase
  //   .firestore()      //Now we are chaining the data
  //   .collection('products')
  //   .get()
  //   .then((snapshots)=>{
  //       console.log("the snapshots:",snapshots)
  //       snapshots.docs.map((doc)=>{
  //       })
  //       const products=snapshots.docs.map((doc)=>{
  //         const data=doc.data();
  //         data['id']=doc.id;
  //         return data;
  //       })
  //       this.setState({
  //         products,
  //         loading:false
  //       })
  //   })
  
  this.db
    .collection('products')
    .orderBy('price')
    .onSnapshot((snapshots)=>{
      console.log("the snapshots:",snapshots)
      snapshots.docs.map((doc)=>{
      })
      const products=snapshots.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })
      
      this.setState({
        products,
        loading:false
      })
  })
}


handleIncreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    // products[index].qty+=1;
    // this.setState({
    //     products
    // })

    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty:products[index].qty + 1
      })
      .then(()=>{
        console.log("Updated Successfully..")
      })
      .catch((error)=>{
        console.log("Error:",error)
      })
}
handleDecreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0)
        return;
    // products[index].qty-=1;
    // this.setState({
    //     products
    // })
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty:products[index].qty -1
      })
      .then(()=>{
        console.log("updated successfully..")
      })
      .catch((error)=>{
        console.log("Error:",error)
      })
}

handleDeleteQuantity=(id)=>{
    const {products}=this.state;
    // const items=products.filter((item)=>item.id!==id)
    // this.setState({
    //     products:items
    // })
    const docRef=this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(()=>{
        console.log("Deleted Successfully..")
      })
      .catch((error)=>{
        console.log("Error:",error)
      })
    
}
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
getCartTotal=()=>{
  const{products}=this.state;
  let total=0;
  products.forEach((products)=>{
    total=total+(products.qty*products.price);
  })
  return total;
}
addProduct=()=>{
  this.db
    .collection('products')
    .add({
      img:'',
      title:"Washing Machine",
      price:15999,
      qty:1
    })
    .then((docRef)=>{
      console.log("Product been added...",docRef)
    })
    .catch((error)=>{
      console.log("Error ",error);
    })
}

  render(){
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button style={style.btn} onClick={this.addProduct}>Add a product</button> */}
        <Cart
        products={products} 
        increaseQuantity={this.handleIncreaseQuantity} 
        decreaseQuantity={this.handleDecreaseQuantity} 
        deleteQuantity={this.handleDeleteQuantity}
        />
        {loading && <h1>Loading products...</h1>}
        <div style={style.Price}>TOTAL: Rs {this.getCartTotal()}/- </div>
      </div>
    );
  }  
}

const style={
  Price:{
    fontSize:20,
    fontStyle:'bold',
    padding:10
  },
  btn:{
    padding:8,
    margin:5,
    border:"2px solid black",
    borderRadius:10,
    cursor:"pointer",
    background:"transparent"
  }
}

export default App;
