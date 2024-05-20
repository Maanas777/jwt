import jwt from 'jsonwebtoken'
import 'dotenv/config'


let SECRET_KEY = process.env.SECRET_KEY

export const generateToken = (user) => {

    return jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' })
}


export const verifyToken = (token) => {

    return jwt.verify(token, SECRET_KEY)


}