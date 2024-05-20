import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

let User = mongoose.model('User', UserSchema)
export default User;