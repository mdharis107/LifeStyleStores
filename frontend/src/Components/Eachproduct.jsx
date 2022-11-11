import React, {useState} from 'react'

const Eachproduct = ({item,id}) => {
    const [btn,setBtn] = useState("btn");
    const handleClick=()=>{
      console.log(item);
    }
  return (
    <div>
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
             <button className={btn} onClick={()=>handleClick()} > ADD TO BASKET</button>
        </div>
    </div>
  )
}

export default Eachproduct