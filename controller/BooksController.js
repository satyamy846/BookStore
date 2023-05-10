const Books = require('../models/Books');

const BooksController = {
    async postBooks(req,res,next){
        try{
            const data = await Books.create(req.body);

            res.status(201).json({data:data});
        }
        catch(err){
            next(err);
        }
    },
    async getAllbooks(req,res,next) {
        try {
            const data = await Books.find({});
            res.status(200).json({data:data});
        } catch (err) {
           next(err);
        }
    },
    async getAllbooksByCatagory(req,res,next) {
        const cname = req.query.cname;
        try {
            // console.log(cname);
            const data = await Books.find({cname:cname});
            console.log(data);
            res.status(200).json({data:data});
        } catch (err) {
           next(err);
        }
    },
    async getBookById(req,res,next) {
        const id = req.params.id;
        try {
            // console.log(cname);
            const data = await Books.findOne({_id:id});
            // console.log(data);
            res.status(200).json({data:data});
        } catch (err) {
           next(err);
        }
    },
    async updateBook(req, res, next) {
        const id = req.params.id;
        try {
            const newBook = {
                name: req.body.name,
                cname: req.body.cname,
                pages: req.body.pages,
                author: req.body.author,
                language: req.body.language
            }
            const data = await Books.findByIdAndUpdate(id,newBook);
            
            res.status(200).json({
                message:"Book is updated",
                olddata:data
            })

        } catch (error) {
            next(err);
        }
    },
    async deleteBook(req, res,next) {
        const id = req.params.id;
        try {
            
            const data = await Books.findByIdAndDelete(id);
            
            res.status(200).json({
                message:"Book is deleted",
                data:data
            })

        } catch (error) {
            next(err);
        }
    },
}


module.exports = BooksController;