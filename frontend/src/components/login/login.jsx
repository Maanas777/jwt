import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {

	const [data, setdata] = useState({
		email:'',
		password:''

	})

	const [error, seterror] = useState('')

    const handleChange=(e)=>{

		setdata({...data,[e.target.name]:e.target.value})

	}

	const handlesubmit=async(e)=>{
		e.preventDefault()
		try {
			let res=await axios.post('http://localhost:5000/api/auth/login',data)
			console.log(res)
			localStorage.setItem('token',res.data)
			window.location = "/dashboard"
			
		} catch (error) {
			console.log(error.response.data)
			seterror(error.response.data)
			
		}
		

	}


	return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="left">
					<form className="form_container" onSubmit={handlesubmit} >
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							Sing In
						</button>
					</form>
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className="white_btn">
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;