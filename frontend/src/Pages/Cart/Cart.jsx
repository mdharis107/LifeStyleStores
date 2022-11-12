import React from 'react'
import styles from "./Cart.module.css"
import {Link} from "react-router-dom"
const Cart = () => {
 
    const cartData = JSON.parse(localStorage.getItem("cart"))
    

   


  return (
    <>
    <div className={styles.navbar_cart}></div>   {/* import navbar at attch here */}

    <div className={styles.basket_head}>
        <h1>Your Shopping Basket</h1>
        </div>
     {/* product count div */}
     <div className={styles.product_count}><span>1</span><span>Product</span></div> 
     {/* all cart functionality div starts   */}
     <div className={styles.cart_main}>
        {/* mapping of data starts here */}
        {cartData.map(item => (
        <div className={styles.items_div}>
         <div className={styles.item_container}>
          <div className={styles.item_img_main}>
            <div className={styles.item_img_1}><img src={item.img} alt=''/></div>
            <div>
               <div className={styles.item_des} >{item.productName}</div>
               <div className={styles.item_price}>{item.price}</div>
               <div className={styles.item_size}>
                <span>Colour: {item.colour}</span><br></br>
                <span>Size: {item.size}</span>
               </div>
            </div>
          </div>
          <div className={styles.item_dilivery}>Delivery inEnter Pincode above</div>
          <div className={styles.item_btn}>
            <div><button>Remove</button></div>
            <div><button>Move to favourites</button></div>
          </div>
         </div>
         
        
        </div>
        ))}
        {/* mapping of data ends here */}
        {/* pin check div start */}
        <div className={styles.price_main}>
            
            <div className={styles.pin_check}>
                <div className={styles.pin_check_in}>
                <span>Deliver to</span>
                <input/>
                <button>Check</button>
                </div>
            </div>
            {/* offer section start */}
            <div className={styles.offer_div}>
                <div className={styles.offer_div2}>
                <div className={styles.offer_img_div}><img src='https://www.lifestylestores.com/static/icons/gift-box.png' alt='offer'/></div>
                <div className={styles.text_offer}>
                    <div className={styles.for}>Offers for you !</div>
                    <div className={styles.for1}>Choose and apply voucher in 2 simple</div>
                    <div className={styles.for1}>steps</div>
                   
               </div>
               </div>
            </div>
            {/* total pricing calculation div started */}
            <div className={styles.price_calc}>
                <div className={styles.mrp_div}>
                    <div>Total MRP</div>
                    <div>5999</div>
                </div>
                <div className={styles.discount_div}>
                    <div>Offer discount</div>
                    <div>-315</div>
                </div>
                <div className={styles.charge_div}>
                    <div>Shipping charge</div>
                    <div>Free</div>
                </div>
                <div className={styles.total_div}>
                    <div>Total</div>
                    <div>734</div>
                </div>
                <div className={styles.out_button}>
                    <button><Link to="/Checkout.jsx">Checkout now</Link></button>
                </div>
                <div className={styles.final_text}>Shipping charges might vary based on pincode delivery <br></br>location</div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Cart