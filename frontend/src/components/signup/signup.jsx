import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {

const [data, setdata] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''


})
// console.log(data)

const [error, seterror] = useState('')

const navigate = useNavigate();


    const handleChange=({currentTarget:input})=>{

        setdata({...data,[input.name]:input.value})

    }


    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            let res= await axios.post('http://localhost:5000/api/auth/register',data)
            console.log(res,"responseeeee")
            navigate("/");
            
        } catch (error) {
            
            seterror(error.response.data.error)
            console.log(error)
        }
     
    
    }





	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit} >
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstname"
							onChange={handleChange}
							value={data.firstname}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							onChange={handleChange}
							value={data.lastname}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;