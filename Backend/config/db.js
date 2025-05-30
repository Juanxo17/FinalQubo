import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DATABASE_URL,{

            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'Qubo' 

        })
        console.log('Mongo connected succesfuly.')
    }
    catch(error){
        console.error("Failed to connect with MongoDB.", error) 
        process.exit(1)
    }
}

export default connectDB;