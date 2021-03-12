import React from 'react';

const Navbar =(props)=>{
    
        return(
            <div style={style.nav}>
                <div style={style.cartIconContainer}>
                    <img style={style.cartIcon} src="https://cdn2.iconfinder.com/data/icons/e-commerce-46/64/x-07-512.png" alt="nav-icon"/>
                    <span style={style.cartCount}>{props.count}</span>
                </div>
            </div>
        );
    
}

const style={
    cartIcon:{
        height:35,
        width:37,
        marginRight:20    
    },
    nav:{
        height:70,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        background:'#BBF7D0'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        borderRadius:'50%',
        background:'yellow',
        top:-6,
        padding:'2px 5px',
        right:7,
        fontSize:11,
        position:'absolute'
    }


}

export default Navbar;