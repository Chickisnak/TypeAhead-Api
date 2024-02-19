import mongoose from "mongoose";

const connect = async ()=>{
  await mongoose
    .connect(process.env.DB_URL)
    .then(()=> console.log("Database connected successfully"))
    .catch(()=> console.log("Database not connected"))
}

export default connect