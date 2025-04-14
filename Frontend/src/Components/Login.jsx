// import React,{useState} from 'react';
// import axios from "axios";
// import { useDispatch } from 'react-redux';
// import { Link , useNavigate} from 'react-router-dom';
// import { loginSuccess } from '../redux/authSlice';
// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password,setPassword]= useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
//     // const handlesubmit = async (e)=>{
//     //     e.preventDefault();
//     //     try{
//     //         const response = await axios.post('http://localhost:8000/user/login',{
//     //             email,password
//     //         });
//     //         alert("successfully logged in !");
//     //     } catch (error) {
//     //         console.log(error);
//     //         alert("Failed to login");
//     //     }
//     // };




//     const handleSubmit = async (e) => {
//         e.preventDefault();
//     //     try {
//     //         const response = await axios.post('http://localhost:8000/user/login', {
//     //             email,
//     //             password
//     //         });
//     //         alert("Successfully logged in!");
//     //         navigate('/collecs');  // Redirect to collecpage after successful login
//     //     } catch (error) {
//     //         console.log(error);
//     //         if (error.response && error.response.status === 401) {
//     //             alert("Login failed: Invalid email or password");
//     //         } else if (error.response && error.response.status === 404) {
//     //             alert("User not found");
//     //         } else {
//     //             alert("An error occurred. Please try again later.");
//     //         }
//     //     }
//     // };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const payload ={
//     //       email: email,
//     //       password: password,
//     //     };
//     //     console.log(payload);
//     //     try{
//     //       const res = await axios.post('http://localhost:8000/user/login',payload);
//     //       localStorage.setItem("token",res.data.value);
//     //       navigate("/");
//     //     }catch(error){
//     //       toast.error(error.response.data.message);
//     //     }
//     //   }
        
//         try {
//           const response = await axios.post('http://localhost:8000/user/login', {
//             email,
//             password
//           });
//     // Assuming response contains user data
//     dispatch(loginSuccess(response.data));  // Update Redux state
//     alert("Successfully logged in!");
//     navigate('/collecs');  // Redirect to collecpage after successful login
//   } catch (error) {
//     console.log(error);
//     if (error.response && error.response.status === 401) {
//       alert("Login failed: Invalid email or password");
//     } else if (error.response && error.response.status === 404) {
//       alert("User not found");
//     } else {
//       alert("An error occurred. Please try again later.");
//     }
//   } }

//     return(
//         <>
// <div className="login">  
//   <div className='login-container'>
//   <h2>LOGIN</h2>
//       <form onSubmit={handleSubmit}>
//         <label> Email: </label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         /> <br />
//         <label> Password: </label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         /> <br />
//         <button type='submit'>Login</button>
//         <br />
//         <a href='/signup'>Create account</a>
//       </form>
//       </div></div>
//         </>  

//     );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/user/login', {
                email,
                password
            });

            const { userId } = response.data; 
            dispatch(loginSuccess({ userId }));
            alert("Successfully logged in!");
            navigate('/collecs');
        } catch (error) {
            console.error("Login error:", error);
            if (error.response && error.response.status === 401) {
                alert("Login failed: Invalid email or password");
            } else if (error.response && error.response.status === 404) {
                alert("User not found");
            } else {
                alert("An error occurred. Please try again later.");
            }
        }
    }

    return (
        <div className="login">
            <div className='login-container'>
               
                <form onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /> <br />
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /> <br />
                    <button type='submit'>Login</button>
                    <br />
                    <a href='/signup'>Create account</a>
                </form>
            </div>
        </div>
    );
};

export default Login;