const {Womens} = require("../Model/womens.model");

const getWomensProducts = async (req,res)=>{
    // http://localhost:8080/womens/?page=1&limit=10&sort=price,desc
    try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
		let sort = req.query.sort || "productName";
		
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const womens = await Womens.find({ productName: { $regex: search, $options: "i" } })
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		const total = await Womens.countDocuments({
			
			name: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			womens,
		};

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
		res.status(500).send("Internal Server Error");
	}
}

const getWomensProductById = async (req,res) =>{

    // console.log(req.params.womensId);
    // here we can find a product by id as well 
    const result = await Womens.findOne({_id : req.params.womensId});
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



