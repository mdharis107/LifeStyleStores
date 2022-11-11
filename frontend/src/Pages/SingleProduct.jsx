import React from 'react';
import "../Pages/Womens/WomensProducts.css"
import {useSelector} from "react-redux";
import Navbar from '../Components/Navbar';
import { useState } from 'react';

const SingleProduct = () => {
    const Item = useSelector((store)=>store.SingleProduct.data);
    const [pin,setPin] = useState("");
    const [recieve,setReceive] = useState("When will I receive my order?");
    // console.log(Item)
    const handlebtn=()=>{
      if(pin !== ""){
        setReceive(`Delivery Within 5-7 business days to ${pin}`)
      }
      else{
        setReceive("When will I receive my order?")
      }
    }
  return (
    <div className='wp'>
      <Navbar/>
      <div className='head'>
        <div>
          <h1 className='section'>{Item.product}</h1>
        </div>
        <div className="catlogue">
          <div className="catImg">
            <img src={Item.image} alt="" />
          </div>
          <div className="catCont">
            <div className="curr">
              <h2>₹{Item.Dprice}</h2>
              <p>Inclusive of all taxes</p>
            </div>
            <div className="curr1">
              <s>₹{Item.price}</s>
              <p>Save ₹{Item.price - Item.Dprice} ({100-Math.round((Item.Dprice/Item.price)*100)}%)</p>
            </div>
            <u>Free shipping on all orders</u> <br />
            <button className='sbtn'>ADD TO BASKET</button>
            <div style={{color:"red", fontSize:"12px", fontWeight:"500",cursor:"pointer"}}>PROMOTION OFFER</div>
            <p>Shop for Rs. 2,999 & Get 12% Off. Code - SAVE12 | Shop for Rs. 1,999 & Get 8% Off. Code - SAVE8 <u style={{color:"orangered"}}>Browse promotion</u></p>
            <div className="curr1">
              <img style={{width:"40px", height:"40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm87MP-yfYsKh3_yeHDidVdf7tS6TD5_-Bw&usqp=CAU" alt="" />
              <div>
                <p style={{fontWeight:"bold"}}>Click & Collect</p>
                <p>Order this product now and collect it from a store of your choice. <u style={{color:"orangered"}}>Learn more</u> </p>
              </div>
            </div>
            <div className="curr1">
              <img style={{width:"40px", height:"40px"}} src="data:image/png;base64,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" alt="" />
              <div>
                <p style={{fontWeight:"bold"}}>10 days easy return policy.</p><u style={{color:"orangered"}}>Learn more</u>
              </div>
            </div>
            <div className="curr1">
              <img style={{width:"40px", height:"40px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA2FBMVEX///8oMUL///0oMEO9wcXu8PMPGS4eJjp8gIb9//+VmJ0oMT/d4uIKFTEWJDj29vYMHi8SHC8AEiXb3uIACiatr7PBw8cTITIMGzPh5egSHzUjLD7x8/UFFC3W1trGyc6mqq4AAB8AABlNUVwAACMpL0cAAB07RVUnLkD8//mKkphfZGqQkJAeKTmyub/u9fVOUmFscXgwOUqDiJE5QEtGS1ErNDwjITIxM0B2eoQOFyhmbHJNTVslLDgnMUlYXGQAESAYHToJGCR5g4VOWWdhZHaKkp0AFyxE0EqqAAAL0klEQVR4nO2dC3+iOBeHEyJipBXBWxEUe1NsF6de2q3OtM7szq7f/xu9uQK2tq+2Cu5Mnt90Rk8TOH8CycmFDAAKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqF4uNoEoA/lnn/Lu0Z7qT2IV//A/IErqt/wF2awT3RwVErpa7p/0aO48x6O2fGfjl0Fs5D2dq/Y3uDKGz+aSACrM7cHXN2w3ZIMnr2Y/dQ/n0eDYyuPAgNw4PIO61tf7tpQy3om+ia5HxGXr0LhtoHKqosqHVC6BXn5dtiiMJHf2svNeAuyEUpjstfyRHCln6sjyKeeSj6RiuLIAphZbxdLibmm4E8dmN3H0xk3B7Ox8/RaCHPtFhL0XXgs1PbKhctr2YHwSdWA2snC/S8Cg7s6YfQNPwAUScAvCkst5+NMdjmZqPp7z3YKYjPjTPkLbfKmTEaCJzk/hpieI1W+jYZsQZqDvQuY1EzD9bd4WG8/ATk4pci2JG31xCUK9DZ6mYj9VG5hYojrpB861VhsXB8dSlRSK59MTHo353ZVo030XLpoYUff/Ofvkfb18OZoQG9CKN/4ltN0/zA37bSX8Dre/ERkyOQnLk/h+wKp6LrIfnU7Vy3y2BX18hBsOugaErb/TeTxOfMEHpWP+iVObRKKRSvycNElJZ3gdag3SKq9IgE3NuUohdYuUTjGJzMndMfFUZ7Ri7wiCgk/tb6lVZU2RKj0m+S+KCIWg1yzFJnU5ofp878JPsSBPjGIXELghT07HwhCtvXZ8TdwgruwHP7hmSxUZWWPgmJNiRBMIycG5zxk6nhpU1ObtgOpdMvkfMXbFaG/qxfd7alU2+dkIbURm1ahqOL+oasdkTOZC9xxvfpbQvCytNNUGO49DkhftoNUl3g2i74pOmsFSGtozDQN6UIbp7IyVoZx6rlDkKdqZW0DaQyJTWiMWWfdkEbDoFOcs7X6ua1FMCaktMVy591ehf0K3LGnqzhxNCTFSEaeu00RiNSR+HzIw3fNuaktl4RoautYsA98YeBohKJPWkNj7H049KD333edG0Lzwq+GmghxgQ2pcFDEhEi44+sKlTSRE/CcKG/uNwaKBtmq/ehlqtRhcb7N6Fuo3CCM2oV6RMHX/eMSGjSh3C2u0JSMPoKhqH1TglpYGwgx82oxSC1ZhWS2v2VQrCMoN3b+XiYtANjchPevHvORhtWg8wUFqrwrPDibPSB6XYgdLq7hlhUYe0coVXh3XPaZvXlOQ8FU1h8rZAY5hVkLnqY9Wq3ht2c0zYy/yr7bwXuVCHMSiFxqFBF9saz+TPDhG3jsbzz04gvDRJCtB7eqG80FtkVsulgvKNQ0/RH4igKL3YYKxVZycVBCJoXm4eDj0eh5o/PDc+jCnc7KgkY5nXDO3aFGJMQrDu9m/R2f2BImdfKl5Mjv0sPh1K4V34jhdmSvcLRFz1LvozaGSuEUbVazI5qNYLZKiTNetZAmLFCz4iM7IgML2OFyLv9u5Qlf996Wdc0zQxOlaap2sP9oRQeBKVwryiFB0Ep3Cu/o8LUXIyccqf/xquFwVpCTfwuXgrwai5HSyFN+SpcO6uYjXppeZVQTFttedK879LG8pJx25QKAegx293d19Sqoe6Yp1v2MJbrg4LEJsRoYHQrjjeS1ypnhdO653nXBKPfkLaSE3kMoz6StuDcExRvZfEVLqRtIZYyaqB8JW1XZZC7QvLNvaC9RZMAw4UYzq9d8B4khDA8Ez6Cey/u69XlJMvsSXQ1oVnnQ6Wa7ySdwpUvZeepMFjEqyZCxxVFY8N4WQWfu9U0q5Usr7DFiKo+u5uZwsgWKwC2cDNO1+mKxUn5KrQ3KKwmCutvK7T8p9ndnfdC4eI/qzBKPG8xhRZw739O7iYvyxD9Ogot/cn8ORkct0JNPIespoH1txSS5mGzwrvBYMCz2xsUOl3Z/OSv8O7uAwqB+2D+HEyOXqEdkjZhMKAKz13eRKcVXvlCYaqmiRqY1zSzn5OJuAXskVQYp4PHoVA/h2HoMYWeIRaEuHW64I456UGRCyx5pUnMyAssmk6zLiPWWIQmaQ/Z0n5N820vvhK2dQwKQa8yGDwNJlHUCgNrSJ4uyyJxiRFN6CPWcgJmIXTrFcOIImItTjGzkEDuqWKQqzOYDMwb5j2xjpxKxDD6ozh+zTNq03BQKpWm0/n8pgasIVeDg2lpOh7Pp1MXC4HkqSvP5/PpfFxqcoNP9Lg31DKelgqYKqZmrTadl+bkzzSeEM5XISuL+KMm5LAVXeQnNlipdLJUgUwoTOBlOknuCmPX6Ey++MS+WSkplrRo/G/AzVrqJ3WY9V5j3gp9jBPXyFeL32++BtIKeYGxVMMh++qLO9VKlyk/Clh/ZTZvhSkV7Kufcjr1O19YwdpdSpoMK62Sfk3f+UegcM3ddcGW/0KhfMreUCh/AXxdX5OYdx9f+C0u/JsKY+3rWdI/UqHlH5dC7hwG4tZKlRTgXqd/cCoLDdzEj/i9/IVlrQ3h5NwepoaaYgdeLfrCayYsF8NuWPe8aXQqZ4VAHzUYBSt5KyK2JaIBDrit4YJ4uS9uctPITdL5BZHXP4aRKPoaQrXaYhShC4bcoebpD2ppt1cPbuz4wOHpqk5DRmP6rGOzhEUnHrHqtmyezm7JoCZfhf5ZHCh7MxEofzm9vmYWBKNL6eS8EvcZ+nJB8+0P3gd5RtARa/HxYxx5ew9yiDFPhSA45VrY4knupdYsIpNbTHTF6x/NMpIxtIpYRP2l9WyyhCZEP0Qh1lJjbfJV4pxHMYpxGb43irHWP2yJsTY/NSZ3rKMYnxmnUQqVwmwUaqnnMDUSdZa8SRg/h0aisC0VJs+mUEjfaVhTCHJWCF4qHHKFbWTGNp1fCd9OqZEK/3pXIVwdhcJaP/Hygr/ZBbr12EvznOWiWy6Ecbr4dY2nJK98e9+tp2xxuJCjwiFYtuObaiqjtmVLSAwXbHE6fTGmF7tuPMhXTnpy6DCMZvIM47iwbbl5SL4Kh1/mdc7pv3G46Y+vuM3hq+9pqI17bW47/0eXuXHZPme2q6/x64V42uHpyAUDudc0iTHVsUhsLz3Cb7n4f/LmrvBTyzK2yZy7woOjFO4VpfAgKIV75fdUaPEXW9aGOIVtPTO3+a9t7pqN53WT4+XatyAxzT88LKlfzeOYRl+KmOZ8ynPRmOZfafsWv3eOpyIeurqLB9v8sTje+VjqzlWhhi/lCBOyS9Lz+0jEpeZiKhSm49IneSnKIi41kTGT3n9tscVUEKHW12NQuDbvLvsWQdKLNfvySjwm6eKdvWTfwoRo1eSHd9Pz+G7ucenbPeBX/UOrnaSL+4fVRGHcP1yt9Q9zVwg+0seHG/r4mxQexSjGrz9OoxT+Rgr/q2PedKytY0LmJ/mnL2KYZgc9mNyUmrdIFLbjeYtrk1W65O8zMW9xErcWJnROAMhfoWVE8qXZeJ7Jb18zwzOxLaWTc1qIfMlzXw7UjH8gkTAsyrmnWTyFE0cBOc8fdp++V+0zQmcmHCcF2z49Y9Tvdekk/ulUWcIO3YeFJ/S/XbFkp50/5Tub2IUdnrcD3aNQSEoxaDICnMwB+9xUSL2MQK5FgVv1ZA5Y2AqBnyQDQUHm1Y5DYXpMSlv/N5VtzbTtPP4RKMwGpXCv/BYKR7+2QkDfiDFbo4wVjmyzmN1+KsEqrGS6EyWgWxbCrHZqJ9W7XqW7pmcJpsvgF3o22wnTDUovjXj+OSO6HbZ16I6bo34MtvV9G3kzFr9oW2/k+XHobpszD1Ubb+3heghM9GwsLa730JCzWEvjGZlZiWMEdQSjSVb7mxRmEUL1jP9HCDr2GRafSjvtTv4xSmHRI/3oXrYCNdA7jyC6NrbdmvwT0N6id97LtP1l1O5XBn/998CQjvDqfrv/7mS/aDgYR87p4XGicZD1duVCIvnRTw6PDj65FOLjCodaRq1FNg39BoUafrmE5iBgnNUu1wqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCsUvwP8AaTNihuEqKkQAAAAASUVORK5CYII=" alt="" />
              <div>
                <p style={{fontWeight:"bold"}}>Pay in installments</p>
                <p>Pay in easy installments on orders of ₹ 3,000 or more. Available for select banks.<u style={{color:"orangered"}}>Learn more</u></p>
              </div>
            </div>
            <div className="curr1">
              <img style={{width:"40px", height:"40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdL7Bbs7nEE-7DMQJIWxNjyRowhurcoaBTbMQsBEjuj_3VT0SFqOb62r3VZgaOOvEPCY&usqp=CAU" alt="" />
              <div>
                <p style={{fontWeight:"bold",marginTop:"10px"}}>{recieve}</p>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",gap:"10px"}}>
              <input onChange={(e)=>setPin(e.target.value)} type="text" placeholder='Enter Your Pincode' style={{width:"120px",padding:"12px 10px", border:"1px solid lightgrey"}} name="" id="" /> <button onClick={()=>handlebtn()} style={{padding:"12px 15px",backgroundColor:"orange",color:"white",border:"none",cursor:"pointer"}}>Check</button>
            </div>
            <h3 style={{color:"red"}}>Overview</h3>
            <p>Fabricated with polyester, this solid sweatshirt is designed with a mock collar, zip closure, 2 insert pockets, and full sleeves making it look stylish yet comfortable.</p>
            <ul>
              <li>Style : Sports</li>
              <li>Model Wears : Size M, has Height 6'0",Chest 38",and Waist 30"</li>
              <li>Product : {Item.product}</li>
              <li>Country of Origin : India</li>
              <li>Manufactured By : Lifestyle International Pvt Ltd, 77 Degree Town Centre, Building No. 3, West Wing ,Off HAL Airport Road, Yamlur, Bangalore-560037</li>
              <li>For Consumer Complaints Contact : Manager Commercial, Lifestyle International Pvt. Ltd. 1800-123-1555</li>
              <li>Net Quantity : 1</li>
            </ul>
          </div>
        </div>
      </div>  
      <div className="review">
        <p>Reviews</p>
        <div className="revi">
          <div style={{display:"flex",width:"350px",margin:"auto",textAlign:"center",gap:"10px"}}>
            <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/write-review.svg" alt="" />
            <div style={{width:"150px",textAlign:"left",fontSize:"15px",fontWeight:"bold"}}>What do you think about this project?</div>
            <input style={{border:"1px solid orange",color:"orange",fontWeight:"bold"}} type="submit" value="WRITE A REVIEW" />
          </div>
        </div>
      </div>  
    </div>
  )
}

export default SingleProduct


