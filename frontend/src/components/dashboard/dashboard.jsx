import './dashboard.css'
import { useContext } from 'react';
import { AuthContext } from '../authcontext';
import ErrorPage from '../errorpage/error';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    let {token}=useContext(AuthContext)
let nav=useNavigate()

    const handleLogout=()=>{
  localStorage.removeItem('token')

  nav('/')

    }




	
    return (

        <>

        {token ?(
             <div className="main_container">
             <nav className="navbar">
               <h1 className="logo">JWT Token Project</h1>
               <button className="white_btn" onClick={handleLogout}>
                 Logout
               </button>
             </nav>
             <div className="hero_section">
               <h2>Welcome to the JWT Token Project</h2>
               <p>This project demonstrates the use of JSON Web Tokens (JWT) for authentication and secure communication.</p>
           
             </div>
             <div className="content_section">
               <div className="card">
                 <h3>What is JWT?</h3>
                 <p>JWT (JSON Web Token) is an open standard for securely transmitting information between parties as a JSON object.</p>
               </div>
               <div className="card">
                 <h3>How It Works</h3>
                 <p>JWTs can be used for authentication and information exchange. They are signed to ensure data integrity.</p>
               </div>
               <div className="card">
                 <h3>Get Started</h3>
                 <p>Explore the project to understand how to implement JWT in your applications.</p>
               </div>
             </div>
           </div>


        ):<ErrorPage/>}
   
          </>
     )

        }
       
    
export default Main;