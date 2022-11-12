import React, {useState,useEffect} from 'react'
import "../Womens/WomensProducts.css";
import Navbar from "../../Components/Navbar";
import arrow from "../Womens/wpassert/arrow.png";
import Eachproduct from '../../Components/Eachproduct';
import axios from "axios"

const ShoesBagsProducts = () => {
  const [url,setUrl] = useState("https://lifestylestore-api-.up.railway.app/ShoesAndBags/?page=1&limit=48");
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get(`${url}`)
    .then(res=>{
      const val = res.data.shoesAndBags;
      setProducts(val)
    })
    .catch(e=>{
      console.log(e)
    })
  },[url])
    const category=[
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/shoesandbags-boys.jpg",
          title:"Boys"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/shoesandbags-girls.jpg",
          title:"Girls"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/shoesandbags-men.jpg",
          title:"Men"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/shoesandbags-menaccessories.jpg",
          title:"Men Accessories"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/shoesandbags-women.jpg",
          title:"Women"
        },
        {
          image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/shoesandbags-womenaccessories.jpg",
          title:"Women Accessories"
        }
      ]
      // const [btn,setBtn] = useState("btn")
      // const products=[
      //   {
      //     image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008925417-Black-1000008925417_01-2100.jpg",
      //     price:1049,
      //     Dprice:734,
      //     product:"FAME FOREVER Men Polo T-shirt",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009816669-1000009816668_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011297723-BLACK-1000011297723_01-2100.jpg",
      //       price:1049,
      //     Dprice:734,
      //     product:"BOSSINI Women Striped Knit Top",
      //     Discount:"30% OFF",
      //     Soffer:"2 AT 50% OFF",
      //     Sdiscount:50
      //   },
      //   {
      //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008944088-1000008944087_01-2100.jpg",
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
      <Navbar/>
      <div className='head'>
        <div>
          <div className="navroute">
            <li><a href="">Home</a></li>
            <li><img src={arrow} className="arrow" alt="" /></li>
            <li><a href="">Shoes & Bags</a></li>
          </div>
          <h1 className='section'>Shoes & Bags</h1>
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

export default ShoesBagsProducts