// // //Shortcut to auto generate a functional component:
// // //rafce + enter

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// const Login = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = inputValue;

//   const [redirect, setRedirect] = useState(false); //NEW

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });

//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-right",
//     });

//     // NEW below handleSubmit
//     const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post(
//       "http://localhost:4000/login",
//       { ...inputValue },
//       { withCredentials: true }
//     );

//     const { success, message } = data;
//     if (success) {
//       handleSuccess(message);
//       setRedirect(true); // Trigger redirect after state update
//     } else {
//       handleError(message);
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   setInputValue({ email: "", password: "" });
// };

// // Redirect after successful login
// useEffect(() => {
//   if (redirect) navigate("/");
// }, [redirect, navigate]);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await axios.post(
//   //       "http://localhost:4000/login",
//   //       {
//   //         ...inputValue,
//   //       },
//   //       { withCredentials: true }
//   //     );
//   //     console.log(data);
//   //     const { success, message } = data;
//   //     if (success) {
//   //       handleSuccess(message);
//   //       console.log("Navigating...");
//   //       navigate("/");
//   //       // setTimeout(() => {
//   //       //   console.log("Navigating...")
//   //       //   navigate("/");
//   //       // }, 1000);

//   //     } else {
//   //       handleError(message);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   //   setInputValue({
//   //     ...inputValue,
//   //     email: "",
//   //     password: "",
//   //   });
//   // };

//   return (
//     <div className="form_container">
//       <h2>Login Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="password"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit" >Submit</button>
//         <span>
//           Create an account  | <Link to={"/signup"}>Signup</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

// //Shortcut to auto generate a functional component:
// //rafce + enter

// =============================================================================

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        inputValue,
        { withCredentials: true } // Ensures cookies are sent and received
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setIsLoggedIn(true);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      handleError("Something went wrong. Please try again.");
    }

    setInputValue({ email: "", password: "" });
  };

  // Redirect after login
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={inputValue.email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={inputValue.password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Create an account | <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
