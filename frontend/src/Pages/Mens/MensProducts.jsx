import React, {useState,useEffect} from 'react'
import "../Womens/WomensProducts.css";
import Navbar from "../../Components/Navbar";
import arrow from "../Womens/wpassert/arrow.png";
import Eachproduct from '../../Components/Eachproduct';
import axios from "axios";
const MensProducts = () => {
  const [url,setUrl] = useState("https://lifestylestore-api-.up.railway.app/mens/?page=1&limit=48");
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get(`${url}`)
    .then(res=>{
      const val = res.data.men;
      setProducts(val)
    })
    .catch(e=>{
      console.log(e)
    })
  },[url])
    const category=[
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-bottoms.jpg",
          title:"Bottom Wear"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-ethnicwear.jpg",
          title:"Ethnic Wear"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-innerwear.jpg",
          title:"Inner Wear"
        },
        {
            title:"Lounge Wear and Night Wear"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-mensgrooming.jpg",  
          title:"Men's Grooming"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-sportswear.jpg",
          title:"Sports Wear"
        },    
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-sunglasses.jpg",
          title:"Sunglasses"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-tops.jpg",
          title:"Top Wear"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-watches.jpg",
          title:"Watches"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/men-winterwear.jpg",
          title:"Winter Wear"
        }
      ]
      // const [btn,setBtn] = useState("btn")
      // const products=[
      //   {
      //     gender:"women",
      //     category:"Top Wear",
      //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //     price:1049,
      //     Dprice:734,
      //     product:"FAME FOREVER Men Polo T-shirt",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011315621-Orange-Coral-1000011315621-2022_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      // ]
  return (
    <div className='wp'>
      <Navbar/>
      <div className='head'>
        <div>
          <div className="navroute">
            <li><a href="">Home</a></li>
            <li><img src={arrow} className="arrow" alt="" /></li>
            <li><a href="">Mens</a></li>
          </div>
          <h1 className='section'>Mens</h1>
          <div className="category">
          <div className="singlebox">
                  <a href="">
                    <span>
                      <div className='ct' style={{padding:"12px"}}>
                          Add Ons
                      </div>
                    </span>
                  </a>
                </div>
          {
            category.map((item,index)=>{
                if(index === 3){
                    return (
                        <div className="singlebox">
                  <a href="">
                    <span>
                      <div className='ct' style={{padding:"12px"}}>
                          {item.title}
                      </div>
                    </span>
                  </a>
                </div>
                    )
                }
                else
                {return (<div className="singlebox">
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
                </div>)}
              
            })
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

export default MensProducts