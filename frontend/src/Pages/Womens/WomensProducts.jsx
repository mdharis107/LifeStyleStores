import React from 'react';
import "./WomensProducts.css";
import Navbar from "../../fw19_0144/component/navbar";
import arrow from "./wpassert/arrow.png";
import Wfilter from './Wfilter';
import { useState } from 'react';
import Eachproduct from '../../Components/Eachproduct';
import axios from "axios";
import { useEffect } from 'react';

const WomensProducts = () => {
  const [url,setUrl] = useState("https://lifestylestore-api-.up.railway.app/womens/?page=1&limit=48");
  const [products,setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get(`${url}`)
    .then(res=>{
      const val = res.data.womens;
      setProducts(val)
    })
    .catch(e=>{
      console.log(e)
    })
  },[url])
  
  const category=[
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-beauty.jpg",
      title:"Beauty"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-bottoms.jpg",
      title:"Bottom Wear"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-dressesandjumpsuits.jpg",
      title:"Dresses and Jumpsuits"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-ethnicwear.jpg",
      title:"Ethnic Wear"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-facemasks.jpg",
      title:"Face Masks"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-fashionjewellery.jpg",
      title:"Fashion Jewellery"
    },    
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-lingerie.jpg",
      title:"Lingerie"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-nightwear.jpg",
      title:"Night Wear"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-plussize.jpg",
      title:"Plus Size"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-sportswear.jpg",
      title:"Sports Wear"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-sunglasses.jpg",
      title:"Sunglasses"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-tops.jpg",
      title:"Top Wear"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-watches.jpg",
      title:"Watches"
    },
    {
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/women-winterwear.jpg",
      title:"Winter Wear"
    }
  ]
  // const [btn,setBtn] = useState("btn")
  // const products=[
  //   {
  //     gender:"women",
  //     category:"Top Wear",
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010465316-Pink-Mauve-1000010465316_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  // ]
  
  return (
    <div className='wp'>
      {/* <Navbar/> */}
      <div className='head'>
        <div>
          <div className="navroute">
            <li><a href="">Home</a></li>
            <li><img src={arrow} className="arrow" alt="" /></li>
            <li><a href="">Women</a></li>
          </div>
          <h1 className='section'>Women</h1>
          <div className="category">
          <div className="singlebox">
                  <a href="">
                    <span>
                      <div className='ct' style={{padding:"12px"}}>
                          Accessories
                      </div>
                    </span>
                  </a>
                </div>
          {
            category.map((item)=>(
              
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
      <Wfilter/>
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

export default WomensProducts