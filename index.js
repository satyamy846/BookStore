const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const CookieParser = require('cookie-parser');
const connection = require('./config/connect');
const cors = require('cors');
require("dotenv").config();

const CatagoryRouter = require('./routes/CatagoryRouter');
const BooksRouter = require('./routes/BooksRouter');
const FeedbackRouter = require('./routes/FeedbackRouter');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.json());
app.use(CookieParser());


app.use(cors({origin:"*"}));

//Routes we are using
app.use(CatagoryRouter);
app.use(BooksRouter);
app.use(FeedbackRouter);


const port = process.env.PORT || 3000;
//connecting to database
connection();

app.get('/',(req,res)=>{
    res.send(`Server is running`);
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})