import React, {useState,useEffect} from 'react'
import "../Womens/WomensProducts.css";
import Navbar from "../../fw19_0144/component/navbar";
import arrow from "../Womens/wpassert/arrow.png";
import Eachproduct from '../../Components/Eachproduct';
import axios from "axios"

const KidsProducts = () => {
  const [url,setUrl] = useState("https://lifestylestore-api-.up.railway.app/kids/?page=1&limit=48");
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get(`${url}`)
    .then(res=>{
      const val = res.data.kid;
      setProducts(val)
    })
    .catch(e=>{
      console.log(e)
    })
  },[url])
    const category=[
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/kids-addons.jpg",
          title:"Add Ons"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/kids-boysclothing.jpg",
          title:"Boys"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/kids-girlsclothing.jpg",
          title:"Girls"
        }
      ]
      // const [btn,setBtn] = useState("btn")
      // const products=[
      //   {
      //     image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011765104-Black-Black-1000011765104_01-2100.jpg",
      //     price:1049,
      //     Dprice:734,
      //     product:"FAME FOREVER Men Polo T-shirt",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011888477-Green-Lime-1000011888477_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011043180-Red-Firebrick-1000011043180_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011857215-Red-Coral-1000011857215_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   }
      // ]
  return (
    <div className='wp'>
      {/* <Navbar/> */}
      <div className='head'>
        <div>
          <div className="navroute">
            <li><a href="">Home</a></li>
            <li><img src={arrow} className="arrow" alt="" /></li>
            <li><a href="">Kids</a></li>
          </div>
          <h1 className='section'>Kids</h1>
          <div className="category">
          {
            category.map((item,index)=>(
            <div className="singlebox">
                <a href="">
                <span>
                    <div className="cimg">
                    <img className='ci' src={item.image} alt="" />
                    </div>
                    <div className='ct'>
                        {item.title}
                    </div>
                </span>
                </a>
            </div>
            ))
          }
          </div>
        </div>
      </div>

      <div className="products">
          {
            products.map((item,index)=>(
              <Eachproduct item={item} id={index} />
            ))
          }
      </div>
    </div>
  )
}

export default KidsProducts