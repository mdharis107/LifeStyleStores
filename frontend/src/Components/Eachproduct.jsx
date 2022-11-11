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
  return (
    <div onClick={()=>handleClick()}>
        <div key={id} className="container" onMouseEnter={(e)=>setBtn("btnshow")} onMouseLeave={(e)=>setBtn("btn")}>
             <img src={item.image} alt="" />
             <div className="off">
               <div>{item.Soffer}</div>
               <div>{item.Discount}</div>
             </div>
             <div className="price">
               <div>₹ {item.Dprice}</div>
               <s style={{fontSize:"12px"}}>₹{item.price}</s>
             </div>
             <p>{item.product}</p>
             <button className={btn}  > ADD TO BASKET</button>
        </div>
    </div>
  )
}

export default Eachproduct