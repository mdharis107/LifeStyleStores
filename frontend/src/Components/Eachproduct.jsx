import React, {useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {updateSingleProduct} from "../Redux/SingleProduct/action";
import { useNavigate } from "react-router-dom"

const Eachproduct = ({item,id}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [btn,setBtn] = useState("btn");
    const handleClick=()=>{
      dispatch(updateSingleProduct(item));
      navigate("/SingleProduct")
    }
    const handlecart=()=>{
      navigate("/cart")
    }
  return (
    <div>
        <div key={id} className="container" onMouseEnter={(e)=>setBtn("btnshow")} onMouseLeave={(e)=>setBtn("btn")}>
             <img onClick={()=>handleClick()} src={item.image} alt="" />
             <div onClick={()=>handleClick()} className="off">
               <div>{item.Soffer}</div>
               <div>{item.Discount}</div>
             </div>
             <div onClick={()=>handleClick()} className="price">
               <div>₹ {item.Dprice}</div>
               <s style={{fontSize:"12px"}}>₹{item.price}</s>
             </div>
             <p onClick={()=>handleClick()}>{item.product}</p>
             <button className={btn} onClick={handlecart}  > ADD TO BASKET</button>
        </div>
    </div>
  )
}

export default Eachproduct