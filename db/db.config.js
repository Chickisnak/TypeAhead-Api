import mongoose from "mongoose";

const connect = async ()=>{
  await mongoose
    .connect(process.env.DB_URL)
    .then(()=> console.log("Database connected successfully"))
    .catch((err)=> console.log("Database not connected", err))
}

export default connect