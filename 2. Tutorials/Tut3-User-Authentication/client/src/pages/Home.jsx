//Shortcut to auto generate a functional component:
//rafce + enter

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        navigate("/login"); // Redirect if token is missing
        return;
      }

      try {
        const { data } = await axios.get("http://localhost:4000/verify", {
          withCredentials: true,
        });

        if (data.success) {
          setUsername(data.user);
          toast.success(`Welcome, ${data.user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Verification error:", error);
        navigate("/login");
      }
    };

    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       navigate("/login");
  //       return;
  //     }
  //     try {
  //       //
  //       const { data } = await axios.get("http://localhost:4000", {
  //         withCredentials: true,
  //       });

  //       if (data.success) {
  //         //
  //         setUsername(data.user);
  //         toast.success(`Hello ${data.user}`, { position: "top-right" });
  //       } else {
  //         removeCookie("token");
  //         navigate("/login");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       removeCookie("token");
  //       navigate("/login");
  //     }
  //   };
    //   const { status, user } = data;
    //   setUsername(user);
    //   return status
    //     ? toast(`Hello ${user}`, {
    //         position: "top-right",
    //       })
    //     : (removeCookie("token"), navigate("/login"));
    // };
  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);

  // const Logout = () => {
  //   removeCookie("token");
  //   navigate("/signup");
  // };

  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
