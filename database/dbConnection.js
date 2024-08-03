import mongoose from 'mongoose';

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"todo_applicaton",
    })
    .then(()=>{
        console.log('database successfully connected');
    })
    .catch((err)=>{
        console.log(`some error occurred when database connection ${err}`);
    })
};