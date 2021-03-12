import React from 'react';
import CartItem from './CartItem';

const Cart=(props)=>{
        const {products}=props;
        return(
            <div className="Cart">
                {products.map((products)=>{
                   return <CartItem products={products} key={products.id} increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity} deleteQuantity={props.deleteQuantity} />
                    
                }) }
            </div>
        );
    
}

export default Cart;