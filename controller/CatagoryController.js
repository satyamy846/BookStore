const Catagory = require('../models/Catagory');

const CatagoryController = {
    async postCatagory(req,res,next){
        try{
            const data = await Catagory.create(req.body);

            res.status(201).json({data:data});
        }
        catch(err){
            next(err);
        }
    },
    async getAllCatagory(req, res) {
        try {
            const data = await Catagory.find({});
            res.status(200).json({data:data});
        } catch (error) {
           next(error);
        }
    },
    async updateCatagory(req, res) {
        const id = req.params.id;
        try {
            const newCatagory = {
                name: req.body.name,
                bookname:req.body.bookname,
            }
            const data = await Catagory.findByIdAndUpdate(id,newCatagory,{new:true});
            
            res.status(200).json({
                message:"Catagory is updated"
            })

        } catch (err) {
            next(err);
        }
    },
    async deleteCatagory(req, res) {
        const id = req.params.id;
        try {
            
            const data = await Catagory.findByIdAndDelete(id);
            
            res.status(200).json({
                message:"Catagory deleted",
                data:data
            })

        } catch (err) {
            next(err);
        }
    },
}


module.exports = CatagoryController;