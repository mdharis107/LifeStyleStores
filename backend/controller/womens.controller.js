const {Womens} = require("../Model/womens.model");

const getWomensProducts = async (req,res)=>{
    
    // const match = {};
    // const sort = {};

    // if(req.query.color === "red"){
    //     match.color = req.query.color
    // }

    // if(req.query.sortBy){  
    //     const str = req.query.sortBy.split(':')
    //     sort[str[0]] = str[1] === 'desc' ? -1:1
    // }
   
    // try{
    //     const output = await Womens.find({
    //         path:"/",
    //         match,
    //         options:{
    //             limit:Number(req.query.limit),
    //             skip:Number(req.query.skip),
    //             sort
    //         }
    //     })
    //     // console.log(output);
    //     res.send(output);
    // } catch(e){
    //         res.send(e);
    // }


    

    // const output = await Womens.find();
    // console.log(output);
    // res.send(output);
}

const getWomensProductById = async (req,res) =>{

    // console.log(req.params.womensId);
    // here we can find a product by id as well 
    const result = await Womens.findByOne({_id : req.params.womensId});
    res.send(result);
}


const postWomensProducts = async (req,res) =>{
    const data = req.body;
    console.log(data)
    const women_post = new Womens({...data});
    try{
        await TextTrackList.save();
        res.status(201).send(women_post);
    } catch(err){
        res.status(404).send(err);
    }
    // res.send(post_res);
}

module.exports = {getWomensProducts,getWomensProductById,postWomensProducts}



