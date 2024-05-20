import mongoose from "mongoose";

export const ConnectMongodb = mongoose.connect('mongodb://127.0.0.1:27017/jwt_app').then(() => {
    console.log('connected database')
}).catch((error) => {
    console.log('mongodb error', error)
});

 