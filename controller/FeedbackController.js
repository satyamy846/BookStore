const Feedback = require('../models/Feedback');

const FeedbackController = {
    async postFeedback(req,res,next){
        try{
                const data = await Feedback.create(req.body);
                res.status(201).json({
                    message:"Feedback Sent",
                    data:data
                })
        }
        catch(err){
            console.log(err);
        }
    },
    async getFeedback(req,res,next){
            try{
                    const data = await Feedback.find({});

                    res.status(201).json({
                        message:"All feedback Fetched",
                        data:data,
                    });
            }
            catch(err){
                console.log(err);
            }
    },  
}

module.exports = FeedbackController;