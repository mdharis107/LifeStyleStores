import React from 'react'
import { useState } from 'react';
import styles from "./Cart.module.css"

const CartHelp = ({item,handleC}) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const remove=(id)=>{
        let newarr =[];
        cart.map(Item=>{
            if(Item._id !== `${id}`){
                newarr.push(Item)
            }
        })
        localStorage.setItem("cart",JSON.stringify(newarr))
        handleC()
    }
  return (
    <div className={styles.item_container}>
          <div className={styles.item_img_main}>
            <div className={styles.item_img_1}><img src={item.img} alt=''/></div>
            <div className={styles.margins}>
               <div className={styles.item_des} >{item.productName}</div>
               <div className={styles.item_price}>₹{item.price}<span>₹{item.discount} saved</span></div>
               <div className={styles.item_size}>
                <span className={styles.demo2}>Colour: <span className={styles.demo3}>{item.color}</span> </span><br></br>
                <span className={styles.demo2}>Size: <span className={styles.demo4}>{item.size}</span></span>
               </div>
            </div>
          </div>
          <div className={styles.item_dilivery}>Delivery inEnter Pincode above</div>
          <div className={styles.item_btn}>
            <div><button onClick={()=>remove(item._id)}>Remove</button></div>
            <div><button>Move to favourites</button></div>
          </div>
         </div>
  )
}

export default CartHelp