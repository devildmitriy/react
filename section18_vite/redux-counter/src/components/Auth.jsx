import { useDispatch } from "react-redux";
import { useRef } from "react";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();


  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if(emailRef.current.value.trim() !== '' && passwordRef.current.value.trim() !== ''){
      dispatch(authActions.login())
    }    
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
