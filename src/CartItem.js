import React from 'react';

const CartItem =(props)=>{
        const{price,title,qty}=props.products    //Object distructring
        const{products,increaseQuantity,decreaseQuantity ,deleteQuantity}=props
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={products.img}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize:20} }>{title}</div>
                    <div style={ { color:'#777'} }>Rs: {price}</div>
                    <div style={ { color:'#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        {/* <img alt="increase" className="action-icons" onClick={()=> increaseQuantity(products)} src="data:image/png;base64,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"/>
                        <img alt="decrease" className="action-icons" onClick={()=> decreaseQuantity(products)} src="https://www.flaticon.com/svg/vstatic/svg/992/992514.svg?token=exp=1614776007~hmac=7f5c78aa24483d01e2ad42b735fd3858" />
                        <img alt="delete" className="action-icons" onClick={()=> deleteQuantity(products.id)} src="https://www.flaticon.com/svg/vstatic/svg/1214/1214926.svg?token=exp=1614776150~hmac=7eea092f969d2c161950011b8cd3d389" />         */}
                         <img alt="increase" className="action-icons" onClick={()=> increaseQuantity(products)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAhnJv7bpYdomw0PR5zf9lPJXFSFgQ-uJCA&usqp=CAU"/>
                        <img alt="decrease" className="action-icons" onClick={()=> decreaseQuantity(products)} src="https://cdn.iconscout.com/icon/free/png-256/minus-2390337-2003911.png" />
                        <img alt="delete" className="action-icons" onClick={()=> deleteQuantity(products.id)} src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png" />   
                    </div>
                </div>
            </div>
        );
    
}
const styles={
    image:{
        height:120,
        width:120,
        borderRadius:20,
        background:'#ccc'
    }
}
export default CartItem;