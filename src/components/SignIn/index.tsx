import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { getUser, login } from "../../services/user/user.service";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const loginUser = async (event: React.FormEvent) => {
    event.preventDefault();
    const values = { email, password };
    try{
      const log = await login(values);
      const getUserData = await getUser(log.body.token);
      dispatch(
        setUser({
          firstName: getUserData.body.firstName,
          lastName: getUserData.body.lastName,
          email: values.email,
          token: log.body.token,
        })
      );
      navigate(routes.PROFILE)
    }
    catch(error){
      console.log(error?.message)
      toast.error(error.message)
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={loginUser}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        <div className="absolute">
        <ToastContainer />
        </div>
      </section>
    </main>
  );
};

export default SignIn;
