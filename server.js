import 'express-async-errors'
import express from 'express'
import morgan from 'morgan';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
const app = express()
dotenv.config();


//routers
import jobRouter from './routes/jobRouter.js'

//middleware
import errorHandlermiddleware from './middleware/errorHandlerMiddleware.js';

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.get('/', (req,res)=>{res.send('hello world')});
app.post('/',(req,res)=>{
    console.log(req);
    res.json({message:"data recieved", data:req.body})
})

app.use('/api/v1/jobs', jobRouter);

app.use('*', (req,res)=>{
    res.status(404).json({msg:'not found'})
})
app.use(errorHandlermiddleware)

const port =process.env.PORT || 5100
try {
    await mongoose.connect(process.env.MONGO_URL)
} catch (error) {
    console.log(error);
    process.exit(1)
}

app.listen(port,()=>{console.log(`server is running on PORT ${port}`);});